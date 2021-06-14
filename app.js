var files = ["data/class.json", "data/quiz.json"];

// json 파일 읽기
function readJsonFile() {
    for (let i = 0; i < files.length; i++) {
        fetch(files[i])
        .then((response) => (response.json()))
        .then((data) => displayClassItems(data))
        .catch(error => console.log(error));
    }
}

function displayClassItems(data) {
    const tbody = document.querySelector(".tbody");
    const qbody = document.querySelector(".quiz_body")

    if (data.length > 13) {
        tbody.innerHTML = data.map((item, index)=> createHTML(item, index)).join("");
    } else {
        qbody.innerHTML = data.map((item)=> createQuizHTML(item)).join("");
    }
   
}

function createHTML(item, index) {
    return `
    <tr>
    <th scope="row">${index+1}</th>
    <td>${item.title}</td>
    <td><a href="${item.docUrl}" class="badge bg-secondary">문서</a>
    </td>
    <td>${createLinkHTML(item.links)}</td>
    <td>${item.date}</td>
    <td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
    </tr>`
}

function createLinkHTML(data) {
    let linkList = ''
    for (let i = 0; i < data.length; i++) {
        linkList += ` <a href="${data[i]}" class="badge bg-secondary">${i+1}</a> `
    }
    return linkList;
}

function createQuizHTML(item) {
    return `
    <tr>
    <td>${item.title}</td>
    <td><a href="${item.docUrl}" class="badge bg-secondary">문서</a>
    </td>
    <td><a href="${item.previewUrl}" class="badge bg-secondary">previewUrl</a>
    <td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
    </tr>`
}

readJsonFile();