let bg, font, margin, gap, fontsize = 16;
let txtDate = '', txtName = '', txtContent = '';

let fonts = [
  {'index': 0, 'name': 'HandwritingCR 2', 'file': 'HandwritingCR-2.ttf'},
  {'index': 1, 'name': 'Gloria Hallelujah', 'file': 'GloriaHallelujah-Regular.ttf'},
  {'index': 2, 'name': 'Heart Warming', 'file': 'Heart Warming Font by Situjuh.otf'},
  {'index': 3, 'name': 'Shadows Into Light', 'file': 'ShadowsIntoLight-Regular.ttf'}
];

const getFontIndex = () => {
  let fontIndex = localStorage.getItem('fontIndex');
  return fontIndex ? fonts[fontIndex] : fonts[0];
}

// Fungsi bantu untuk onchange di HTML
function updateFont(val) {
    localStorage.setItem('fontIndex', val);
    setup(); // Re-run p5 setup
}

function updateBook(val) {
    localStorage.setItem('bookIndex', val);
    setup();
}

function setup() {
  let cnv = createCanvas(600, 894);
  cnv.parent('canvas-holder');
  bg = loadImage('/img/folio.jpg');
  font = loadFont('/fonts/' + getFontIndex().file);
  textFont(font);
  textSize(fontsize);
}

function draw() {
  background(bg);
  margin = 20;
  fill(0, 0, 0, 200);
  translate(margin - 8, margin * 4);
  text(txtName, 0, 0);
  text(txtDate, 450, 0);
  translate(0, margin + 7);
  text(txtContent, 0, 0, 580);
}

// Logika Inisialisasi
window.onload = function() {
  // 1. Auto Scroll di HP
  if (window.innerWidth < 992) {
    const editorCard = document.getElementById('editor-card');
    if(editorCard) editorCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  // 2. Load Select Options
  let fontSelectEl = document.getElementById('font');
  if(fontSelectEl) {
    let _temp = '';
    fonts.forEach((f, idx) => {
      let selected = (idx == getFontIndex().index) ? 'selected' : '';
      _temp += `<option value="${idx}" ${selected}>${f.name}</option>`;
    });
    fontSelectEl.innerHTML = _temp;
  }

  // 3. Event Listener Download
  const btnDownload = document.getElementById('btn-download');
  if(btnDownload) {
    btnDownload.addEventListener('click', function() {
        downloadCanvas(document.getElementById('defaultCanvas0'), 'hasil-tulisno.png');
    });
  }
};

function downloadCanvas(c, filename) {
  var lnk = document.createElement('a'), e;
  lnk.download = filename;
  lnk.href = c.toDataURL();
  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    lnk.dispatchEvent(e);
  } else {
    lnk.click();
  }
}
