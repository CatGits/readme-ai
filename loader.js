function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
var textarea = document.getElementById("readmeraw")

function Preview() {

    data = marked.parse(textarea.value)
    sessionStorage.setItem("parsedmarkdown", data)

    window.open('preview.html', "_blank")
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}




window.onload = function() {
    var final = sessionStorage.getItem("readmevalue");
    document.getElementById("readmeraw").value = final;
}

function downloadMarkdown() {
    // Get the contents of the textarea
    const markdown = document.getElementById('readmeraw').value;

    // Create a blob with the contents of the textarea and the MIME type for a Markdown file
    const blob = new Blob([markdown], { type: 'text/markdown' });

    // Create a URL that can be used to reference the blob
    const url = URL.createObjectURL(blob);

    // Create a link element and set its href to the URL created above
    const link = document.createElement('a');
    link.href = url;
    link.download = 'markdown.md';

    // Trigger the download by clicking the link
    link.click();

    // Release the URL created above so it can be garbage collected
    URL.revokeObjectURL(url);
}

const button = document.getElementById('download');
button.addEventListener('click', downloadMarkdown);