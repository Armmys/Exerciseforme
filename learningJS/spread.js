// spread

const x = [...'Hello World'];
console.log(x);

// [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

// แก้ไขโค้ดในส่วนนี้
for (const [index, value] of x.entries()) {
  console.log(index)
  console.log(value)
}