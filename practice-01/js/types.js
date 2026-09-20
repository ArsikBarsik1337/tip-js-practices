"use strict";
console.log("Результат:", "8" + 2);
console.log("Тип результата:", typeof ("8" + 2));

console.log("Результат:", "8" - 2);
console.log("Тип результата:", typeof ("8" - 2));

console.log("Результат:", Number("8") + 2);
console.log("Тип результата:", typeof (Number("8") + 2));

console.log("Результат:", "12" > "3");
console.log("Тип результата:", typeof ("12" > "3"));

console.log("Результат:", 12 === "12");
console.log("Тип результата:", typeof (12 === "12"));

console.log("Результат:", Number(""));
console.log("Тип результата:", typeof (Number("")));

console.log("Результат:", Number("text"));
console.log("Тип результата:", typeof (Number("text")));

console.log("Результат:", Boolean("false"));
console.log("Тип результата:", typeof (Boolean("false")));

console.log("Результат:", typeof null);
console.log("Тип результата:", typeof (typeof null));

console.log("Результат:", typeof NaN);
console.log("Тип результата:", typeof (typeof NaN));
