const btnEl = document.querySelector(".btn")
const inputEl = document.querySelector("input")
const iconEl = document.querySelector(".icon")
const alertEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", () => {
    updatePassword();
})
iconEl.addEventListener("click", () => {
    copy();
    alertEl.classList.add("active")
    alertEl.innerHTML = "Password Copied!"
})
function updatePassword() {
    const chars = `QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%^&*<()_+{}|:>?`

    passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)

    }
    inputEl.value = password

}
function copy() {
    inputEl.select();
    // inputEl.setSelectionRange(0, 9999); for mobile devices
    navigator.clipboard.writeText(inputEl.value);
}