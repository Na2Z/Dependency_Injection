function luasLingkaran(r) {
  if (r % 7 == 0) {
    return (22 / 7) * r * r;
  } else {
    return 3.14 * r * r;
  }
}
function kelLingkaran(r) {
  if (r % 7 == 0) {
    return 2 * (22 / 7) * r;
  } else {
    return 2 * 3.14 * r;
  }
}
function luasSegitiga(a, t) {
  return (1 / 2) * a * t;
}
function kelSegitiga(s) {
  return s * 3;
}
function luasPersegi(s) {
  return s * s;
}
function kelPersgi(s) {
  return s + s + s + s;
}

module.exports = {
  luasLingkaran,
  kelLingkaran,
  luasSegitiga,
  kelSegitiga,
  luasPersegi,
  kelPersgi,
};
