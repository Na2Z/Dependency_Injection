class student {
  constructor(nama = "", kelas = "") {
    this.nama = nama;
    this.kelas = kelas;
  }
  setnama(name) {
    this.name = name;
  }
  setkelas(kelas) {
    this.kelas = kelas;
  }
  setNIM(nim) {
    this.nim = nim;
  }
  getnama() {
    return this.nama;
  }
  getkelas() {
    return this.kelas;
  }
  getNIM() {
    return this.nim;
  }
}

module.exports = student;
