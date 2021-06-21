import load from './load-data.js';
import createHTML from './html-render.js';

const files = ["/data/class.json", "/data/quiz.json"];
const tbody = document.querySelector(".tbody");
const qbody = document.querySelector(".quiz_body");
const tTr = document.querySelectorAll(".tbody tr");
const $classLoading = document.querySelector("#class_loading");
const $quizLoading = document.querySelector("#quiz_loading");
const $btn = document.querySelectorAll(".btn");

let flag = 'class';
let filter = 'all';
let quizFilter = 'quizall';

$classLoading.style.display = "none";
$quizLoading.style.display = "none";


readJsonFile();

// json 파일 읽기
function readJsonFile() {
    setTimeout(async function() {
        $classLoading.style.display = "none";
        $quizLoading.style.display = "none";
        for (let i = 0; i < files.length; i++) {
            let data = await load.loadJsonFile(files[i]);
            displayClassItems(data);
        }
    }, 1000);
    loading();
}

// html 생성
function displayClassItems(data) {
    if (data.length > 13) {
        tbody.innerHTML = data.map((item, index)=> createHTML.createClassHTML(item, index, filter)).join("");
    } else {
        qbody.innerHTML = data.map((item)=> createHTML.createQuizHTML(item, quizFilter)).join("");
    }
}

// 리스트 필터 버튼 이벤트
for (var i = 0; i < $btn.length; i++) {
    $btn[i].addEventListener('click', (event) => {
        selectTab(event);
    });
}


// 리스트 필터
function selectTab(event) {
    var i;
    for (i = 0; i < $btn.length; i++) {
        $btn[i].className = $btn[i].className.replace(" active", "");
    }

    if (event.currentTarget.value == 'all' || event.currentTarget.value == 'link' || event.currentTarget.value == 'git' || event.currentTarget.value == 'recent') {
        filter = event.currentTarget.value
        
        if (quizFilter == 'quizall') {
            $btn[4].className += " active";
        } else {
            $btn[5].className += " active";
        }
        flag = 'class';
    } else {
        quizFilter = event.currentTarget.value;
        if (filter == 'all') {
            $btn[0].className += " active";
        } else if (filter == 'link') {
            $btn[1].className += " active";
        } else if (filter == 'git') {
            $btn[2].className += " active";
        } else {
            $btn[3].className += " active";
        }
        flag = 'quiz';
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

// 로딩
function loading() {
    if (flag == 'class') {
        $classLoading.style.display = "block";
    } else {
        $quizLoading.style.display = "block";
    }
}
