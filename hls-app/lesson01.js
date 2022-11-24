function getRandom(n) {
    return parseInt(Math.random() * n);
}

const s = new Set();
for (let i = 0; i < 30000000; i++) // получим порядка 95 тыс уникальных элементов и в сете и в массиве
    s.add(getRandom(10000000));

// массив
const a = Array.from(s);

console.log(`Задание 1. В массиве ${a.length} элементов, в сете ${s.size} элементов`);

let ta0 = Date.now();
a.push(20000000);
let ta1 = Date.now();

let ts0 = Date.now();
s.add(20000000)
let ts1 = Date.now();

console.log(`Вставка 20000000 в массив ${ta1 - ta0} мс, в сет ${ts1 - ts0} мс`);
console.log(`Результат: в массиве ${a.length} элементов, в сете ${s.size} элементов`);


let idx = a.indexOf(500);
ta0 = Date.now();
a.splice(idx, 1);
ta1 = Date.now();

ts0 = Date.now();
s.delete(500);
ts1 = Date.now();

console.log(`Удаление 5000 из массива ${ta1 - ta0} мс, из сета ${ts1 - ts0} мс`);
console.log(`Результат: в массиве ${a.length} элементов, в сете ${s.size} элементов`);

ta0 = Date.now();
idx = a.indexOf(5000);
ta1 = Date.now();

ts0 = Date.now();
const has = s.has(5000);
ts1 = Date.now();

console.log(`Поиск 5000 в массиве ${ta1 - ta0} мс, в сете ${ts1 - ts0} мс`);
console.log(`Результат: в массиве ${a.length} элементов, idx=${idx}, в сете ${s.size} элементов, has=${has}`);
