const createUserName = document.getElementById("createUserName");
const createUserPassword = document.getElementById("createUserPassword");
const saveUserEmail = document.getElementById("saveUserEmail")
const saveUserBtn = document.getElementById("createUserButton");
const usersData = {}
const checkUserName = document.getElementById("checkUserName");
const checkUserPassword = document.getElementById("checkUserPassword");
const logInBtn = document.getElementById("logInButton");
var userData;

const validInput = ()=>{
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let validarCorreo = expReg.test(saveUserEmail.value)
    if (createUserName.value.length < 4) {
        let div = document.createElement("DIV");
        div.textContent = "El nombre de usuario debe contener mínimo 4 letras";
        formBack.appendChild(div);
        // Styling the warning
        div.style.position = "absolute";
        div.style.textAlign = "center";
        div.style.display = "block";
        div.style.width = "100%";
        div.style.bottom = "90px";
        div.style.opacity = "0"
        div.style.animation = "out 2.5s linear"
    } else if (validarCorreo == false){
        let div = document.createElement("DIV");
        div.textContent = "Ingresa una dirección de correo electrónico válida";
        formBack.appendChild(div);
        // Styling the warning
        div.style.position = "absolute";
        div.style.textAlign = "center";
        div.style.display = "block";
        div.style.width = "100%";
        div.style.bottom = "90px";
        div.style.opacity = "0"
        div.style.animation = "out 2.5s linear"
    } else if (createUserPassword.value.length < 8) {
        let div = document.createElement("DIV");
        div.textContent = "La contraseña debe tener mínimo 8 caracteres";
        formBack.appendChild(div);
        // Styling the warning
        div.style.position = "absolute";
        div.style.textAlign = "center";
        div.style.display = "block";
        div.style.width = "100%";
        div.style.bottom = "90px";
        div.style.opacity = "0"
        div.style.animation = "out 2.5s linear"
    } else {
        if (Object.keys(usersData).length > 0) {
            for (const user in usersData) {
                const currentUser = usersData[user];
                if (createUserName.value === currentUser.name) {
                    let div = document.createElement("DIV");
                    div.textContent = "El nombre ya está ocupado";
                    formBack.appendChild(div);
                    // Styling the warning
                    div.style.position = "absolute";
                    div.style.textAlign = "center";
                    div.style.display = "block";
                    div.style.width = "100%";
                    div.style.bottom = "90px";
                    div.style.opacity = "0"
                    div.style.animation = "out 2.5s linear"
                    userData = "";
                    break
                } else {
                    userData = {
                    "name": createUserName.value,
                    "password": createUserPassword.value,
                    "email": saveUserEmail.value
                    }
                }
            } return userData;
        } else {
            userData = {
            "name": createUserName.value,
            "password": createUserPassword.value,
            "email": saveUserEmail.value
            }
            return userData;
    }
}}

const saveUserData = ()=> {
    let i = 0;
    if (userData !== undefined){
        while (userData) {
            if (localStorage.getItem("userData" + i)) i++;
            else {
                localStorage.setItem(`userData` + i, JSON.stringify(userData))
                userData = "";
                createUserName.value = "";
                createUserPassword.value = "";
                saveUserEmail.value = "";
                let div = document.createElement("DIV");
                div.textContent = "¡Felicidades! Tu cuenta se creó correctamente";
                formBack.appendChild(div);
                // Styling the warning
                div.style.position = "absolute";
                div.style.textAlign = "center";
                div.style.display = "block";
                div.style.width = "100%";
                div.style.bottom = "90px";
                div.style.opacity = "0"
                div.style.animation = "out 3.5s linear"
                break
            }
        }
    }  
}

const saveUsersData = ()=> {
    let i = 0;
    while (true) {
        if (localStorage.getItem("userData" + i)){
            usersData[`userData${i}`] = JSON.parse(localStorage.getItem("userData" + i));
            i++;
        } else break
    }
}

const checkUsersData = ()=>{
    if(Object.keys(usersData).length > 0){
        let accountExist = false;
        for (const user in usersData) {
            const currentUser = usersData[user];
            if (checkUserName.value === currentUser.name && checkUserPassword.value === currentUser.password){
                accountExist = true;
            }
        }
        if (accountExist == true) {
            setTimeout(
                ()=> window.location.href = "epico.html"
                ,100)
        } else if (accountExist == false){
            let div = document.createElement("DIV");
            div.textContent = "No se ha encontrado la cuenta";
            formFront.appendChild(div);
            // Styling the warning
            div.style.position = "absolute";
            div.style.textAlign = "center";
            div.style.display = "block";
            div.style.width = "100%";
            div.style.bottom = "113px";
            div.style.opacity = "0"
            div.style.animation = "out 2.5s linear"
        }
    } else {
        let div = document.createElement("DIV");
        div.textContent = "¡Aún no se ha creado ninguna cuenta!";
        formFront.appendChild(div);
        // Styling the warning
        div.style.position = "absolute";
        div.style.textAlign = "center";
        div.style.display = "block";
        div.style.width = "100%";
        div.style.bottom = "113px";
        div.style.opacity = "0"
        div.style.animation = "out 2.5s linear"
    }
}

saveUsersData();
saveUserBtn.addEventListener("click", ()=>{
    validInput();
    saveUserData();
    saveUsersData();
})

logInBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    checkUsersData();
})