// ==========================================================================
// 1. DATABASE DATA KRITERIA DINAMIS (WJSPORT)
// ==========================================================================
const databaseKriteria = {
    "KAOS": [
        { label: "MODE KAOS", isi: ["KERUNG", "RAGLAN", "SINGLET", "TUNIK", "STANDART"] },
        { label: "BENTUK KRAH", isi: ["OBLONG O", "OBLONG V", "SANGHAI", "KRAH PASPOL DLM", "KRAH PASPOL LUAR", "KRAH SAKU", "KRAH TANPA SAKU"] },
        { label: "UJUNG LENGAN", isi: ["PLONG", "MANSET", "SAMBUNG KAIN", "MELET", "RIB"] },
        { label: "MODEL BADAN", isi: ["REGULER", "MBANGKEK", "POLA A"] },
        { label: "CUTTING BAWAH", isi: ["REGULER", "DROPCUT", "BELAH SAMPING"] },
        { label: "KANTONG", isi: ["PASPOL SEWARNA", "PASPOL BEDA WARNA", "TEMPEL REGULER", "TEMPEL SEGITIGA", "TEMPEL MEMBULAT"] },
        { label: "SAKU SAMPING", isi: ["TUNIK PASPOL", "TUNIK BELAHAN"] },
        { label: "PATCH", isi: ["SABLON", "DTF", "BORDIR"] },
        { label: "DESAIN DEPAN", isi: ["DEPAN TENGAH", "DADA KANAN", "DADA KIRI", "DPN SMPING KANAN", "DPN SMPING KIRI", "DPN BWH KANAN", "DPN BWH TENGAH", "DPN BWH KIRI"] },
        { label: "DESAIN BELAKANG", isi: ["BLKNG LEHER", "BLKNG TENGAH", "BLKNG ATAS KANAN", "BLKNG ATAS KIRI", "BLKNG BWH KANAN", "BLKNG BWH TNGAH", "BLKNG BWH KIRI", "BLKNG SMPING KANAN", "BLKNG SMPING KIRI"] },
        { label: "DESAIN LENGAN", isi: ["PATCH KIRI", "PATCH KANAN", "SABLON", "DTF", "BORDIR"] },
        { label: "LABEL", isi: ["WJ SPORT", "JERSEY", "POLOS", "CUSTOM"] }
    ],
    "ROMPI": [
        { label: "MODEL ROMPI", isi: ["LAPANGAN", "PARKIR", "DINAS"] },
        { label: "KANTONG", isi: ["KOTAK", "BOX", "GEMBOS", "KANTONG DALAM"] },
        { label: "LABEL", isi: ["WJ SPORT", "JERSEY", "POLOS", "CUSTOM"] },
        { label: "BAHAN", isi: ["DRILL", "TASLAN", "JARING"] }
    ],
    "JAKET": [
        { label: "MODE", isi: ["JAKET", "HOODIE", "KERUNG", "RAGLAN"] },
        { label: "FURING", isi: ["PAKAI FURING", "TANPA FURING"] },
        { label: "UJUNG LENGAN", isi: ["PLONG", "RIP", "VELCRO", "ELASTIS"] },
        { label: "MODEL KRAH", isi: ["TANPA TUDUNG", "TUDUNG", "BOMBER"] },
        { label: "MODE RESLETING", isi: ["RESLETING 1/2", "RESLETING FULL", "TANPA RESLETING"] },
        { label: "CUTTING BAWAH", isi: ["PLONG", "RIP", "ELASTIS PRUSIK+STOPPER"] },
        { label: "SAKU UTAMA", isi: ["KANGURU", "SAKU MIRING", "SAKU RESLETING", "SAKU TEMPEL"] },
        { label: "SAKU TAMBAHAN", isi: ["SAKU PASPOL", "SAKU DALAM", "SAKU GEMBOS", "SAKU BLKNG RESLETING", "SAKU BLKNG TUTUP(TEMPEL)", "SAKU BLKNG TEMPEL"] },
        { label: "PATCH", isi: ["BORDIR", "DTF", "SABLON"] }
    ],
    "JAS ALMAMATER": [
        { label: "MODE", isi: ["KERUNG", "LAIN-LAIN"] },
        { label: "LAPEL", isi: ["POLOS", "LIS"] },
        { label: "UJUNG LENGAN", isi: ["POLOS TNPA KANCINGA", "KANCING 1", "KANCING 2"] },
        { label: "MODEL KANCING DPN", isi: ["TNPA KANCING", "KANCING 1", "KANCING 2", "KANCING 3"] },
        { label: "LAJUR SAKU", isi: ["DATAR TNPA TUTUP", "DATAR TUTUP", "MIRING (TDK BISA TUTUP)"] },
        { label: "TIPE SAKU", isi: ["SAKU DALAM (KIRI)", "SAKU LUAR DADA PASPOL", "SAKU LUAR BAWAH", "DENGAN TUTUP", "BWH TANPA TUTUP", "TUTUP + LIS"] },
        { label: "CUTINGAN BAWAH", isi: ["REGULER", "DROPCUT"] },
        { label: "PATCH", isi: ["BORDIR", "SABLON", "DTF"] }
    ],
    "TRAINING": [
        { label: "MODE", isi: ["STANDAR", "JOGER"] },
        { label: "UJUNG CELANA", isi: ["PLONG", "RIP", "KARET"] },
        { label: "SAKU", isi: ["TEMPEL 1", "TEMPEL 2", "GANDUL 1", "GANDUL 2", "GEMBOS", "TEMPEL BLKNG"] },
        { label: "TUTUP SAKU", isi: ["TANPA RESLETING", "RESLETING"] },
        { label: "PATCH", isi: ["BORDIR", "SABLON", "DTF"] }
    ],
    "KEMEJA": [
        { label: "MODE", isi: ["KERUNG", "RAGLAN", "STANDAR", "TUNIK"] },
        { label: "KRAH", isi: ["REGULER", "SANGHAI", "CASUAL"] },
        { label: "UJUNG LENGAN", isi: ["PLONG", "MANSET", "SAMBUNGAN", "MELET"] },
        { label: "PATCH", isi: ["BORDIR", "DTF"] },
        { label: "CUTTING BAWAH", isi: ["REGULER", "BELAH SAMPING", "DROPCUT"] },
        { label: "TMPAT KNCING/PLAKET", isi: ["REGULER", "TUTUP KNCING/SEMBUNYI", "STIK DOBEL", "TTUP KNCING LIS"] },
        { label: "ASESORIS TAMBAHAN", isi: ["DEK PUNDAK", "TALI SKODER", "TEMPAT PULPEN"] },
        { label: "VENTILASI BLKNG", isi: ["VENTILASI VERTIKAL", "VENTILASI HORIZONTAL"] },
        { label: "SAKU", isi: ["TEMPEL", "PASPOL", "SAMPING", "GEMBOS", "RESLETING"] },
        { label: "BENTUK SAKU", isi: ["TANPA TUTUP", "DENGAN TUTUP", "REGULAR", "KOTAK", "TACTICAL", "BULAT", "SEGITIGA", "SAFARI", "BOX"] }
    ],
    "WEARPACK": [
        { label: "MODE", isi: ["KERUNG", "RAGLAN", "COVER ALL"] },
        { label: "KRAH", isi: ["REGULER"] },
        { label: "UJUNG LENGAN", isi: ["PLONG", "MANSET", "SAMBUNGAN"] },
        { label: "PATCH", isi: ["BORDIR", "DTF", "SABLON"] },
        { label: "CUTTING BAWAH", isi: ["REGULER", "BELAH SAMPING", "DROPCUT"] },
        { label: "TMPAT KNCING/PLAKET", isi: ["RESLETING", "REGULER", "TUTUP KNCING/SEMBUNYI", "STIK DOBEL", "TTUP KNCING LIS"] },
        { label: "ASESORIS TAMBAHAN", isi: ["DEK PUNDAK", "TALI SKODER", "TEMPAT PULPEN"] },
        { label: "VENTILASI BLKNG", isi: ["VENTILASI VERTIKAL", "VENTILASI HORIZONTAL"] },
        { label: "SAKU", isi: ["TEMPEL", "PASPOL", "SAMPING", "GEMBOS", "RESLETING"] },
        { label: "BENTUK SAKU", isi: ["TANPA TUTUP", "DENGAN TUTUP", "REGULAR", "KOTAK", "TACTICAL", "BULAT", "SEGITIGA", "SAFARI", "BOX"] },
        { label: "SAKU CELANA", isi: ["DALAM", "TEMPEL"] }
    ],
    "SETELAN BAJU": [
        { label: "ATASAN", isi: ["BAJU PANJANG", "BAJU PENDEK"] },
        { label: "BAWAHAN", isi: ["CELANA PANJANG", "CELANA PENDEK", "ROK"] },
        { label: "MODEL KRAH", isi: ["REGULER", "SANGHAI"] },
        { label: "UJUNG LENGAN", isi: ["PLONG", "MANSET"] },
        { label: "PATCH", isi: ["SABLON", "DTF", "BORDIR"] },
        { label: "KANTONG", isi: ["BOX", "SAFARI"] }
    ],
    "SETELAN OR": [
        { label: "PAKET", isi: ["STELAN LENGKAP", "KAOS", "KAOS SAJA", "PANJANG", "PENDEK", "CELANA", "CELANA SAJA", "PANJANG", "PENDEK"] },
        { label: "PATCH", isi: ["SABLON", "DTF", "BORDIR"] },
        { label: "KRAH KAOS", isi: ["OBLONG", "MIZUNO", "V-SIMETRIS", "KRAH PASPOL", "KRAH-V"] },
        { label: "UJUNG LENGAN", isi: ["PLONG", "RIB", "MELET", "SAMBUNG KAIN"] },
        { label: "CELANA", isi: ["ADIDAS", "LIS", "BLOK"] },
        { label: "KANTONG CELANA", isi: ["TEMPEL", "GEMBOS", "GANDUL"] },
        { label: "UJUNG CELANA", isi: ["PLONG", "RIB"] },
        { label: "LABEL", isi: ["WJ SPORT", "JERSEY", "POLOS", "CUSTOM"] }
    ],
    "ATRIBUT": [
        { label: "TOPI DASI", isi: ["TOPI", "DASI", "IKAT PINGGANG"] },
        { label: "BADGE/BET 1", isi: ["LOGO SEKOLAH", "NAMA", "LOKASI", "PANGKAT"] },
        { label: "BADGE/BET 2", isi: ["OSIS SMP", "OSIS SMA", "BENDERA", "PMI", "PMR"] },
        { label: "BET PRAMUKA", isi: ["TUNAS PA", "TUNAS PI", "PANDU PA", "PANDU PI", "LOKASI KABUPATEN", "LOGO KAB"] },
        { label: "PANDU DUNIA & GUDEP", isi: ["PANDU PA", "PANDU PI", "GUDEP"] }
    ]
};

