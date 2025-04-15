const listOfTopics = document.getElementById("listOfTopics");
const topics = document.getElementById("topics");
const content = document.getElementById("content");

topics.addEventListener("click", (event) => {
    topics.style.background = "burlywood";
    content.style.background = "antiquewhite";   

    for (let index = 0; index < listOfTopics.children.length; index++) {
        listOfTopics.children[index].onclick = null;
        listOfTopics.children[index].id = "listOfTopicsItem" + index;
        // console.log(listOfTopics.children[index].disabled = "true")
        
    }

})

content.addEventListener("click", (event) => {
    content.style.background = "burlywood";
    topics.style.background = "antiquewhite";
})
// Размещаем пункты из содержания в левом меню
topicsDescription.map((el, index) => {
  const item = document.createElement("li");
  item.className = "listOfTopicsItem";
  item.innerHTML = `Урок ${index + 1}`;  
  item.title = Object.keys(el);
  listOfTopics.append(item);
});

listOfTopics.addEventListener("click", (event) => {
    console.log(event.target);

})

