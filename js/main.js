/* khai báo biến */
var fullName = "Toan Sang";
var age = 26;

/* bult-in */
// alert("hello " + fullName + age);
// console.clear(fullName);
// console.count(fullName);
// confirm("xac nhan do tuoi");
// prompt("xac nhan do tuoi");
// setTimeout(function () {
//   console.log(fullName);
// }, 1000);
// setInterval(function () {
//   console.count(fullName);
// }, 3000);

/* arithmetic data type + assignment + comparison */
var a = 1;
var b = 2;
var canBuyAlcohol = age >= 18;

/* String data type + noi chuoi */
var userName = "Sang ' Toan ' ";
userName += " Sang";
// console.log(userName);

/* logical  */
if (a > b) {
  //   console.log("dieu kien dung");
} else {
  //   console.log("dieu kien sai")
}

/* data type  */
var d = null;
var myObject = ["sang", 24, "web dev"];
myObject = 11n;
var a, b, c;
a = 1;
b = "1";
c = "a" || "NaN" || "c";
// console.log(c);

/* check data type  */
// console.log(typeof myObject);

/* function ham  */
// function showDialog() {
//   alert('notification')
// }
// showDialog();

/* Parameter in function (tham so trong ham) */
function writeLog(message, myAge) {
  // console.log(message, myAge)
}
writeLog("hi minh ne"); /* argument (doi so) */

/* Arguments (doi tuong) */
function log2() {
  // console.log(arguments);
}
log2("hi minh ne", 26, "Toan Sang"); /* argument (doi so) */

function log3() {
  var myString = "";
  for (var param of arguments) {
    myString += `- ${param}`;
  }
  // console.log(myString);
}
log3("log 1", "log 2", "log 3");

/* Return */
function sum(a, b) {
  return (result = a + b);
}
sum(20, 10);
// console.log(result);
function triple(x) {
  return (x *= 3);
}
// console.log(triple(3));

function triple(x) {
  return x * 3;
}
var result = triple(10);
// console.log(result);

/* String chuoi */
fullName = "day gach blackslash " + "\\";
fullName = " xuong \n dong";
// console.log(fullName.length);
var firstName = "toan";
var lastName = "sang";
// console.log(`toi la: ${firstName} ${lastName}`);

/*  String method */
var testString = "hello word Hello";
/* length (đếm độ dài)*/
let test = testString.length;
/* find index (tim vi tri ki tu) */
test = testString.indexOf("o", 5);
/* cut */
test = testString.slice(6, 8);
/* replace */
test = testString.replace(/hello/gi, "hi");
/* Touppercase */
test = testString.toUpperCase();
/* trim (bỏ khoảng trắng đầu đuôi*/
test = testString.trim();
/* slipt (chuyen chuoi thanh mang)*/
test = testString.split(" ");
/* character (lay phan tu tu vi tri)*/
test = testString.charAt(0);
test = testString.at(-1);
// console.log(test);

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
var str = "toan \n    sang   ";
str = str.trim().replace(/\s+/g, " ");
// console.log(str);
Number.parseInt("3456 78");

/* Number */
let be = 28;
// console.log(be.toString(2));
let PI = 3.14444444444;
// console.log(PI.toFixed(2));

function isNumber(value) {
  return Number.isFinite(value);
}
// console.log(isNumber('12'));

/* Array mang = [ ] */
const arr = ["sang", 26, "1m65", "70kg"];
// gioi han do dai mang
// arr.length = 2;
// console.log(arr.length);
// toString
arr.toString();
// join (nối các phần tử trong mảng thành chuỗi)
arr.join(", ");
// pop (xóa phần tử cuối mảng và trả phần tử đã xóa)
arr.pop();
// push
arr.push("thy is my love");
// shift (xóa phần tử đầu mảng và trả về cái đã xóa)
arr.shift();
// unshift (thêm phần tử vào đầu mảng)
arr.unshift("hello");
// console.log(arr);
// splicing (thêm phần tử từ vị trí chỉ định, thay thế)
arr.splice(1, 0, "sang", "thy");
// concat (nối 2 mảng)
const newArr = ["thy", "xuan", 27, 6, 1979];
const arrs = newArr.concat(arr);
// console.log(arrs);
// slicing (cat + copy mang)
// arr.slice(-1, -2);
// console.log(arr)
// console.log(arr.slice(-3,-2));

function joinWithCharacter(array, charactor) {
  return array.join(charactor);
}
// Ví dụ khi sử dụng
var cars = ["Honda", "Mazda", "Mercedes"];
var result = joinWithCharacter(cars, " - ");
// console.log(result); // Expected: "Honda - Mazda - Mercedes"

