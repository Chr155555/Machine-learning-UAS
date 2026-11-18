import { NextRequest, NextResponse } from 'next/server';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import fs from 'node:fs/promises';
import os from 'node:os';

const execFileAsync = promisify(execFile);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const model = (formData.get('model') as string) || 'hybrid';
    const sampleName = formData.get('sample_name') as string | null;
    const file = formData.get('image') as File | null;

    let targetImagePath = '';
    let isTempFile = false;

    if (sampleName) {
      targetImagePath = path.join(process.cwd(), 'public', 'samples', sampleName);
    } else if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const tempFileName = `upload_${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
      targetImagePath = path.join(os.tmpdir(), tempFileName);
      await fs.writeFile(targetImagePath, buffer);
      isTempFile = true;
    } else {
      return NextResponse.json(
        { status: 'error', message: 'Tidak ada gambar yang diunggah atau dipilih.' },
        { status: 400 }
      );
    }

    const scriptPath = path.join(process.cwd(), 'lib', 'predict_cli.py');

    // Execute Python CLI
    const { stdout, stderr } = await execFileAsync('python', [scriptPath, targetImagePath, model], {
      timeout: 30000,
      maxBuffer: 10 * 1024 * 1024,
    });

    // Cleanup temp file
    if (isTempFile) {
      fs.unlink(targetImagePath).catch(() => {});
    }

    // Parse JSON output from last non-empty line of stdout
    const lines = stdout.trim().split('\n').filter(l => l.trim().length > 0);
    const lastLine = lines[lines.length - 1];
    const data = JSON.parse(lastLine);

    return NextResponse.json(data);
  } catch (err: any) {
    console.error('Error in /api/predict:', err);
    return NextResponse.json(
      { status: 'error', message: err.message || 'Gagal memproses inferensi model.' },
      { status: 500 }
    );
  }
}