// ==========================================================================
// 2. SISTEM GENERATE OPSI MENU KANAN DAN TABEL KIRI
// ==========================================================================
function updateDynamicMenu() {
    const model = document.getElementById('model_global').value;
    const kananContainer = document.getElementById('pilihan-opsi-dinamis');
    const kiriContainer = document.getElementById('menu-area');
    kananContainer.innerHTML = ""; kiriContainer.innerHTML = "";

    if (model && databaseKriteria[model]) {
        databaseKriteria[model].forEach((item, idx) => {
            const rightBox = document.createElement('div');
            rightBox.className = 'checkbox-container-right';
            const rightTitle = document.createElement('div');
            rightTitle.className = 'section-title-right';
            rightTitle.innerText = item.label;
            rightBox.appendChild(rightTitle);

            item.isi.forEach((opt, i) => {
                const labelObj = document.createElement('label');
                labelObj.className = 'check-item-right';
                const chk = document.createElement('input');
                chk.type = 'checkbox';
                chk.id = `opt-${idx}-${i}`;
                chk.value = opt;
                chk.addEventListener('change', hitungUlangPilihanKiri);
                labelObj.appendChild(chk);
                labelObj.appendChild(document.createTextNode(" " + opt));
                rightBox.appendChild(labelObj);
            });
            kananContainer.appendChild(rightBox);

            const leftBox = document.createElement('div');
            leftBox.className = 'menu-item';
            leftBox.id = `left-block-${idx}`;
            leftBox.innerHTML = `
                <div class="menu-header">${item.label}</div>
                <div id="left-val-${idx}" style="padding:4px 2px; text-align:center; font-weight:900; font-size:10px; color:#000; min-height:25px; display:flex; align-items:center; justify-content:center; line-height:1.2;">-</div>
            `;
            kiriContainer.appendChild(leftBox);
        });
    } else {
        kananContainer.innerHTML = "<p class='notif-pilih'>← Pilih Jenis <strong>MODEL</strong> terlebih dahulu pada lembar order untuk memunculkan daftar opsi kerja.</p>";
        kiriContainer.innerHTML = "<p style='grid-column: span 6; text-align: center; color: #999; padding: 20px; font-size:12px;'>MENUNGGU MODEL DIISI...</p>";
    }
}

