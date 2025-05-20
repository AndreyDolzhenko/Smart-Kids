const listOfTopics = document.getElementById("listOfTopics");
const topics = document.getElementById("topics");
const content = document.getElementById("content");
const credit = document.getElementById("credit");
const placeForProjects = document.getElementById("placeForProjects");
const listOfTopicsItem = document.getElementsByClassName("listOfTopicsItem");
const iconTop = document.getElementById("iconTop");
const intoMap = document.getElementById("intoMap");
const localMap = document.getElementById("localMap");

intoMap.addEventListener("touchend", (event) => {
  console.log(localMap.className);

  switch (localMap.className) {
    case "localMapOut":
      intoMap.innerHTML = "Закрыть карту";
      localMap.classList.remove("localMapOut");
      localMap.classList.add("localMapIn");
      break;

    case "localMapIn":
      intoMap.innerHTML = "Открыть карту";
      localMap.classList.remove("localMapIn");
      localMap.classList.add("localMapOut");
      break;

    default:
      break;
  }
});

localMap.addEventListener("mouseover", (event) => {
  console.log(localMap.className);
  intoMap.innerHTML = "Закрыть карту";
  localMap.classList.remove("localMapOut");
  localMap.classList.add("localMapIn");
});

localMap.addEventListener("mouseout", (event) => {
  console.log(localMap.className);
  intoMap.innerHTML = "Открыть карту";
  localMap.classList.remove("localMapIn");
  localMap.classList.add("localMapOut");
});

const descriptionOfChoiseTopic = document.getElementById(
  "descriptionOfChoiseTopic"
);

// Клик на иконку в header
iconTop.addEventListener("click", (event) => {
  placeForProjects.innerHTML = "";
  descriptionOfChoiseTopic.style.display = "block";
  descriptionOfChoiseTopic.innerHTML = projectDescription;
  for (let index = 0; index < listOfTopicsItem.length; index++) {
    listOfTopicsItem[index].style.color = "antiquewhite";
    listOfTopicsItem[index].style.textDecoration = "none";
  }
});

// Параметры раздела с содержанием
topics.addEventListener("click", (event) => {
  placeForProjects.style.display = "none";
  descriptionOfChoiseTopic.style.display = "block";
  topics.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  topics.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "burlywood")
  );
  topics.style.background = "burlywood";
  content.style.background = "antiquewhite";
  credit.style.background = "antiquewhite";
  content.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  content.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "antiquewhite")
  );
  credit.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  credit.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "antiquewhite")
  );
  for (let index = 0; index < listOfTopicsItem.length; index++) {
    listOfTopicsItem[index].style.color = "saddlebrown";
    listOfTopicsItem[index].addEventListener(
      "mouseover",
      (event) => (event.target.style.textDecoration = "ubderline")
    );
    listOfTopicsItem[index].addEventListener(
      "mouseout",
      (event) => (event.target.style.textDecoration = "none")
    );
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
  item.addEventListener(
    "mouseover",
    (event) => (event.target.style.textDecoration = "underline")
  );
  item.addEventListener(
    "mouseout",
    (event) => (event.target.style.textDecoration = "none")
  );
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
descriptionOfChoiseTopic.innerHTML = projectDescription;

// Клик на "Проекты учеников"
content.addEventListener("click", (event) => {
  placeForProjects.innerHTML = "";
  placeForProjects.style.display = "block";
  descriptionOfChoiseTopic.style.display = "none";
  content.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  content.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "burlywood")
  );
  content.style.background = "burlywood";
  credit.style.background = "antiquewhite";
  topics.style.background = "antiquewhite";
  topics.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  topics.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "antiquewhite")
  );
  credit.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  credit.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "antiquewhite")
  );
  for (let index = 0; index < listOfTopicsItem.length; index++) {
    listOfTopicsItem[index].style.color = "antiquewhite";
    listOfTopicsItem[index].style.textDecoration = "none";
  }
  // Выводим проекты учеников на главную страницу
  nameOfProject.map((el, index) => {
    const projectItem = document.createElement("li");
    projectItem.style =
      "list-style-type: none; margin: 10px; float: inline-start;";
    const projectLink = document.createElement("a");
    projectLink.href = `./studentProjects/${el}/index.html`;
    projectLink.target = "blanck";
    projectLink.innerHTML = index + 1 + ". " + el;
    projectItem.append(projectLink);
    placeForProjects.append(projectItem);
  });
});

// Клик на "Зачётные работы"
credit.addEventListener("click", (event) => {
  placeForProjects.innerHTML = "";
  placeForProjects.style.display = "block";
  descriptionOfChoiseTopic.style.display = "none";
  credit.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  credit.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "burlywood")
  );
  credit.style.background = "burlywood";
  topics.style.background = "antiquewhite";
  content.style.background = "antiquewhite";
  topics.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  topics.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "antiquewhite")
  );
  content.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  content.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "antiquewhite")
  );
  for (let index = 0; index < listOfTopicsItem.length; index++) {
    listOfTopicsItem[index].style.color = "antiquewhite";
    listOfTopicsItem[index].style.textDecoration = "none";
  }
  // Выводим проекты учеников на главную страницу
  nameOfCreditProject.map((el, index) => {
    const projectItem = document.createElement("li");
    projectItem.style =
      "list-style-type: none; margin: 10px; float: inline-start;";
    const projectLink = document.createElement("a");
    projectLink.href = `./creditProjects/${el}/index.html`;
    projectLink.target = "blanck";
    projectLink.innerHTML = index + 1 + ". " + el;
    projectItem.append(projectLink);
    placeForProjects.append(projectItem);
  });
});

// Клик на тему из "Содержания курса"
listOfTopics.addEventListener("click", (event) => {
  topics.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  topics.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "burlywood")
  );
  topics.style.background = "burlywood";
  content.style.background = "antiquewhite";
  credit.style.background = "antiquewhite";
  content.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  content.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "antiquewhite")
  );
  credit.addEventListener(
    "mouseover",
    (event) => (event.target.style.background = "burlywood")
  );
  credit.addEventListener(
    "mouseout",
    (event) => (event.target.style.background = "antiquewhite")
  );
  for (let index = 0; index < listOfTopicsItem.length; index++) {
    listOfTopicsItem[index].style.color = "saddlebrown";
    listOfTopicsItem[index].addEventListener(
      "mouseover",
      (event) => (event.target.style.textDecoration = "ubderline")
    );
    listOfTopicsItem[index].addEventListener(
      "mouseout",
      (event) => (event.target.style.textDecoration = "none")
    );
    listOfTopicsItem[index].style.textDecoration = "none";
  }
  placeForProjects.style.display = "none";
  descriptionOfChoiseTopic.style.display = "block";
  descriptionOfChoiseTopic.innerHTML = `<b>${event.target.innerHTML}. ${
    event.target.title
  }</b><br><br> ${Object.values(
    topicsDescription[event.target.id.split("_")[0]]
  )}`;
  event.target.style.textDecoration = "underline";
  event.target.addEventListener(
    "mouseover",
    (event) => (event.target.style.textDecoration = "underline")
  );
  event.target.addEventListener(
    "mouseout",
    (event) => (event.target.style.textDecoration = "underline")
  );
});
