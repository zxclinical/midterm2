function submitForm(){
    let newsHead = document.getElementById("newsHead").value;
    let newsBody = document.getElementById("newsBody").value;
    let newNewsHead = document.getElementById("news-block__head");
    let newNewsBody = document.getElementById("news-block__body");
    localStorage.setItem("newsHead", newsHead);
    localStorage.setItem("newsBody", newsBody);
    newNewsHead.innerHTML = localStorage.getItem("newsHead");
    newNewsBody.innerHTML = localStorage.getItem("newsBody");
}

function onLoad(){
    let newNewsHead = document.getElementById("news-block__head");
    let newNewsBody = document.getElementById("news-block__body");
    newNewsHead.innerHTML = localStorage.getItem("newsHead");
    newNewsBody.innerHTML = localStorage.getItem("newsBody");
}

function runAdmin(){
    let adminButton = document.getElementById("adminButton");
    adminButton.innerHTML = "Welcome, Admin";
    let adminPanel = document.getElementById("admin-panel");
    adminPanel.style.display = "block";
}