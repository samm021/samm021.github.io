const mainSuit = (human, comp) => {
    let bigW = ['MANTAP BANG JAGO', 'BANG JAGOW EMANG', 'HEBAT! MENANG!!'];
    let pressF = ['AH CUPU..', 'MASA KALAH..', 'CUPS AH..'];
    let seriAja = ['.....', 'COBA LAGI', 'IMBANG AJA NIH?'];
    let randomizer = Math.floor(Math.random() * 3);
    let tag1 = document.getElementById('satu');
    let tag2 = document.getElementById('dua');
    if (human === comp) { // 0  kertas 1 gunting 2 batu
        tag1.innerHTML = seriAja[randomizer];
        tag2.innerHTML = 'kamu seri';
    } else if (human === 0 && comp === 1) {
        tag1.innerHTML = pressF[randomizer];
        tag2.innerHTML = 'kamu kalah';
    } else if (human === 0 && comp === 2) {
        tag1.innerHTML = bigW[randomizer];
        tag2.innerHTML = 'kamu menang';
    } else if (human === 1 && comp === 0) {
        tag1.innerHTML = bigW[randomizer];
        tag2.innerHTML = 'kamu menang';
    } else if (human === 1 && comp === 2) {
        tag1.innerHTML = pressF[randomizer];
        tag2.innerHTML = 'kamu kalah';
    } else if (human === 2 && comp === 0) {
        tag1.innerHTML = pressF[randomizer];
        tag2.innerHTML = 'kamu kalah';
    } else if (human === 2 && comp === 1) {
        tag1.innerHTML = bigW[randomizer];
        tag2.innerHTML = 'kamu menang';
    }
    console.log('human hand: '+human);
    console.log('comp hand: '+comp);
}

const displayHuman = human => {
    let disp = document.getElementById('image1');
    if (human === 0) {
        disp.src = 'assets/kiri0.PNG'; // path image
    } else if (human === 1) {
        disp.src = 'assets/kiri1.PNG'; // path image
    } else if (human === 2) {
        disp.src = 'assets/kiri2.PNG'; // path image
    }
}

const displayComp = comp => {
    let disp = document.getElementById('image2');
    if (comp === 0) {
        disp.src = 'assets/kanan0.PNG';
    } else if (comp === 1) {
        disp.src = 'assets/kanan1.PNG';
    } else if (comp === 2) {
        disp.src = 'assets/kanan2.PNG';
    }
}

const kirim = () => {
    let human = Number(document.getElementById("suit").value);
    let doc1 = document.getElementById('satu');
    let doc2 = document.getElementById('dua');
    doc1.innerHTML = '';
    doc2.innerHTML = '';
    if (human === -1) {
        alert('Tolong... Pilih Opsi Yang Benar..')
    } else {
        console.log('start the game....')
        let compute = Math.floor(Math.random() * 3);
        displayHuman(human);
        mainSuit(human, compute);
        displayComp(compute);
    }
}