// Viết hàm tại đây
function getLastElement(array) {
  return array.slice(-1);
}
// Ví dụ sử dụng
var animals = ["Monkey", "Tiger", "Elephant"];
// console.log(animals.at(-1));
var result = getLastElement(animals);
/*console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
*/

/* object = { key: value } */
var myMajor = "major";
let myInfo = {
  "full-name": "toan sang",
  gender: "nam",
  age: 26,
  marital: "in love",
  [myMajor]: "web dev",
  getGender: function () {
    return this.gender;
  },
};
// add property
myInfo.email = "sinshyn11@gmail.com";
myInfo["my girl's name"] = "thy xuan";

//call property
let myEmail = "email";
// console.log(myInfo["full-name"]);
// console.log(myInfo.gender);
// console.log(myInfo[myEmail]);

//delete property
delete myInfo.age;
// console.log(myInfo.getGender());

/* Object constructor */
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  // this.fullName = this.getName();
} /* keys: property, function: method */
var author = new User("sang", "toan", "hinh anh", "mindx");
var student = new User("tri", "vu", "avata", "vti");
author.title = "nhung dieu gi do";
student.comment = "truong nay day ok do";
// console.log(author);
// function Animal(name, leg, speed) {
//     this.name = name;
//     this.leg = leg;
//     this.speed = speed;
// }
// var parrot = new Animal('parrot', 2, 10)

/* Object prototype */
User.prototype.className = "f8 fullstack";
User.prototype.webDev = function () {
  return `${this.firstName} ${this.lastName} in ${this.className}`;
};
// console.log(author.webDev());

/* Date */
// function getNextYear() {
//   let year = new Date();
//   let nextYear = year.getFullYear() + 1;
//   return nextYear;
// }
// console.log(getNextYear());

let math = Math.PI;
math = Math.round(4.6); /* lam tron tu dong */
math = Math.abs(-9); /* lay so duong */
math = Math.ceil(9.1); /* lam tron len */
math = Math.floor(9.9); /* lam tron xuong */
let prize = [
  "10 cent",
  "20 cent",
  "30 cent",
  "40 cent",
  "50 cent",
  "60 cent",
  "70 cent",
  "80 cent",
  "90 cent",
  "100 cent",
];
for (var i = 0; i < 10; i++) {
  let random = Math.floor(Math.random() * 10); /* lam tron xuong */
  if (random < 5) {
    // console.log(prize[random]);
  } else {
    // console.log("chúc may mắn lần sau");
  }
}
math = Math.min(99, 15, 14, -5, -7); /* in ra so smallest */
math = Math.max(99, 15, 14, -5, -7); /* in ra so biggest */
function getRandomItem(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
let array = [4, 9, 8, 7, 1, 116, 15, 16];
// console.log(getRandomItem(array));
function run(a) {
  return a % 15 === 0 ? 3 : a % 5 === 0 ? 2 : a % 3 === 0 ? 1 : undefined;
}
var date = 5;
switch (date) {
  case 1:
    // console.log(5);
    break;
  case 2:
    // console.log(5);
    break;
  case 3:
    // console.log(5);
    break;
  default:
  // console.log(5);
}

/* toan tu 3 ngoi ternary operator*/
function checkEven(num) {
  return num % 2 === 0 ? "chan" : "le";
}
function checkAge(age) {
  return age >= 18 ? "du tuoi" : "young";
}
function checkNumber(n) {
  return typeof n !== "number"
    ? "k phai so"
    : n > 0
      ? "duong"
      : n < 0
        ? "am"
        : "n = khong";
}

/* 
for - lặp với điều kiện đúng
for/in - lặp qua key của đối tượng
for/of - lặp qua value của đối tượng
while - lặp khi điều kiện đúng
do/while- lặp ít nhất 1 lần, sau đó mới lặp điều kiện đúng 
*/
function getRandNumbers(min, max, length) {
  const array = new Array(length);

  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(
      Math.random() * (Math.abs(max - min) + 1) + Math.min(min, max),
    );
  }

  return array;
}
// console.log(getRandNumbers(5, 1, 5));
function getTotal(arr) {
  let success = 0;
  for (let i = 0; i < arr.length; i++) {
    success += arr[i];
  }
  return success;
}
// console.log(getTotal([4, 5, 3, 5]));
var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

function getTotal(orders) {
  let costs = 0;
  for (let i = 0; i < orders.length; i++) {
    costs += orders[i].price;
  }
  return costs;
}

