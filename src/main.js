const listOfTopics = document.getElementById("listOfTopics");

topicsDescription.map((el, index) => {
    const item = document.createElement("li");
    item.innerHTML = `Урок ${index + 1}`;
    item.title = el.key;
    listOfTopics.append(item);
})

console.log(listOfTopics);