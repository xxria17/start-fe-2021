
function createClassHTML(item, index, filter) {
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

function createQuizHTML(item, quizFilter) {
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

export default {createClassHTML, createQuizHTML};