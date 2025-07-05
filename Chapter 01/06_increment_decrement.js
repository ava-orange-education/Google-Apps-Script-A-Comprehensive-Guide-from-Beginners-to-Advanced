function myFunction() {
  let a = 5;
  let b = 11;

  a = a + 1;
  b = b - 1;

  Logger.log(a); // output: 6
  Logger.log(b); // output: 10

  a = 5;
  b = 11;

  a++;
  b--;

  Logger.log(a); // output: 6
  Logger.log(b); // output: 10

  a = 5;
  b = 11;

  a += 3;
  b -= 6;

  Logger.log(a); // output: 8
  Logger.log(b); // output: 5
}
