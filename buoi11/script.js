let fruit = ["apple", "banana", "orange", "grape"];
// ["tôi ăn apple", "tôi ăn banana", "tôi ăn orange", "tôi ăn grape"]

let newArr = fruit.map((currentValue) => {
    return `Tôi ăn ${currentValue}`;
});

console.log(newArr);



let student = [
    { name: "John", score: 7 },
    { name: "Alice", score: 9 },
    { name: "Tom", score: 8 },
];

let foundStudent = student.find((stu) => {
    return stu.score > 8;
});
console.log(foundStudent.name);



const numbers = [1, 2, 3, 4, 5];

// [1,2,3,"alo","bye",5]
numbers.splice(3, 1, "alo", "bye");
console.log(numbers);

// [0,1,2,3,4,5]
numbers.splice(0, 0, 0);
console.log(numbers);

// [1,"xx",4,5]
numbers.splice(1, 2, "xx");
console.log(numbers);