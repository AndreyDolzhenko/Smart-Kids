const listOfTopics = document.getElementById("listOfTopics");
const topics = document.getElementById("topics");
const content = document.getElementById("content");
const descriptionOfChoiseTopic = document.getElementById(
  "descriptionOfChoiseTopic"
);
const placeForProjects = document.getElementById("placeForProjects");
const listOfTopicsItem = document.getElementsByClassName("listOfTopicsItem");

// Параметры раздела с содержанием
topics.addEventListener("click", (event) => {
  placeForProjects.style.display = "none";
  descriptionOfChoiseTopic.style.display = "block";
  topics.style.background = "burlywood";
  content.style.background = "antiquewhite";
  for (let index = 0; index < listOfTopicsItem.length; index++) {
    listOfTopicsItem[index].style.color = "saddlebrown";
    listOfTopicsItem[index].style.textDecoration = "none";
  }
  descriptionOfChoiseTopic.innerHTML =
    "Выберите урок, чтобы ознакомиться с его содержанием.";
});

// Размещаем пункты из содержания в левом меню
topicsDescription.map((el, index) => {
  const item = document.createElement("li");
  item.className = "listOfTopicsItem";
  item.id = index + "_listOfTopicsItem";
  item.innerHTML = `Урок ${index + 1}`;
  item.title = Object.keys(el);
  listOfTopics.append(item);
});

// Начальные настройки разделов
placeForProjects.style.display = "none";
for (let index = 0; index < listOfTopicsItem.length; index++) {
  listOfTopicsItem[index].style.color = "saddlebrown";
  listOfTopicsItem[index].style.textDecoration = "none";
}

// Клик на "Проекты учеников"
content.addEventListener("click", (event) => {
  placeForProjects.innerHTML = "";
  placeForProjects.style.display = "block";
  descriptionOfChoiseTopic.style.display = "none";
  content.style.background = "burlywood";
  topics.style.background = "antiquewhite";
  for (let index = 0; index < listOfTopicsItem.length; index++) {
    listOfTopicsItem[index].style.color = "antiquewhite";
    listOfTopicsItem[index].style.textDecoration = "none";
  }
  // Выводим проекты учеников на главную страницу
  nameOfProject.map((el, index) => {
    const projectItem = document.createElement("li");
    projectItem.style = "list-style-type: none; margin: 10px; float: inline-start;";
    const projectLink = document.createElement("a");
    projectLink.href = `./studentProjects/${el}/index.html`;
    projectLink.target = "blanck";
    projectLink.innerHTML = index+1 + ". " +el;
    projectItem.append(projectLink);
    placeForProjects.append(projectItem);
  });
});

// Клик на тему из "Содержания курса"
listOfTopics.addEventListener("click", (event) => {
  topics.style.background = "burlywood";
  content.style.background = "antiquewhite";
  for (let index = 0; index < listOfTopicsItem.length; index++) {
    listOfTopicsItem[index].style.color = "saddlebrown";
    listOfTopicsItem[index].style.textDecoration = "none";
  }
  placeForProjects.style.display = "none";
  descriptionOfChoiseTopic.style.display = "block";
  descriptionOfChoiseTopic.innerHTML = `<b>${event.target.innerHTML}. ${
    event.target.title
  }</b><br><br> ${Object.values(
    topicsDescription[event.target.id.split("_")[0]]
  )}`;
  document.getElementById(event.target.id).style.textDecoration = "underline";
});
