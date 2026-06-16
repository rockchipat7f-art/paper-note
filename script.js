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
        { label: "KRAH", isi: ["V-PENDEK", "V-PANJANG", "BULAT", "RESLETING"] },
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
        { label: "MODE", isi: ["KERUNG", "LAIN-LAIN", " "] },
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
        { label: "PANDU DUNIA & GUDEP", isi: ["PANDU PA", "PANDU PI", "GUDEP ã¤ã¤ã¤ã¤ã¤ã¤ã¤ã¤"] }
    ]
};

function updateDynamicMenu() {
    const model = document.getElementById('model_global').value;
    const container = document.getElementById('menu-area');
    container.innerHTML = "";

    if (model && databaseKriteria[model]) {
        databaseKriteria[model].forEach((item, idx) => {
            const box = document.createElement('div');
            box.className = 'menu-item';
            
            const optionsHTML = item.isi.map((opt, i) => `
                <input type="checkbox" id="opt-${idx}-${i}" class="check-item" value="${opt}">
                <label for="opt-${idx}-${i}" class="check-label">${opt}</label>
            `).join('');

            box.innerHTML = `
                <div class="menu-header">${item.label}</div>
                <div class="checkbox-container">${optionsHTML}</div>
            `;
            container.appendChild(box);
        });
    } else {
        container.innerHTML = "<p style='grid-column: span 6; text-align: center; color: #999; padding: 20px;'>PILIH MODEL TERLEBIH DAHULU</p>";
    }
}

function updateQR() {
    const qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = ""; 
    // Ambil semua data & langsung paksa KAPITAL (.toUpperCase)
    const nolo = (document.getElementById("nolo").value || "000").toUpperCase();
    const nama = (document.getElementById("nama").value || "NONAME").toUpperCase();
    const orderan = (document.getElementById("orderan").value || "-").toUpperCase();
    const model = (document.getElementById("model_global").value || "-").toUpperCase();
    
    // Format: No.LO [Tab] Nama [Tab] Orderan [Tab] Model
    const qrContent = `${nolo}\t${nama}\t${orderan}\t${model}`;
    
    new QRCode(qrcodeDiv, {
        text: qrContent, 
        width: 128, 
        height: 128, 
        correctLevel: QRCode.CorrectLevel.H
    });
}

function formatTanggalIndo(dateStr) {
    if(!dateStr) return "-";
    const bulanIndo = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"];
    const d = new Date(dateStr);
    return `${d.getDate()} ${bulanIndo[d.getMonth()]} ${d.getFullYear()}`;
}

document.getElementById('btnExport').addEventListener('click', function() {
    const target = document.getElementById('capture-area');
    const btn = this;
    btn.innerText = "GENERATING PREVIEW...";
    btn.disabled = true;

    html2canvas(target, { 
        scale: 3,
        useCORS: true,
        onclone: (cloned) => {
            // 0. KUNCI RASIO CANVAS
            const cloneCapture = cloned.getElementById('capture-area');
            cloneCapture.style.height = '355px'; 
            cloneCapture.style.overflow = 'hidden';
            cloneCapture.style.display = 'flex';
            cloneCapture.style.flexDirection = 'column';
        
            // 1. PROSES MENU ITEM (Checkbox)
            cloned.querySelectorAll('.menu-item').forEach(item => {
                const checked = Array.from(item.querySelectorAll('.check-item:checked')).map(c => c.value);
                const val = checked.length > 0 ? checked.join(", ") : "-";
                const v = cloned.createElement('div');
                v.innerText = val.toUpperCase();
                v.style.cssText = "padding:5px 2px; text-align:center; font-weight:900; font-size:12px; color:#000; display:flex; align-items:center; justify-content:center; line-height:1.1; height:50px; background:#fff; border-top:1px solid #000;";
                
                const container = item.querySelector('.checkbox-container');
                if(container) container.style.display = "none";
                item.appendChild(v);
            });
        
            // 2. PROSES IDENTITAS (Nama, Orderan, Nolo, dll)
            // Gunakan class .id-row agar tidak tabrakan dengan elemen lain
            const styleId = "padding-left:10px; font-weight:900; font-size:14px; line-height:31px; color:#000; flex:1;";
            
            // Kita targetkan HANYA input teks dan date di dalam id-row
            cloned.querySelectorAll('.id-row input').forEach(i => {
                let text = i.value.toUpperCase();
                if(i.type === 'date') text = formatTanggalIndo(i.value);
                
                const v = cloned.createElement('div');
                v.innerText = text || "-";
                v.style.cssText = styleId;
                
                i.style.display = "none";
                i.parentElement.appendChild(v);
            });
        
            // 3. PROSES MODEL GLOBAL (Hanya satu kali di sini)
            const s = cloned.getElementById('model_global');
            if(s) {
                const sv = cloned.createElement('div');
                // Ambil teks dari pilihan yang dipilih
                sv.innerText = s.value || "-"; 
                sv.style.cssText = styleId;
                
                s.style.display = "none";
                // Pastikan tidak ada div "bekas" proses lain di parent-nya
                s.parentElement.appendChild(sv);
            }
        }
    }).then(canvas => {
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
            btn.innerText = "EXPORT PNG â²";
            btn.disabled = false;
            setTimeout(() => URL.revokeObjectURL(url), 60000);
        }, 'image/png');
    });
});

// Tambahkan ini di bagian bawah script.js bersama listener lainnya
document.getElementById('nolo').addEventListener('input', updateQR);
document.getElementById('nama').addEventListener('input', updateQR);
document.getElementById('orderan').addEventListener('input', updateQR);
document.getElementById('model_global').addEventListener('change', updateQR);

// Inisialisasi awal saat halaman dibuka
updateDynamicMenu();
updateQR();
