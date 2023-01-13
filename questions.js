function editor1() {
    var details = document.getElementById('details')
    var npm = document.getElementById('npm').checked
    var github = document.getElementById('github').checked
    var docs = document.getElementById('docs').checked
    var guide = document.getElementById('guide').checked
    x = details.value
    var y
    if (npm) {
        y = 'npm package'
    } else if (github) {
        y = 'github repository'
    } else if (docs) {
        y = 'project\'s documentation'
    } else if (guide) {
        y = 'guide to use the project'
    }
    if (x && y) {
        return [x, y]
    } else if (x) {
        return [x]
    } else if (y) {
        return [y]
    } else {
        return [' ', ' ']
    }
}





button = document.getElementById("submitbutton")

button.onclick = async() => {
    button.innerHTML = "Loading..."

    var url = "https://api.openai.com/v1/completions";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);


    var template = "Write a README file for me, my project is " + editor1()[0] + " This readme file is for a " + editor1()[1] + "Give me a proper raw file of it"
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer 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");

    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4) {
    //         console.log(xhr.status);
    //         console.log(xhr.responseText);
    //     }
    // };

    var data = `{
  "model": "text-davinci-003",
  "prompt": "${template}",
  "temperature": 0.5,
  "max_tokens": 400,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}`;

    xhr.send(data)

    xhr.onreadystatechange = function() {
            console.log("responsed")
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {

                    // The request was successful, and the response body is available in xhr.responseText
                    var response = JSON.parse(xhr.responseText);
                    var final = response.choices[0].text

                    sessionStorage.setItem("readmevalue", final);
                    window.location.href = 'editor.html';

                    // process the response
                } else {
                    // There was an error with the request, you can use xhr.status and xhr.statusText to get more information
                    console.error(xhr.status + ": " + xhr.statusText);

                }
            }
        }
        // dt.response.data.choices[0].text
}