window.onload = function() {
    document.getElementById('markdown-output').innerHTML = sessionStorage.getItem('parsedmarkdown')
}