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
        kananContainer.innerHTML = "<p class='notif-pilih'>← PILIH JENIS MODEL TERLEBIH DAHULU UNTUK MEMUNCULKAN DAFTAR OPSIONAL.</p>";
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

// SISTEM UPLOAD GAMBAR OTOMATIS (Mendukung semua kotak)
document.querySelectorAll('.img-upload-input').forEach(input => {
    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const wrapper = event.target.closest('.img-upload-wrapper');
                const imgElement = wrapper.querySelector('.img-preview');
                const labelElement = wrapper.querySelector('.img-label');
                imgElement.src = e.target.result;
                imgElement.style.display = 'block';
                labelElement.style.display = 'none';
            }
            reader.readAsDataURL(file);
        }
    });
});

// EXPORT PNG (Konversi semua input jadi text agar print bersih)
document.getElementById('btnExport').addEventListener('click', function() {
    const target = document.getElementById('capture-area');
    const btn = this; btn.innerText = "GENERATING PREVIEW..."; btn.disabled = true;

    html2canvas(target, { 
        scale: 3, useCORS: true,
        onclone: (cloned) => {
            const cloneCapture = cloned.getElementById('capture-area');
            cloneCapture.style.height = '100%'; cloneCapture.style.overflow = 'hidden';
            
            // Konversi Input Teks & Tabel & Textarea jadi Div statis
            cloned.querySelectorAll('input.export-input, textarea.export-input, .id-row input').forEach(i => {
                let text = i.value.toUpperCase();
                if(i.type === 'date') text = formatTanggalIndo(i.value);
                const v = cloned.createElement('div');
                v.innerText = text || "";
                
                if (i.tagName === 'TEXTAREA') {
                    v.style.cssText = "padding:5px; font-weight:bold; font-size:12px; white-space:pre-wrap; text-align:left; font-family:sans-serif;";
                } else if (i.closest('.id-row')) {
                    v.style.cssText = "padding-left:10px; font-weight:900; font-size:14px; line-height:31px; color:#000; flex:1;";
                } else {
                    v.style.cssText = "text-align:center; font-weight:bold; font-size:12px; display:flex; align-items:center; justify-content:center; width:100%; height:100%;";
                }
                
                i.style.display = "none";
                i.parentElement.appendChild(v);
            });
        
            // Konversi Select Model
            const s = cloned.getElementById('model_global');
            if(s) {
                const sv = cloned.createElement('div');
                sv.innerText = s.value || "-"; 
                sv.style.cssText = "padding-left:10px; font-weight:900; font-size:14px; line-height:31px; color:#000; flex:1;";
                s.style.display = "none";
                s.parentElement.appendChild(sv);
            }

            // Sembunyikan tulisan 'GAMBAR DESAIN' kosong biar ga ikut ke-print
            cloned.querySelectorAll('.img-label').forEach(label => {
                if(label.style.display !== 'none') label.style.display = 'none';
            });
        }
    }).then(canvas => {
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
            btn.innerText = "EXPORT PNG ▲"; btn.disabled = false;
        }, 'image/png');
    });
});

document.getElementById('nolo').addEventListener('input', updateQR);
document.getElementById('nama').addEventListener('input', updateQR);
document.getElementById('orderan').addEventListener('input', updateQR);
document.getElementById('model_global').addEventListener('change', updateQR);

updateDynamicMenu(); updateQR();
