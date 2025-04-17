const nameOfProject = ["Андрей Долженко", "Lena", "Ivan", "Nikita", "Maria", "Vika", ];

const date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;

const startName = ["Andrey", "Lena", "Ivan", "Nikita", "Maria", "Vika", ];

const currentName = startName.map(el => el + ". " + date);

console.log(currentName);