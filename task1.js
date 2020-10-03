const categoriesList = document.querySelector("#categories")
// console.dir(categoriesList);

console.log(` В списке ${categoriesList.children.length} категории`);

const categoriesItem = document.getElementsByClassName("item")
// console.log(categoriesItem);

const item = (Array.from(categoriesItem)).forEach((element)=>{
  console.log(`Категория: ${element.children[0].textContent}`);
  console.log(`Количество: ${element.children[1].children.length}`);
})



