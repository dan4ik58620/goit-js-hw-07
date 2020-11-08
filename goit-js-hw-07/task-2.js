"use strict";

// ======================== 2 =========

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ul1 = document.getElementById('ingredients').append(...ingredients);
const li1 = document.createElement('li');