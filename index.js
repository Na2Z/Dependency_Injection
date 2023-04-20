const PromptSync = require("prompt-sync"); //dari npm
const prompt = PromptSync(); //penting buat menghubungkan

console.log("1. Aplikasi Geometri");
console.log("2. Aplikasi Mahasiswa");
const pil = prompt("Pilih aplikasi : ");

if (pil == 1) {
  var hasil = 0;
  const geometri = require("./src/shape");
  console.log("1. Luas Lingkaran");
  console.log("2. Keliling Lingkaran");
  console.log("3. Luas Segitiga");
  console.log("4. Keliling Segitiga (sama sisi)");
  console.log("5. Luas Persegi");
  console.log("6. Keliling Persegi");
  const geo = prompt("Pilih perhitungan : ");
  if (geo == 1) {
    const r = prompt("masukan Jari-Jari : ");
    hasil = geometri.luasLingkaran(r);
  } else if (geo == 2) {
    const r = prompt("masukan Jari-Jari : ");
    hasil = geometri.kelLingkaran(r);
  } else if (geo == 3) {
    const a = prompt("masukan alas : ");
    const t = prompt("masukan tinggi : ");
    hasil = geometri.luasSegitiga(a, t);
  } else if (geo == 4) {
    const s = prompt("Masukan Sisi : ");
    hasil = geometri.kelSegitiga(s);
  } else if (geo == 5) {
    const s = prompt("Masukan sisi : ");
    hasil = geometri.luasPersegi(s);
  } else if (geo == 6) {
    const s = prompt("Masukan sisi : ");
    hasil = geometri.kelPersgi(s);
  } else {
    console.log("pilihan tidak tersedia");
  }
  console.log("Hasil dari Perhitungan : ", hasil);
} else if (pil == 2) {
  const students = require("./src/student");
  const s = new students();
  const nama = prompt("Inputkan Nama : ");
  s.setnama(nama);
  const kelas = prompt("Inputkan Kelas : ");
  s.setkelas(kelas);
  const NIM = prompt("Inputkan NIM : ");
  s.setNIM(NIM);
  console.log("=================================================");
  console.log("Nama Kamu : ", nama);
  console.log("Kamu ada di kelas : ", kelas);
  console.log("Dan NIM kamu ialah : ", NIM);
} else {
  console.log("pilihan tidak tersedia");
}
