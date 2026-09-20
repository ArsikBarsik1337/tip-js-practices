"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

if (typeof (totalTasks) !== "number" || typeof (completedTasks) !== "number"){
    console.log("Ошибка: вместа числа передан другой тип данных.");
}
else if (Number.isFinite(totalTasks) === false || Number.isFinite(completedTasks) === false){
    console.log("Ошибка: недопустимое числовое значение.");
}
else if (Number.isInteger(totalTasks) === false || Number.isInteger(completedTasks) === false){
    console.log("Ошибка: дробное количество.");
}
else if (totalTasks < 0 || completedTasks < 0){
    console.log("Ошибка: отрицательное количество.");
}
else if (totalTasks > 1000 || completedTasks > 1000){
    console.log("Ошибка: превышена верхняя граница.");
}
else if (completedTasks > totalTasks){
    console.log("Ошибка: выполнено больше, чем существует.");
}
else if (completedTasks === 0 && totalTasks === 0){
    console.log("Задач пока нет");
}
else if (typeof dailyLimit !== "number") {
    console.log("Ошибка: дневная норма задана не числом.");
}
else if (Number.isFinite(dailyLimit) === false) {
    console.log("Ошибка: недопустимое числовое значение дневной нормы.");
}
else if (Number.isInteger(dailyLimit) === false) {
  console.log("Ошибка: дробной дневной нормы быть не должно.");
} 
else if (dailyLimit < 1) {
  console.log("Ошибка; цикл не запускается.");
} 
else if (dailyLimit > 1000) {
    console.log("Ошибка: превышена верхняя граница нормы.");
}
else if (completedTasks === totalTasks) {
  console.log("Все задачи уже выполнены.");
  console.log("Потребуется дней: 0");
}
else {
    let remains = totalTasks - completedTasks;
    let days = 0;
    let doneToday;
    while (remains > 0) {
        days += 1;
        doneToday = Math.min(dailyLimit, remains);
        remains -= doneToday;
        console.log("День ", days, ": выполнено ", doneToday, ", осталось ", remains);
    }
    console.log("Потребуется дней: ", days);
}