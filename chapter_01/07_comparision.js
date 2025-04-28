function myFunction() {
  let a = 67;
  let b = 234;
  const aIsLessThanB = a < b;
  Logger.log(aIsLessThanB); // true

  a = 77;
  b = '77';

  Logger.log(a == b); // true
  Logger.log(a === b); // false

  const budget = 100;
  const threshold = 200;
  const department = 'sales';

  if (budget < threshold && department === 'sales') {
    Logger.log('The budget is below threshold');
  } else if (budget === threshold && department === 'sales') {
    Logger.log('The budget is exactly at the threshold');
  } else {
    Logger.log('The budget is above threshold or wrong department');
  }
}
