const nama = "azriel amaldany";
let usia = "19";

let biodata = document.getElementById('biodata');
console.log(biodata)

function generateBiodata() {
    let generasi;

    if (usia > 12 && usia < 19) {
        generasi = ('anda remaja');
    } else if (usia > 18 && usia < 30) {
        generasi = ('Dewasa');
    } else if (usia > 30 && usia < 60) {
        generasi = ('ketuaan');
    } else if (usia > 12 && usia < 2) {
        generasi = ('anda anak anak');
    } else {
        generasi = "lek gk bayi yo wayae";
    }
    return biodata.innerHTML = generasi
}
console.log(nama)
console.log(usia)

generateBiodata()