/* for in: đối tượng có bao nhiêu key sẽ lặp bấy nhiêu lần*/
for (let key in orders) {
  // console.log(key);
  // console.log(orders[key]);
}
function run(object) {
  let property, value;
  let arr = [];
  for (let key in object) {
    property = key;
    value = object[key];
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return arr;
}
// console.log(run({ name: "Nguyen Van A", age: 16 }));
let framWork = {
  Js: "React",
  Ts: "Angular",
  Css: "Bootstrap",
};
// console.log(Object.values(framWork));
for (let key in framWork) {
  // console.log(key);
  // console.log(framWork[key]);
}

/* for of */
for (let value of Object.values(framWork)) {
  // console.log(value);
}
let newString = "tslins";
for (let key in newString) {
  // console.log(newString.at(key));
}

/* for of: lấy từng phần từ của 1 mảng,  */
let languages = ["Java", "Javascript", "Php", "C#", "C++"];

for (let value of languages) {
  // console.log(value);
}
// let i = 0;
// do {
//   i++;
//   console.log(i);
// } while (i < 10);

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  // console.log(i);
  if (i >= 5) {
    break;
  }
}

/* array in array */
let myArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
  for (let j = 0; j < myArray[i].length; j++) {
    // console.log(myArray[i][[j]]);
  }
}

for (let i = 100; i > 0; i--) {
  // console.log(i);
}

for (let i = 0; i <= 100; i += 5) {
  // console.log(i);
}

/* Đệ Quy
 muốn sử dụng đệ quy cần
 1. xác định điểm dừng
 2. logic handle => tạo điểm dừng
 */
function countDown(time) {
  if (time > 0) {
    // console.log(time);
    return countDown(time - 1);
  }
  return time;
}
countDown(10);

let aray = ["a", "b", "c", "d", "e", "a", "b", "c"];
// console.log([...new Set(aray)]); /* cach 1 mang k lap */
/* cach 2 mang k lap */
function repeatAray(arr, result = [], i = 0) {
  if (i >= arr.length) {
    return result;
  }
  if (result.includes(arr[i]) == false) {
    result.push(arr[i]);
  }
  return repeatAray(arr, result, i + 1);
}
// console.log(repeatAray(aray));

/* forEach() trả ra từng phần tử trong mảng*/
const courses = [
  { id: 1, name: "Java", cost: 100 },
  { id: 2, name: "Php", cost: 700 },
  { id: 3, name: "Html", cost: 200 },
  { id: 4, name: "Css", cost: 0 },
  { id: 5, name: "React", cost: 100 },
];
courses.forEach(function (course) {
  // console.log(Object.keys(course).length);
});

/* every() Kiểm tra TẤT CẢ phần tử có thỏa điều kiện không*/
let isFree = courses.every(function (course) {
  return course.cost == 0;
});
// console.log(isFree);
function addText(course, index) {
  // console.log(course);
  return {
    id: course.id,
    name: `khóa học: ${course.name}`,
    costText: `gia: ${course.cost}`,
    cost: course.cost,
    index: index,
  };
}
/* filter() */
const sports = [
  {
    name: "Bóng rổ",
    like: 6,
  },
  {
    name: "Bơi lội",
    like: 5,
  },
  {
    name: "Bóng đá",
    like: 10,
  },
];
function getMostFavoriteSport(arr) {
  return arr.filter(function (sport) {
    return sport.like > 5;
  });
}
// Kỳ vọng
// console.log(getMostFavoriteSport(sports));
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

/* map 
chỉnh sửa hay thay đổi các phần tử trong mảng */
let newCousers = courses.map(addText);
// console.log(newCousers);

/* chỉ lấy tên dung map */
function onlyName(course) {
  return {
    name: course.name,
  };
}
let courseOnlyName = courses.map(onlyName);
// console.log(courseOnlyName);

/*reduce 
accumulator: bien luu tru 
currentValue: gia tri hien tai
currentIndex: vị trí của currentValue*/
function costHandler(accumulator, currentValue, currentIndex) {
  return (accumulator += currentValue.cost);
}
let totalCost = courses.reduce(costHandler, 0);
// console.log(totalCost);

const seaGame = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];
// function TotalGold(accumulator, currentValue) {
//   return (accumulator += currentValue.gold);
// }
// let totalGold = seaGame.reduce(TotalGold, 0);
// console.log(totalGold);

function getTotalGold(arr) {
  return arr.reduce(function (total, currentValue) {
    return total + currentValue.gold;
  }, 0);
}
// console.log(getTotalGold(seaGame));
// Expected results:
// console.log(getTotalGold(seaGame)); // Output: 23

// Flat - "làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
let faltArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
// console.log(faltArray);

// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "Javascript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "Php",
      },
      {
        id: 2,
        title: "Python",
      },
    ],
  },
];
let course = topics.reduce(function (newcourse, namecourse) {
  return newcourse.concat(namecourse.courses);
}, []);
// console.log(course);

/* bai tap */
/* foreach Duyệt qua + trả từng phần tử trong mảng */
const foreach = [1, 2, 3];
// foreach.forEach((num) => console.log(num));

/* every Kiểm tra TẤT CẢ phần tử có thỏa điều kiện không */
const every = [1, 2, 3, 4];
// console.log(every.every((n) => n === 1)); // false

