function output2() {
  const today = new Date();
  Logger.log(today.getTime());
  const day = 1000 * 60 * 60 * 24;
  const nextWeek = new Date(today.getTime() + (day * 7));
  Logger.log(nextWeek);

  let a = 0.5;
  Logger.log(Math.floor(a));
  Logger.log(Math.ceil(a));
  for(let i=0; i<10; i++) {
      let ranNum = Math.floor(Math.random() * 10);
      Logger.log(ranNum);
  }

  const myObj = {
    "first" : "Roberto",
    "last" : "Negrete"
  }
  const myStr = JSON.stringify(myObj);
  Logger.log(myObj);
  Logger.log(myStr);
  const myObj2 = JSON.parse(myStr);
  myObj2.first = "John";
  Logger.log(myObj2);
}

function output1() {
  for (let i = 0; i < 10; i++) {
    Logger.log("Counter : " + i);
  }

  let x = 0;
  while (x < 10) {
    Logger.log("Counter: " + x);
    x++;
  }

  const array = ["Roberto", "Negrete", "García"];
  Logger.log(array.length);
  for (let y = 0; y < array.length; y++) {
    Logger.log(array[y]);
  }

  array.forEach((elem, index) => {
    Logger.log(elem + " " + index);
  })

  const myArray = [];
  for (let q = 0; q < 10; q++) {
    //let temp = `item ${q}`;
    const temp = {
      "first": "Myname" + q,
      "last": "Laster" + q
    }
    myArray.push(temp);
  }
  Logger.log(myArray);
}


function output() {
  const obj = { "first": "Roberto", "last": "Negrete", "val1": "One", "val2": "Two" };
  /*
  Logger.log(obj["val"+1]);
  Logger.log(obj["val"+2]);
  Logger.log(obj.first);
  Logger.log(obj["last"]);
  */

  const array = ["Roberto", "Negrete", "One"];
  Logger.log(array[0]);

  const myObj = {
    "first": "Roberto",
    "last": "Negrete",
    "fullname": function () {
      Logger.log('Get the full name');
      return this.first + " " + this.last;
    }
  }

  let fullN = myObj.fullname();
  Logger.log(fullN);

  array.push("New");
  Logger.log(array);
  Logger.log(array.length);
}
