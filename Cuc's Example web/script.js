function animate_string() {
    const element = document.getElementById('target');
    const textNode = element.firstChild;
    let text = textNode.data + " ";
    setInterval(() => {
        text = text.substring(1) + text[0];
        textNode.data = text;
    }, 60);
}