function hitungUlangPilihanKiri() {
    const model = document.getElementById('model_global').value;
    if (!model || !databaseKriteria[model]) return;
    databaseKriteria[model].forEach((item, idx) => {
        const blockKanan = document.getElementsByClassName('checkbox-container-right')[idx];
        if(blockKanan) {
            const checkedBoxes = Array.from(blockKanan.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value);
            const targetTeksKiri = document.getElementById(`left-val-${idx}`);
            if(targetTeksKiri) { targetTeksKiri.innerText = checkedBoxes.length > 0 ? checkedBoxes.join(", ").toUpperCase() : "-"; }
        }
    });
}

// ==========================================================================
// 3. FITUR UTILS (QR CODE & FORMAT TANGGAL)
// ==========================================================================
function updateQR() {
    const qrcodeDiv = document.getElementById("qrcode"); qrcodeDiv.innerHTML = ""; 
    const nolo = (document.getElementById("nolo").value || "000").toUpperCase();
    const nama = (document.getElementById("nama").value || "NONAME").toUpperCase();
    const orderan = (document.getElementById("orderan").value || "-").toUpperCase();
    const model = (document.getElementById("model_global").value || "-").toUpperCase();
    new QRCode(qrcodeDiv, { text: `${nolo}\t${nama}\t${orderan}\t${model}`, width: 128, height: 128, correctLevel: QRCode.CorrectLevel.H });
}

