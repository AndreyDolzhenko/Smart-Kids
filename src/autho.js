const currentDateLibrary = `${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()}`;

const pass = new URLSearchParams(window.location.search).get("pass");

// проверка пароля и блокировка загрузки, если не соответствует
pass == currentDateLibrary ? true : window.stop();


