$(document).ready(function () {
    $(".register").hide();
    $(".login_li").addClass("active");

    $(".login_li").click(function () {
        $(this).addClass("active")
        $(".register_li").removeClass("active");
        $(".login").show();
        $(".register").hide();
    });

    $(".register_li").click(function () {
        $(this).addClass("active")
        $(".login_li").removeClass("active");
        $(".register").show();
        $(".login").hide();
    });
});

class login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit() {
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var error = 0;
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (self.validateFields(input) == false) {
                    error++;
                }
            });
            if (error == 0) {
                localStorage.setItem("auth", 1)
                this.form.submit();
            }
        });
    }

    validateFields(field) {
        if (field.value.trim() == "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} cannot be blank`,
                "error"
            );
            return false;
        } else {
            if (field.type == "password") {
                if (field.value.length < 8) {
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} must be at least 8 letters`,
                        "error"
                    );
                    return false;
                } else {
                    this.setStatus(field, null, "success");
                    return true;
                }
            } else {
                this.setStatus(field, null, "success");
                return true;
            }
        }
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");

        if (status == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }

        if (status == "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }
}

const form = document.querySelector(".sign_up");

if (form) {
    const fields = ["username", "password", "username2", "password2", "email"];
    const validator = new login(form, fields);
}



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