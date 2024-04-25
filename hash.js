const crypto = require('crypto');

// Fungsi untuk melakukan enkripsi menggunakan SHA-256
function encrypt(input) {
    const hash = crypto.createHash('sha256');
    hash.update(input);
    return hash.digest('hex'); // Mengembalikan hasil hash dalam format hexadecimal
}

// Contoh penggunaan
const plainText = "hello world";
const encryptedText = encrypt(plainText);
//tampilkan teks asli.
console.log("Teks Asli", plainText);
console.log("Enkripsi Teks:", encryptedText);