function formatTanggalIndo(dateStr) {
    if(!dateStr) return "-";
    const bulanIndo = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"];
    const d = new Date(dateStr); return `${d.getDate()} ${bulanIndo[d.getMonth()]} ${d.getFullYear()}`;
}

// ==========================================================================
// 4. SISTEM UPLOAD GAMBAR SUPER PRO (KLIK AKTIF + DBLCLICK + DELETE HAPUS)
// ==========================================================================
document.querySelectorAll('.img-upload-wrapper').forEach(wrapper => {
    const input = wrapper.querySelector('.img-upload-input');
    const imgElement = wrapper.querySelector('.img-preview');
    const labelElement = wrapper.querySelector('.img-label');

    // --- FUNGSI UTAMA: MENAMPILKAN GAMBAR ---
    function tampilkanGambar(file) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imgElement.src = e.target.result;
                imgElement.style.display = 'block';
                labelElement.style.display = 'none';
            }
            reader.readAsDataURL(file);
        }
    }

    if (input) {
        input.addEventListener('change', function(e) {
            tampilkanGambar(e.target.files[0]);
        });
    }

    wrapper.setAttribute('tabindex', '0');

    // --- LOGIKA 1: KLIK 1X (PILIH/AKTIFKAN KOTAK) ---
    wrapper.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah label otomatis membuka file explorer
        
        // Bersihkan efek aktif dari semua kotak lain
        document.querySelectorAll('.img-upload-wrapper').forEach(w => w.classList.remove('active-box'));
        
        // Aktifkan kotak ini saja
        wrapper.classList.add('active-box');
        wrapper.focus();
    });

    // --- LOGIKA 2: KLIK 2X (BUKA FILE EXPLORER) ---
    wrapper.addEventListener('dblclick', function(e) {
        if (input) input.click();
    });

    // --- LOGIKA 3: TOMBOL DELETE / BACKSPACE (HAPUS GAMBAR) ---
    wrapper.addEventListener('keydown', function(e) {
        // Cek apakah tombol yg ditekan adalah Delete/Backspace DAN kotaknya sedang aktif
        if ((e.key === 'Delete' || e.key === 'Backspace') && wrapper.classList.contains('active-box')) {
            e.preventDefault();
            imgElement.src = '';
            imgElement.style.display = 'none';
            labelElement.style.display = ''; // Kosongkan agar kembali ke display default CSS (flex)
            if (input) input.value = ''; // Reset file input
        }
    });

    // --- LOGIKA 4: PASTE CTRL+V ---
    wrapper.addEventListener('paste', function(e) {
        const items = (e.clipboardData || e.originalEvent.clipboardData).items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                const blob = items[i].getAsFile();
                tampilkanGambar(blob);
                
                if (input) {
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(blob);
                    input.files = dataTransfer.files;
                }
                e.preventDefault();
                break;
            }
        }
    });

    // --- LOGIKA 5: DRAG & DROP ---
    wrapper.addEventListener('dragover', function(e) {
        e.preventDefault();
        wrapper.classList.add('active-box');
    });

    wrapper.addEventListener('dragleave', function(e) {
        e.preventDefault();
        wrapper.classList.remove('active-box');
    });

    wrapper.addEventListener('drop', function(e) {
        e.preventDefault();
        wrapper.classList.remove('active-box');
        
        const file = e.dataTransfer.files[0];
        tampilkanGambar(file);
        
        if (input && file) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            input.files = dataTransfer.files;
        }
    });
});

