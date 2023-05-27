function ordemCrescente(a, b, c) {
  if (a > b && b > c) {
    return c + ", " + b + ", " + a;
  }
  if (a > c && c > b) {
    return b + ", " + c + ", " + a;
  }
  if (b > a && a > c) {
    return c + ", " + a + ", " + b;
  }
  if (b > c && c > a) {
    return a + ", " + c + ", " + b;
  }
  if (c > a && a > b) {
    return b + ", " + a + ", " + c;
  }
  if (c > b && b > a) {
    return a + ", " + b + ", " + c;
  }
}

var ordenagem = ordemCrescente(8, 5, 3);

console.log(ordenagem);
