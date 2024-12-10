//获取“登录”和“注册”的文本节点
let login_header_text = document.getElementById("login_header_text");
let signup_header_text = document.getElementById("signup_header_text");
// 登录和注册的div模块
let login_box = document.getElementById("login_box");
let signup_box = document.getElementById("signup_box");
//
function login_signup_panduan() {
    signup_header_text.addEventListener("click", function () {
        if (signup_header_text.textContent == "注册") {
            signup_box.style.display = "flex";
            login_box.style.display = "none";
        }
    })
    // 
    login_header_text.addEventListener("click", () => {
        if (login_header_text.textContent == "登录") {
            login_box.style.display = "flex";
            signup_box.style.display = "none"
        }
    })
}
login_signup_panduan();
// 
