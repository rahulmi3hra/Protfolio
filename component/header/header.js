const navbar = document.querySelector(".nav");
const nav = () => {
    fetch('/component/header/header.html')
    .then(response => response.text())
    .then(data => {
        navbar.innerHTML = data
    })
}
nav()
export default nav;