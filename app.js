var files = ["data/class.json", "data/quiz.json"];
var filter = 'all';
var quizFilter = 'quizall';
const tbody = document.querySelector(".tbody");
const qbody = document.querySelector(".quiz_body")
const tTr = document.querySelectorAll(".tbody tr")
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

    if (data.length > 13) {
        tbody.innerHTML = data.map((item, index)=> createHTML(item, index)).join("");
    } else {
        qbody.innerHTML = data.map((item)=> createQuizHTML(item)).join("");
    }
   
}

function createHTML(item, index) {
    let html = ''

    if (filter == 'all') {
        html = `
    <tr>
    <th scope="row">${index+1}</th>
    <td>${item.title}</td>`

        if (item.docUrl.length != 0) {
            html += `
            <td><a href="${item.docUrl}" class="badge bg-secondary">문서</a>
            </td>
            <td>${createLinkHTML(item.links)}</td>
            <td>${item.date}</td>`

            
        if (item.gitUrl.length != 0) {
            html += `<td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
            </td>
            </tr>`
        } else {
            html += `<td></td>
            </tr>`
        }
        } else {
            html += `<td></td>
            <td>${createLinkHTML(item.links)}</td>
            <td>${item.date}</td>`
            
        if (item.gitUrl.length != 0) {
            html += `<td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
            </td>
            </tr>`
        } else {
            html += `<td></td>
            </tr>`
        }
        }
        
        
    } else if (filter == 'link') {

        if (item.links.length != 0) {
            html = `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${item.title}</td>`
            if (item.docUrl.length != 0) {
                html += `
                <td><a href="${item.docUrl}" class="badge bg-secondary">문서</a>
                </td>
                <td>${createLinkHTML(item.links)}</td>
                <td>${item.date}</td>`
    
                
            if (item.gitUrl.length != 0) {
                html += `<td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
                </td>
                </tr>`
            } else {
                html += `<td></td>
                </tr>`
            }
            } else {
                html += `<td></td>
                <td>${createLinkHTML(item.links)}</td>
                <td>${item.date}</td>`
                
            if (item.gitUrl.length != 0) {
                html += `<td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
                </td>
                </tr>`
            } else {
                html += `<td></td>
                </tr>`
            }
            }
        } 
    } else if (filter == 'recent') {
        html = `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${item.title}</td>`
        if (item.docUrl.length != 0) {
            html += `
            <td><a href="${item.docUrl}" class="badge bg-secondary">문서</a>
            </td>
            <td>${createLinkHTML(item.links)}</td>
            <td>${item.date}</td>`
            
        if (item.gitUrl.length != 0) {
            html += `<td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
            </td>
            </tr>`
        } else {
            html += `<td></td>
            </tr>`
        }
        } else {
            html += `<td></td>
            <td>${createLinkHTML(item.links)}</td>
            <td>${item.date}</td>`
            
        if (item.gitUrl.length != 0) {
            html += `<td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
            </td>
            </tr>`
        } else {
            html += `<td></td>
            </tr>`
        }
        }
    } else {
        if (item.gitUrl.length != 0) {
            html = `
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
    }
   return html
}

function createLinkHTML(data) {
    let linkList = ''
    for (let i = 0; i < data.length; i++) {
        linkList += ` <a href="${data[i]}" class="badge bg-secondary">${i+1}</a> `
    }
    return linkList;
}

function createQuizHTML(item) {
    let html = '';
    if (quizFilter == 'quizall') {
        html = `
        <tr>
        <td>${item.title}</td>
        <td><a href="${item.docUrl}" class="badge bg-secondary">문서</a>
        </td>
        <td><a href="${item.previewUrl}" class="badge bg-secondary">previewUrl</a>
        <td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
        </tr>`;
    } else {
        if (item.gitUrl.length != 0) {
            html = `
            <tr>
            <td>${item.title}</td>
            <td><a href="${item.docUrl}" class="badge bg-secondary">문서</a>
            </td>
            <td><a href="${item.previewUrl}" class="badge bg-secondary">previewUrl</a>
            <td><a href="${item.gitUrl}" class="badge bg-secondary">git</a>
            </tr>`;
        } 
    }
        
    return html;
}

readJsonFile();

function selectTab(event) {
    var i, tabBtn;
    tabBtn = document.getElementsByClassName("btn");
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }

    if (event.currentTarget.value == 'all' || event.currentTarget.value == 'link' || event.currentTarget.value == 'git' || event.currentTarget.value == 'recent') {
        filter = event.currentTarget.value
        
        if (quizFilter == 'quizall') {
            tabBtn[4].className += " active";
        } else {
            tabBtn[5].className += " active";
        }
    } else {
        quizFilter = event.currentTarget.value;
        if (filter == 'all') {
            tabBtn[0].className += " active";
        } else if (filter == 'link') {
            tabBtn[1].className += " active";
        } else if (filter == 'git') {
            tabBtn[2].className += " active";
        } else {
            tabBtn[3].className += " active";
        }
    }
    event.currentTarget.className += " active";
    readJsonFile();
}

// 최신순 정렬
function sort() {
    Array.from(tTr).reverse().forEach((el, i) => {
        tbody.append(el);
    })
}

