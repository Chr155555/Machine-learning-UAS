# Database Informasi Penyakit Daun Tanaman PlantDoc
# Berisi metadata lengkap untuk 28 kelas (nama latin/lokal, status, gejala, dan penanganan agronomis)

DISEASE_DB = {
    'Apple_Scab_Leaf': {
        'name_id': 'Keropeng Daun Apel',
        'name_en': 'Apple Scab',
        'plant': 'Apel (Malus domestica)',
        'is_healthy': False,
        'severity': 'Sedang - Tinggi',
        'pathogen': 'Jamur (Venturia inaequalis)',
        'description': 'Muncul bercak hijau zaitun hingga cokelat kehitaman dengan tepi tidak beraturan pada permukaan daun. Daun yang terinfeksi parah dapat menguning, mengerut, dan rontok prematur.',
        'treatment': [
            'Semprotkan fungisida berbahan aktif Mankozeb, Kaptan, atau Difenokonazol pada fase awal infeksi.',
            'Pangkas ranting yang terinfeksi untuk meningkatkan sirkulasi udara di tajuk pohon.',
            'Kumpulkan dan bakar daun-daun yang gugur di sekitar pangkal pohon agar spora jamur tidak bertahan hidup di tanah.'
        ]
    },
    'Apple_leaf': {
        'name_id': 'Daun Apel Sehat',
        'name_en': 'Healthy Apple Leaf',
        'plant': 'Apel (Malus domestica)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Daun tampak segar, berwarna hijau merata tanpa bercak lesi, nekrosis, maupun tanda-tanda serangan hama jamur/bakteri.',
        'treatment': [
            'Lanjutkan pemeliharaan rutin dengan penyiraman seimbang.',
            'Berikan pupuk daun seimbang (N-P-K) dan unsur mikro sesuai fase pertumbuhan tanaman.',
            'Lakukan pemantauan berkala terhadap kelembapan dan tanda awal serangan serangga penular.'
        ]
    },
    'Apple_rust_leaf': {
        'name_id': 'Karat Daun Apel',
        'name_en': 'Cedar Apple Rust',
        'plant': 'Apel (Malus domestica)',
        'is_healthy': False,
        'severity': 'Sedang',
        'pathogen': 'Jamur (Gymnosporangium juniperi-virginianae)',
        'description': 'Timbul bintik-bintik kuning-oranye cerah di permukaan atas daun yang lambat laun membesar dan membentuk tonjolan tabung spora di bawah daun.',
        'treatment': [
            'Aplikasikan fungisida sistemik seperti Miklobutanil atau Propikonazol saat kuncup mulai mekar.',
            'Hindari menanam pohon apel berdekatan dengan pohon inang sekunder (seperti Juniper/Cypress).',
            'Lakukan sanitasi kebun secara rutin dan buang daun yang terinfeksi parah.'
        ]
    },
    'Bell_pepper_leaf': {
        'name_id': 'Daun Paprika Sehat',
        'name_en': 'Healthy Bell Pepper Leaf',
        'plant': 'Paprika / Cabai Besar (Capsicum annuum)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Struktur daun utuh, warna hijau mengkilap alami, permukaan daun elastis dan tidak ada bercak klorosis.',
        'treatment': [
            'Jaga drainase bedengan agar tidak tergenang air.',
            'Berikan nutrisi kalsium dan kalium untuk memperkuat dinding sel tanaman.',
            'Lakukan pencegahan preventif dengan menyemprotkan pestisida nabati atau agen hayati Trichoderma.'
        ]
    },
    'Bell_pepper_leaf_spot': {
        'name_id': 'Bercak Bakteri Daun Paprika',
        'name_en': 'Bacterial Leaf Spot',
        'plant': 'Paprika / Cabai Besar (Capsicum annuum)',
        'is_healthy': False,
        'severity': 'Tinggi',
        'pathogen': 'Bakteri (Xanthomonas campestris pv. vesicatoria)',
        'description': 'Lesi kecil basah berair pada daun yang berubah menjadi bercak cokelat kehitaman melingkar dengan lingkaran kuning di sekelilingnya.',
        'treatment': [
            'Gunakan bakterisida berbasis tembaga (Tembaga Oksiklorida atau Tembaga Hidroksida).',
            'Hindari penyiraman dengan sprinkler dari atas agar air tidak menyebarkan percikan bakteri antar daun.',
            'Cabut dan musnahkan tanaman yang terinfeksi berat guna melindungi tanaman sekitar.'
        ]
    },
    'Blueberry_leaf': {
        'name_id': 'Daun Bluberi Sehat',
        'name_en': 'Healthy Blueberry Leaf',
        'plant': 'Bluberi (Vaccinium corymbosum)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Kondisi daun sehat, jaringan mesofil hijau segar, tidak terlihat perubahan warna kemerahan atau nekrosis abnormal.',
        'treatment': [
            'Pertahankan pH tanah yang asam (sekitar 4.5 - 5.5) yang disukai tanaman bluberi.',
            'Gunakan mulsa organik dari serbuk kayu cemara untuk menjaga kelembapan tanah.',
            'Lakukan irigasi tetes secara teratur terutama pada musim kemarau.'
        ]
    },
    'Cherry_leaf': {
        'name_id': 'Daun Ceri Sehat',
        'name_en': 'Healthy Cherry Leaf',
        'plant': 'Ceri (Prunus avium)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Daun simetris, berkilau, dan bebas dari bercak lubang peluru (shot-hole) maupun jamur embun tepung.',
        'treatment': [
            'Lakukan pemangkasan kanopi tahunan untuk sirkulasi cahaya matahari yang optimal.',
            'Berikan pupuk kandang matang atau kompos organik di awal musim semi.',
            'Monitoring rutin keberadaan kutu daun dan tungau.'
        ]
    },
    'Corn_Gray_leaf_spot': {
        'name_id': 'Bercak Abu-abu Daun Jagung',
        'name_en': 'Corn Gray Leaf Spot',
        'plant': 'Jagung (Zea mays)',
        'is_healthy': False,
        'severity': 'Tinggi',
        'pathogen': 'Jamur (Cercospora zeae-maydis)',
        'description': 'Lesi berbentuk persegi panjang sempit sejajar dengan tulang daun, berwarna cokelat hingga abu-abu pucat. Menghambat fotosintesis secara drastis.',
        'treatment': [
            'Gunakan varietas benih jagung hibrida yang tahan terhadap Gray Leaf Spot.',
            'Aplikasikan fungisida golongan Strobilurin (Azoksistrobin) atau Triazol saat fase rontok benang sari.',
            'Lakukan rotasi tanaman dengan non-gramineae (misalnya kedelai) selama 1-2 musim tanam.'
        ]
    },
    'Corn_leaf_blight': {
        'name_id': 'Hawar Daun Jagung',
        'name_en': 'Northern Corn Leaf Blight',
        'plant': 'Jagung (Zea mays)',
        'is_healthy': False,
        'severity': 'Tinggi',
        'pathogen': 'Jamur (Exserohilum turcicum)',
        'description': 'Bercak memanjang berbentuk lonjong atau cerutu berukuran besar (2-15 cm) berwarna abu-abu kehijauan hingga kecokelatan yang cepat menyebar.',
        'treatment': [
            'Semprotkan fungisida Difenokonazol atau Tebukonazol pada saat gejala awal muncul.',
            'Tingkatkan jarak tanam agar kelembapan kanopi jagung tidak terlalu rapat.',
            'Bersihkan sisa jerami tanaman jagung pasca panen yang berpotensi menyimpan inokulum jamur.'
        ]
    },
    'Corn_rust_leaf': {
        'name_id': 'Karat Daun Jagung',
        'name_en': 'Common Corn Rust',
        'plant': 'Jagung (Zea mays)',
        'is_healthy': False,
        'severity': 'Sedang',
        'pathogen': 'Jamur (Puccinia sorghi)',
        'description': 'Pustul kecil berwarna cokelat kemerahan atau oranye bertepung muncul di kedua sisi permukaan daun jagung.',
        'treatment': [
            'Aplikasi fungisida protektif berbahan aktif Mankozeb atau Piraklostrobin bila serangan melewati ambang ekonomi.',
            'Pemberian pupuk Kalium (K) yang cukup untuk meningkatkan resistensi dinding sel.',
            'Penanaman serentak di satu kawasan untuk memutus siklus spora terbang.'
        ]
    },
    'Peach_leaf': {
        'name_id': 'Daun Persik Sehat',
        'name_en': 'Healthy Peach Leaf',
        'plant': 'Persik (Prunus persica)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Daun berbentuk lanset dengan warna hijau cerah tanpa keriting daun (leaf curl) atau lubang-lubang nekrotik.',
        'treatment': [
            'Semprotkan fungisida dorman tembaga pada saat tanaman memasuki masa gugur daun sebagai pencegahan dini.',
            'Pastikan tanaman mendapatkan sinar matahari penuh minimal 6-8 jam per hari.',
            'Cukupi kebutuhan air terutama pada masa pembesaran buah.'
        ]
    },
    'Potato_leaf_early_blight': {
        'name_id': 'Hawar Dini Daun Kentang',
        'name_en': 'Potato Early Blight',
        'plant': 'Kentang (Solanum tuberosum)',
        'is_healthy': False,
        'severity': 'Sedang - Tinggi',
        'pathogen': 'Jamur (Alternaria solani)',
        'description': 'Bercak cokelat tua bulat dengan pola cincin konsentris mirip papan target panahan (*target-board pattern*). Biasanya menyerang daun tua di bagian bawah.',
        'treatment': [
            'Semprotkan fungisida Klorotalonil atau Azoksistrobin secara bergantian.',
            'Hindari stres kekeringan dan berikan pemupukan Nitrogen yang berimbang (tidak berlebih).',
            'Gunakan mulsa jerami/plastik perak untuk mencegah percikan tanah mengenai daun bawah.'
        ]
    },
    'Potato_leaf_late_blight': {
        'name_id': 'Hawar Daun Lanjut Kentang',
        'name_en': 'Potato Late Blight',
        'plant': 'Kentang (Solanum tuberosum)',
        'is_healthy': False,
        'severity': 'Sangat Tinggi (Kritis)',
        'pathogen': 'Oomycetes (Phytophthora infestans)',
        'description': 'Penyakit paling mematikan pada kentang. Bercak besar gelap basah berair yang berkembang sangat cepat dan membusuk, seringkali disertai lapisan jamur putih di bawah daun saat cuaca lembap.',
        'treatment': [
            'Tindakan cepat: semprotkan fungisida sistemik Metalaksil, Dimetomorf, atau Simoksanil.',
            'Musnahkan segera tanaman yang sudah membusuk agar tidak menyebar ke seluruh petak kebun.',
            'Pilih bibit kentang bersertifikat bebas Phytophthora.'
        ]
    },
    'Raspberry_leaf': {
        'name_id': 'Daun Rasberi Sehat',
        'name_en': 'Healthy Raspberry Leaf',
        'plant': 'Rasberi (Rubus idaeus)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Daun bergerigi rapi berwarna hijau tua pekat tanpa bercak karat atau busuk batang.',
        'treatment': [
            'Berikan penyangga ajir/teralis agar batang tanaman berdiri tegak dan tidak menyentuh tanah.',
            'Pangkas batang tua yang sudah selesai berbuah untuk merangsang tunas baru.',
            'Siram pada pangkal tanaman, hindari membasahi dedaunan.'
        ]
    },
    'Soyabean_leaf': {
        'name_id': 'Daun Kedelai Sehat',
        'name_en': 'Healthy Soybean Leaf',
        'plant': 'Kedelai (Glycine max)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Daun majemuk trifoliat berwarna hijau segar tanpa klorosis mosaik atau serangan karat daun kedelai.',
        'treatment': [
            'Lakukan inokulasi bakteri Rhizobium pada benih sebelum tanam untuk fiksasi nitrogen alami.',
            'Kendalikan gulma pada 30 hari pertama setelah tanam (fase kritis persaingan nutrisi).',
            'Jaga saluran air pembuangan agar terhindar dari penyakit busuk akar Rhizoctonia.'
        ]
    },
    'Squash_Powdery_mildew_leaf': {
        'name_id': 'Embun Tepung Daun Labu',
        'name_en': 'Squash Powdery Mildew',
        'plant': 'Labu / Waluh (Cucurbita pepo)',
        'is_healthy': False,
        'severity': 'Sedang',
        'pathogen': 'Jamur (Podosphaera xanthii)',
        'description': 'Lapisan serbuk putih menyerupai taburan bedak/tepung di permukaan daun. Daun yang tertutup tepung akan menguning, kering, dan rapuh.',
        'treatment': [
            'Aplikasikan fungisida belerang (Sulfur) atau larutan potasium bikarbonat.',
            'Gunakan fungisida nabati seperti larutan minyak mimba (Neem Oil).',
            'Kurangi pemupukan Nitrogen berlebih yang memicu pertumbuhan daun terlalu rimbun dan lunak.'
        ]
    },
    'Strawberry_leaf': {
        'name_id': 'Daun Stroberi Sehat',
        'name_en': 'Healthy Strawberry Leaf',
        'plant': 'Stroberi (Fragaria ananassa)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Helai daun berwarna hijau tua dengan tekstur kasar berbulu halus, bebas dari bercak mata burung atau kutu daun.',
        'treatment': [
            'Gunakan mulsa plastik hitam perak agar daun dan buah stroberi tidak menyentuh tanah becek.',
            'Pangkas stolon (sulur) yang tidak diperlukan agar nutrisi terfokus ke pembungaan dan daun utama.',
            'Berikan pupuk hayati mikoriza untuk memperkuat sistem perakaran.'
        ]
    },
    'Tomato_Early_blight_leaf': {
        'name_id': 'Hawar Dini Daun Tomat',
        'name_en': 'Tomato Early Blight',
        'plant': 'Tomat (Solanum lycopersicum)',
        'is_healthy': False,
        'severity': 'Sedang - Tinggi',
        'pathogen': 'Jamur (Alternaria solani)',
        'description': 'Bercak cokelat melingkar konsentris dengan halo kuning di tepinya, menyebabkan daun bawah rontok berurutan ke atas.',
        'treatment': [
            'Pangkas daun-daun bawah setinggi 30 cm dari permukaan tanah (pruning bawah).',
            'Semprotkan fungisida Mankozeb atau Klorotalonil secara terjadwal setiap 7-10 hari.',
            'Lakukan sanitasi kebun dan perbaiki drainase bedengan.'
        ]
    },
    'Tomato_Septoria_leaf_spot': {
        'name_id': 'Bercak Daun Septoria Tomat',
        'name_en': 'Tomato Septoria Leaf Spot',
        'plant': 'Tomat (Solanum lycopersicum)',
        'is_healthy': False,
        'severity': 'Tinggi',
        'pathogen': 'Jamur (Septoria lycopersici)',
        'description': 'Banyak bintik kecil melingkar (diameter 2-3 mm) dengan bagian tengah berwarna abu-abu terang dan pinggiran cokelat gelap. Daun cepat menguning dan gugur massal.',
        'treatment': [
            'Hindari menyiram daun di sore/malam hari agar daun cepat kering.',
            'Semprotkan fungisida tembaga atau Difenokonazol sejak gejala pertama tampak.',
            'Pasang mulsa plastik untuk menahan percikan tanah pembawa spora.'
        ]
    },
    'Tomato_leaf': {
        'name_id': 'Daun Tomat Sehat',
        'name_en': 'Healthy Tomato Leaf',
        'plant': 'Tomat (Solanum lycopersicum)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Daun lebat, berwarna hijau segar beraroma khas tomat, bebas dari bercak, keriting, maupun bekas tusukan hama.',
        'treatment': [
            'Lakukan pengikatan batang ke ajir secara teratur seiring pertambahan tinggi tanaman.',
            'Berikan pupuk berimbang dengan kalsium nitrat untuk mencegah busuk ujung buah (BER).',
            'Pasang perangkap kuning (*yellow sticky trap*) untuk monitoring serangga vektor kutu kebul.'
        ]
    },
    'Tomato_leaf_bacterial_spot': {
        'name_id': 'Bercak Bakteri Daun Tomat',
        'name_en': 'Tomato Bacterial Spot',
        'plant': 'Tomat (Solanum lycopersicum)',
        'is_healthy': False,
        'severity': 'Tinggi',
        'pathogen': 'Bakteri (Xanthomonas vesicatoria)',
        'description': 'Bercak kecil gelap berminyak berair di permukaan daun yang berkembang menjadi luka nekrotik kecokelatan rapuh.',
        'treatment': [
            'Semprotkan bakterisida tembaga dikombinasikan dengan fungisida Mankozeb.',
            'Gunakan benih bersertifikat bebas penyakit bakteri.',
            'Sterilkan alat pangkas (gunting/pisau) dengan alkohol sebelum berpindah antar tanaman.'
        ]
    },
    'Tomato_leaf_late_blight': {
        'name_id': 'Hawar Daun Lanjut Tomat',
        'name_en': 'Tomato Late Blight',
        'plant': 'Tomat (Solanum lycopersicum)',
        'is_healthy': False,
        'severity': 'Sangat Tinggi (Kritis)',
        'pathogen': 'Oomycetes (Phytophthora infestans)',
        'description': 'Lesi besar berwarna hijau kelabu gelap seperti tersiram air mendidih, cepat mengering dan menghitam. Seluruh tanaman bisa mati dalam kurun waktu 3-5 hari saat cuaca dingin lembap.',
        'treatment': [
            'Semprotkan fungisida kuratif Dimetomorf, Simoksanil, atau Mandipropamid sesegera mungkin.',
            'Cabut dan bakar tanaman yang sudah terlanjur rebah/busuk total.',
            'Jangan menanam tomat dekat kebun kentang.'
        ]
    },
    'Tomato_leaf_mosaic_virus': {
        'name_id': 'Virus Mosaik Daun Tomat',
        'name_en': 'Tomato Mosaic Virus (ToMV)',
        'plant': 'Tomat (Solanum lycopersicum)',
        'is_healthy': False,
        'severity': 'Tinggi (Sistemik)',
        'pathogen': 'Virus (Tomato Mosaic Tobamovirus)',
        'description': 'Pola belang-belang hijau muda dan hijau tua menyerupai mosaik, daun menyempit berbentuk tali sepatu (*shoestring*), dan tanaman kerdil.',
        'treatment': [
            'Penyakit virus tidak dapat disembuhkan dengan pestisida kimia.',
            'Cabut dan musnahkan tanaman yang terinfeksi untuk memutus rantai penularan.',
            'Cuci tangan dengan sabun dan hindari merokok saat memegang tanaman karena virus tembakau mudah menular mekanik.'
        ]
    },
    'Tomato_leaf_yellow_virus': {
        'name_id': 'Virus Kuning Keriting Daun Tomat',
        'name_en': 'Tomato Yellow Leaf Curl Virus (TYLCV)',
        'plant': 'Tomat (Solanum lycopersicum)',
        'is_healthy': False,
        'severity': 'Tinggi',
        'pathogen': 'Virus (Begomovirus) ditularkan oleh Kutu Kebul (Bemisia tabaci)',
        'description': 'Tepi daun melengkung ke atas seperti mangkuk, menguning klorosis parah di antara tulang daun, dan pertumbuhan vegetatif macet kerdil.',
        'treatment': [
            'Kendalikan vektor serangga kutu kebul dengan insektisida Imidakloprid atau Abamektin.',
            'Gunakan kelambu kasa serangga (*insect net mesh 50*) di pembibitan.',
            'Eradikasi tanaman sakit sedini mungkin agar virus tidak disedot serangga lain.'
        ]
    },
    'Tomato_mold_leaf': {
        'name_id': 'Kapang Daun Tomat',
        'name_en': 'Tomato Leaf Mold',
        'plant': 'Tomat (Solanum lycopersicum)',
        'is_healthy': False,
        'severity': 'Sedang',
        'pathogen': 'Jamur (Passalora fulva)',
        'description': 'Bercak kuning pucat di permukaan atas daun yang bersesuaian dengan lapisan bulu halus berwarna hijau zaitun atau ungu beludru di permukaan bawah daun.',
        'treatment': [
            'Tingkatkan ventilasi greenhouse atau buka sirkulasi udara kebun untuk menurunkan kelembapan relatif di bawah 85%.',
            'Aplikasikan fungisida tembaga atau fungisida kelompok Triazol.',
            'Pangkas daun-daun tua yang saling menumpuk.'
        ]
    },
    'Tomato_two_spotted_spider_mites_leaf': {
        'name_id': 'Serangan Tungau Dua Titik Tomat',
        'name_en': 'Two-Spotted Spider Mites',
        'plant': 'Tomat (Solanum lycopersicum)',
        'is_healthy': False,
        'severity': 'Sedang - Tinggi',
        'pathogen': 'Hama Tungau (Tetranychus urticae)',
        'description': 'Bintik-bintik putih kekuningan (*stippling*) akibat hisapan sel daun, disertai jaring sarang laba-laba halus di balik daun. Daun menjadi kusam seperti berdebu perunggu.',
        'treatment': [
            'Semprotkan akarisida khusus berbahan aktif Piridaben atau Abamektin.',
            'Gunakan musuh alami seperti predator tungau Phytoseiulus persimilis.',
            'Siram daun bagian bawah dengan semprotan air kencang untuk merusak jaring sarang tungau.'
        ]
    },
    'grape_leaf': {
        'name_id': 'Daun Anggur Sehat',
        'name_en': 'Healthy Grape Leaf',
        'plant': 'Anggur (Vitis vinifera)',
        'is_healthy': True,
        'severity': 'Aman (Tanaman Sehat)',
        'pathogen': 'Tidak ada (Kondisi Normal)',
        'description': 'Daun menjari lebar dengan lekukan khas yang hijau segar, mengkilap, dan bebas dari bercak karat atau jamur embun bulu.',
        'treatment': [
            'Tata tajuk rambatan para-para (*trellis*) agar setiap daun menerima sinar matahari merata.',
            'Semprotkan pupuk mikro zink dan magnesium untuk memperkuat warna hijau daun klorofil.',
            'Kendalikan kelembapan tanah agar tidak memicu busuk perakaran.'
        ]
    },
    'grape_leaf_black_rot': {
        'name_id': 'Busuk Hitam Daun Anggur',
        'name_en': 'Grape Black Rot',
        'plant': 'Anggur (Vitis vinifera)',
        'is_healthy': False,
        'severity': 'Tinggi',
        'pathogen': 'Jamur (Guignardia bidwellii)',
        'description': 'Bercak cokelat kemerahan berbentuk bulat dengan titik-titik hitam kecil (*pycnidia*) di tengah lingkaran lesi. Menyebabkan daun kering dan buah mengkerut hitam seperti kismis mumi.',
        'treatment': [
            'Aplikasikan fungisida Mankozeb, Kaptan, atau Miklobutanil dari awal tunas tumbuh hingga pasca pembungaan.',
            'Pangkas dan buang ranting serta buah mumi sisa musim lalu yang menempel di teralis.',
            'Jaga area bawah tanaman bebas dari rumput liar yang lembap.'
        ]
    }
}
