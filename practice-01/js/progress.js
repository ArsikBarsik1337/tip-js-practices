"use strict";

const { stat } = require("node:fs");

const totalTasks = 20;
const completedTasks = 11;

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
else if (completedTasks === 0 &&  totalTasks === 0){
    console.log("Задач пока нет");
}
else {
    
    const percent = (completedTasks / totalTasks * 100).toFixed(1)
    let status;
    if (percent == 0.0){
        status = "Не начато";
    }
    else if (percent == 100) {
        status = "Завершено";
    }
    else {
        status = "В работе";
    }
    console.log("Всего задач: ", totalTasks);
    console.log("Выполнено: ", completedTasks);
    console.log("Осталось: ", totalTasks - completedTasks);
    console.log("Прогресс: ", percent, "%");
    console.log("Статус: ", status);
}