/* some Chỉ cần 1 phần tử đúng là true */
const some = [1, 3, -5, 6];
// console.log(some.some((n) => n <= 0));

/* Lọc mảng → trả về mảng mới */
const filter = [1, 2, 3, 4, 5, 6];
// console.log(filter.filter((n) => n % 2 === 0));

/* find Tìm phần tử đầu tiên thỏa điều kiện */
const find = [5, 8, 12, 20];
// console.log(find.find((n) => n > 10));

/* map Biến đổi mảng → trả về mảng mới */
const map = [5, 8, 12, 20];
// console.log(map.map(n => n*2));

/* reduce Gom mảng thành 1 giá trị duy nhất */
const numbers = [1, 2, 3];
const all = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(all); // 6

var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];

function calculateRating(arr) {
  function getRating(arr) {
    return arr.filter((n) => n.Director === "Christopher Nolan");
  }
  let total = getRating(arr).reduce(
    (acc, cur) => acc + Number(cur.imdbRating),
    0,
  );
  return total / getRating(arr).length;
}
// console.log(calculateRating(watchList));

function arrToObj(aray) {
  return aray.reduce(function (acc, cur) {
    let key = cur[0];
    let value = cur[1];
    acc[key] = value;
    return acc;
  }, {});
}
// Expected results:
var arra = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];
// console.log(arrToObj(arra)); // { name: 'Sơn Đặng', age: 18 }
// console.log(
//   arra.map(function (n) {
//     return n[0].includes("name");
//   }),
// );

let title = ["ten", "sin", "name", "sang", "name"];
// console.log(title.includes("name"));

/*Callback
1. là 1 function
2. được truyền qua đối số 
3. được gọi lại trong phần đối số của hàm chính
/được gọi lại trong hàm nhận đối số*/
function myFunction(param) {
  if (typeof param === "function") {
    param("hello sang");
  }
}
function myCallback(value) {
  // console.log("Value: ", value);
}
myFunction(myCallback);

/* bai tap */
function sumCb(a, b) {
  return a + b;
}
function subCb(a, b) {
  return a - b;
}
function multiCb(a, b) {
  return a * b;
}
function divCb(a, b) {
  return a / b;
}

function caculate(a, b, cb) {
  if (typeof cb === "function") {
    return cb(a, b);
  }
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

Array.prototype.map2 = function (callback) {
  let allarr = [],
    arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    var result = callback(this[i]);
    allarr.push(result);
  }
  return allarr;
};

let other = ["java", ".net", "note.js", "ruby"];
let htmls = other.map2(function (cs) {
  return `<h2>${cs}</h2>`;
});
// console.log(htmls);

/* map() */
Array.prototype.newMap = function (cb) {
  let newArr = [],
    arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    let result = cb(this[i], i);
    newArr.push(result);
  }
  return newArr;
};

/* forEach() */
Array.prototype.newForEach = function (cb) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      cb(this[i], i, this);
    }
  }
};

/* every */
Array.prototype.newEvery = function (cb) {
  let arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    let result = cb(this[i], i, this);
    if (!result) {
      return false;
    }
  }
  return true;
};

/* some */
Array.prototype.newSome = function (cb) {
  let arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    if (cb(this[i]) === true) {
      return true;
    }
  }
  return false;
};

/* filter */
Array.prototype.newFilter = function (cb) {
  let newArr = [],
    arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    if (cb(this[i]) === true) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

/* find */
Array.prototype.newFind = function (cb) {
  let arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    if (cb(this[i]) === true) {
      return this[i];
    }
  }
  return undefined;
};

/* reduce */

const newA = [1, 2, 5, 1];
// newA.forEach((num) => console.log(num));
// console.log(newA.newEvery((n) => n === 5));
// console.log(newA.newFilter((n) => n < 5));
// console.log(finds.newFind((n) => n > 1));

const num = ["s", "a", "n", "g"];
// console.log(Array.prototype);

Array.prototype.myFilter = function (cb) {
  let newArr = [],
    arrLength = this.length;

  for (let i = 0; i < arrLength; i++) {
    let result = cb(this[i], i, this);
    if (result === true) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

Array.prototype.newForEachs = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      cb(this[i], i, this);
    }
  }
};

/* some */
Array.prototype.newSomes = function (cb) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      let result = cb(this[i], i, this);
      if (result === true) {
        return true;
      }
    }
  }
  return false;
};

const athy = [1, 3, 3, 5];
const asang = new Array(10);

console.log(
  athy.newEvery(function (number) {
    return number % 2 !== 0;
  }),
); // Output: true

// asang.newForEachs((n) => console.log(n));
// asang.newSomes((n) => console.log(n));
/**
Expected results:

const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: true
 */
