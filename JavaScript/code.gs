const GLOBAL_VAL = "Hello World";

function test1() {
  const a = "JavaScript";
  const b = "value1";
  var c = 10;
  let d = true;
  Logger.log(a + " " + b + " "+ c + " " + d + " " + GLOBAL_VAL);
}

function test2() {
  Logger.log(GLOBAL_VAL);
}

function test3(val1, val2) {
  Logger.log(val1 + " " + val2);
  return `${val1} ${5+5} ${val2}`;
}

function test4 () {
  const a = "Hello";
  const b = "World";

  test3(a,b);
}

function test5() {
  const temp = test3("HI", "Coders");
  Logger.log(temp);
}
