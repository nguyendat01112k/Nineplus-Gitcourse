function animate_string() {
    const element = document.getElementById('target');
    const textNode = element.firstChild;
    let text = textNode.data + " ";
    setInterval(() => {
        text = text.substring(1) + text[0];
        textNode.data = text;
    }, 60);
}

var love = document.getElementById("love");
var nolove = document.getElementById("no-love");

love.addEventListener("click", myFunction);
function myFunction() {
    alert('Mình Biết Mà ahihi')
}

nolove.addEventListener("mouseover", lovefunction);
function lovefunction() {
    nolove.classList.toggle('move')
}