// --- LOGIKA 6: KLIK DI LUAR KOTAK (HILANGKAN FOKUS) ---
document.addEventListener('click', function(e) {
    // Kalau yang diklik BUKAN bagian dari kotak upload gambar, hilangkan efek aktifnya
    if (!e.target.closest('.img-upload-wrapper')) {
        document.querySelectorAll('.img-upload-wrapper').forEach(w => w.classList.remove('active-box'));
    }
});

// ==========================================================================
// 5. SISTEM STEMPEL REALTIME DP / LUNAS AUTOMATION
// ==========================================================================
function updateStatusStempel() {
    const statusTerpilih = document.querySelector('input[name="status_bayar"]:checked');
    const status = statusTerpilih ? statusTerpilih.value : 'BELUM';
    const inputNominal = document.getElementById('input_nominal_stempel');
    const nominal = inputNominal ? inputNominal.value.toUpperCase() : '';

    const imgDp = document.getElementById('img-stempel-dp');
    const textDp = document.getElementById('text-stempel-dp');
    const imgLunas = document.getElementById('img-stempel-lunas');
    const textLunas = document.getElementById('text-stempel-lunas');

    if (imgDp && textDp && imgLunas && textLunas) {
        imgDp.style.display = 'none'; textDp.innerText = '';
        imgLunas.style.display = 'none'; textLunas.innerText = '';

        if (status === 'DP') {
            imgDp.style.display = 'block'; textDp.innerText = nominal;
        } else if (status === 'LUNAS') {
            imgLunas.style.display = 'block'; textLunas.innerText = nominal;
        }
    }
}

