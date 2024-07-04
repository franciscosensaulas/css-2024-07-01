// Function to load an HTML file and append its content
function loadHTML(file) {
    loadCSS("../core/navbar.css")
    loadCSS("../core/helper.css")
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector("nav").innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}




function loadCSS(filename) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    link.onload = () => console.log(`${filename} has been loaded.`);
    link.onerror = () => console.error(`Error loading ${filename}.`);
    document.head.appendChild(link);
}