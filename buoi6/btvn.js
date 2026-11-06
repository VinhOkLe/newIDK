//Cau 1
console.log("Cau 1: ");
let length = 4;
let width = 5;
let area = length * width;
let perimeter = (length + width) * 2;
console.log(`Dien tich: ${area}`);
console.log(`Chu vi: ${perimeter}`);


//Cau 2
console.log("Cau 2: ");
let S = 12345;
let h = Math.floor(S / 3600);
let m = Math.floor((S - h * 3600) / 60);
let s = S - m * 60 - h * 3600;
console.log(`Time(s): ${S} `);
console.log(`=> ${h}h ${m}m ${s}s `);

//Cau 3
console.log("Cau 3: ");
let LT = 2;
let CS = 5;
let ketqua = Math.pow(CS, LT);
console.log(`${CS}^${LT} = ${ketqua}`);

//Cau 4
console.log("Cau 4: ");
let a = 20;
let b = 55;
let c = 105;
let tbc = (a + b + c) / 3;
console.log(`Trung binh cong cua ${a}, ${b}, ${c}: ${tbc}`);

//Cau 5
console.log("Cau 5: ");
let x1 = 2; let x2 = 4;
let y1 = 3; let y2 = 6;
let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(`Khoang cach giua cac diem: ${d}`);

//Cau 6
console.log("Cau 6: ");
let z = 60;
let x = 1;
let v = 7;
console.log(`${z >= x && z >= v}`);

//Cau 7
console.log("Cau 7: ");
let chu1 = "Toi la ai?";
let chu2 = "Toi la ai?";
let so1 = 5;
let so2 = "5";
let chu = chu1 === chu2;
let so = so1 === so2;
console.log(`chu: ${chu}, so: ${so}`);

//Cau 8
console.log("Cau 8: ");
let n = 5;
let duong = n > 0;
console.log(`So ${n} la so duong: ${duong}`);

//Cau 9
console.log("Cau 9: ");
let nam = 2024;
let nhuan = nam % 400 == 0 || nam % 4 == 0 && nam % 100 != 0;
console.log(`Nam ${nam} la nam nhuan: ${nhuan}`);

//Cau 10
console.log("Cau 10: ");
let h1 = 23;
let m1 = 30;
let h2 = 19;
let m2 = 50;
if ((h1 > h2) || (h1 == h2 && m1 > m2)) {
  console.log(`${h1}h${m1}m lon hon ${h2}h${m2}m`);
} else if (h1 == h2 && m1 == m2) {
  console.log(`Hai thoi gian bang nhau `);
} else {
  console.log(`${h1}h${m1}m nho hon ${h2}h${m2}m`);
}