// ==========================================================================
// 6. ENGINE EXPORT PNG PREVIEW (FINAL: NATIVE IGNORE & PRE-CALCULATED SIZES)
// ==========================================================================
document.getElementById('btnExport').addEventListener('click', function() {
    const target = document.getElementById('capture-area');
    const btn = this; 
    btn.innerText = "WAIT, LOADING IMAGES..."; 
    btn.disabled = true;

    // 1. Kumpulkan semua gambar dan CATAT UKURAN WADAH ASLINYA SEKARANG (Sebelum di-clone)
    const originalImgs = Array.from(target.querySelectorAll('.img-preview'));
    const wadahSizes = originalImgs.map(img => {
        const rect = img.parentElement.getBoundingClientRect();
        return { w: rect.width || 100, h: rect.height || 135 }; // Simpan ukuran pixel asli!
    });

    // 2. Pastikan gambar sudah beres di-load
    const imagePromises = originalImgs.map(img => {
        if (img.style.display !== 'none' && img.src) {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => { img.onload = resolve; img.onerror = resolve; });
        }
        return Promise.resolve();
    });

    // 3. Simpan referensi input asli untuk ngambil warna background nanti
    const originalInputs = Array.from(target.querySelectorAll('.id-row input, .size-table input, .color-table input, .notes-box textarea, .detail-text-box textarea, .detail-box-input-row input'));

    Promise.all(imagePromises).then(() => {
        btn.innerText = "GENERATING PREVIEW...";

        html2canvas(target, { 
            scale: 2, // Skala 2 pas banget: Tajam, tapi gak bikin browser berat/nge-blank
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#ffffff",
            // --- FITUR SAKTI: HAPUS PANEL KANAN TANPA MERUSAK LAYOUT ---
            ignoreElements: (element) => {
                if (element.id === 'i6uw2x') {
                    return true; // "Abaikan elemen ini saat difoto!"
                }
                return false;
            },
            onclone: (cloned) => {
                // --- RUMUS ANTI-GEPENG (Pakai data ukuran asli yang sudah dicatat) ---
                cloned.querySelectorAll('.img-preview').forEach((img, index) => {
                    if (img.style.display !== 'none' && img.src) {
                        const size = wadahSizes[index]; // Ambil ukuran yang 100% valid
                        const rasioGambar = img.naturalWidth / img.naturalHeight;
                        const rasioWadah = size.w / size.h;

                        img.style.objectFit = 'none'; 
                        img.style.minWidth = '0px';
                        img.style.minHeight = '0px';
                        
                        if (rasioGambar > rasioWadah) {
                            img.style.width = size.w + 'px';
                            img.style.height = 'auto';
                        } else {
                            img.style.height = size.h + 'px';
                            img.style.width = 'auto';
                        }
                        
                        img.style.margin = 'auto';
                        img.style.display = 'block';
                    }
                });

                // --- CONVERSI FORM INPUT KE TEKS MATI ---
                cloned.querySelectorAll('.id-row input, .size-table input, .color-table input, .notes-box textarea, .detail-text-box textarea, .detail-box-input-row input').forEach((i, index) => {
                    let text = i.value.toUpperCase();
                    if(i.type === 'date' && typeof formatTanggalIndo === 'function') text = formatTanggalIndo(i.value);
                    const v = cloned.createElement('div');
                    v.innerText = text || "";
                    
                    if (i.tagName === 'TEXTAREA') {
                        v.style.cssText = "padding:5px; font-weight:bold; font-size:10px; white-space:pre-wrap; text-align:left; font-family:sans-serif; width:100%; box-sizing:border-box;";
                    } else if (i.closest('.id-row')) {
                        v.style.cssText = "padding-left:10px; font-weight:900; font-size:14px; line-height:31px; color:#000; flex:1;";
                    } else if (i.closest('.color-table')) {
                        // Ambil warna background dari elemen ASLI di layar, bukan hasil kloningan
                        const originalEl = originalInputs[index];
                        const computedStyle = window.getComputedStyle(originalEl);
                        const bgComputed = computedStyle.backgroundColor || "transparent";
                        v.style.cssText = `text-align:center; font-weight:bold; font-size:10px; display:flex; align-items:center; justify-content:center; width:100%; height:100%; color:#000; background:${bgComputed};`;
                    } else {
                        v.style.cssText = "text-align:center; font-weight:bold; font-size:11px; display:flex; align-items:center; justify-content:center; width:100%; height:100%; color:#000;";
                    }
                    
                    i.style.display = "none";
                    i.parentElement.appendChild(v);
                });
            
                const s = cloned.getElementById('model_global');
                if(s) {
                    const sv = cloned.createElement('div');
                    sv.innerText = s.value || "-"; 
                    sv.style.cssText = "padding-left:10px; font-weight:900; font-size:14px; line-height:31px; color:#000; flex:1;";
                    s.style.display = "none";
                    s.parentElement.appendChild(sv);
                }

                cloned.querySelectorAll('.img-label').forEach(label => {
                    if(label.style.display !== 'none') label.style.display = 'none';
                });
            }
        }).then(canvas => {
            canvas.toBlob(blob => {
                const url = URL.createObjectURL(blob);
                window.open(url, '_blank');
                btn.innerText = "EXPORT PNG ▲"; 
                btn.disabled = false;
            }, 'image/png');
        }).catch(err => {
            console.error("Gagal export gambar:", err);
            alert("Sistem rendering error. Coba reload halaman.");
            btn.innerText = "EXPORT PNG ▲"; 
            btn.disabled = false;
        });
    });
});

// ==========================================================================
// 7. LISTENERS RUNNER INTEGRASI UTAMA
// ==========================================================================
document.getElementById('nolo').addEventListener('input', updateQR);
document.getElementById('nama').addEventListener('input', updateQR);
document.getElementById('orderan').addEventListener('input', updateQR);
document.getElementById('model_global').addEventListener('change', updateQR);

updateDynamicMenu(); 
updateQR();
updateStatusStempel();
