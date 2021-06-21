/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-data.js */ \"./src/load-data.js\");\n/* harmony import */ var _html_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-render.js */ \"./src/html-render.js\");\n\r\n\r\n\r\nconst files = [\"/data/class.json\", \"/data/quiz.json\"];\r\nconst tbody = document.querySelector(\".tbody\");\r\nconst qbody = document.querySelector(\".quiz_body\");\r\nconst tTr = document.querySelectorAll(\".tbody tr\");\r\nconst $classLoading = document.querySelector(\"#class_loading\");\r\nconst $quizLoading = document.querySelector(\"#quiz_loading\");\r\nconst $btn = document.querySelectorAll(\".btn\");\r\n\r\nlet flag = 'class';\r\nlet filter = 'all';\r\nlet quizFilter = 'quizall';\r\n\r\n$classLoading.style.display = \"none\";\r\n$quizLoading.style.display = \"none\";\r\n\r\n\r\nreadJsonFile();\r\n\r\n// json 파일 읽기\r\nfunction readJsonFile() {\r\n    setTimeout(async function() {\r\n        $classLoading.style.display = \"none\";\r\n        $quizLoading.style.display = \"none\";\r\n        for (let i = 0; i < files.length; i++) {\r\n            let data = await _load_data_js__WEBPACK_IMPORTED_MODULE_0__.default.loadJsonFile(files[i]);\r\n            displayClassItems(data);\r\n        }\r\n    }, 1000);\r\n    loading();\r\n}\r\n\r\n// html 생성\r\nfunction displayClassItems(data) {\r\n    if (data.length > 13) {\r\n        tbody.innerHTML = data.map((item, index)=> _html_render_js__WEBPACK_IMPORTED_MODULE_1__.default.createClassHTML(item, index, filter)).join(\"\");\r\n    } else {\r\n        qbody.innerHTML = data.map((item)=> _html_render_js__WEBPACK_IMPORTED_MODULE_1__.default.createQuizHTML(item, quizFilter)).join(\"\");\r\n    }\r\n}\r\n\r\n// 리스트 필터 버튼 이벤트\r\nfor (var i = 0; i < $btn.length; i++) {\r\n    $btn[i].addEventListener('click', (event) => {\r\n        selectTab(event);\r\n    });\r\n}\r\n\r\n\r\n// 리스트 필터\r\nfunction selectTab(event) {\r\n    var i;\r\n    for (i = 0; i < $btn.length; i++) {\r\n        $btn[i].className = $btn[i].className.replace(\" active\", \"\");\r\n    }\r\n\r\n    if (event.currentTarget.value == 'all' || event.currentTarget.value == 'link' || event.currentTarget.value == 'git' || event.currentTarget.value == 'recent') {\r\n        filter = event.currentTarget.value\r\n        \r\n        if (quizFilter == 'quizall') {\r\n            $btn[4].className += \" active\";\r\n        } else {\r\n            $btn[5].className += \" active\";\r\n        }\r\n        flag = 'class';\r\n    } else {\r\n        quizFilter = event.currentTarget.value;\r\n        if (filter == 'all') {\r\n            $btn[0].className += \" active\";\r\n        } else if (filter == 'link') {\r\n            $btn[1].className += \" active\";\r\n        } else if (filter == 'git') {\r\n            $btn[2].className += \" active\";\r\n        } else {\r\n            $btn[3].className += \" active\";\r\n        }\r\n        flag = 'quiz';\r\n    }\r\n    event.currentTarget.className += \" active\";\r\n    readJsonFile();\r\n}\r\n\r\n// 최신순 정렬\r\nfunction sort() {\r\n    Array.from(tTr).reverse().forEach((el, i) => {\r\n        tbody.append(el);\r\n    })\r\n}\r\n\r\n// 로딩\r\nfunction loading() {\r\n    if (flag == 'class') {\r\n        $classLoading.style.display = \"block\";\r\n    } else {\r\n        $quizLoading.style.display = \"block\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/app.js?");

/***/ }),

/***/ "./src/html-render.js":
/*!****************************!*\
  !*** ./src/html-render.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction createClassHTML(item, index, filter) {\r\n    let html = ''\r\n\r\n    if (filter == 'all') {\r\n        html = `\r\n    <tr>\r\n    <th scope=\"row\">${index+1}</th>\r\n    <td>${item.title}</td>`\r\n\r\n        if (item.docUrl.length != 0) {\r\n            html += `\r\n            <td><a href=\"${item.docUrl}\" class=\"badge bg-secondary\">문서</a>\r\n            </td>\r\n            <td>${createLinkHTML(item.links)}</td>\r\n            <td>${item.date}</td>`\r\n\r\n            \r\n        if (item.gitUrl.length != 0) {\r\n            html += `<td><a href=\"${item.gitUrl}\" class=\"badge bg-secondary\">git</a>\r\n            </td>\r\n            </tr>`\r\n        } else {\r\n            html += `<td></td>\r\n            </tr>`\r\n        }\r\n        } else {\r\n            html += `<td></td>\r\n            <td>${createLinkHTML(item.links)}</td>\r\n            <td>${item.date}</td>`\r\n            \r\n        if (item.gitUrl.length != 0) {\r\n            html += `<td><a href=\"${item.gitUrl}\" class=\"badge bg-secondary\">git</a>\r\n            </td>\r\n            </tr>`\r\n        } else {\r\n            html += `<td></td>\r\n            </tr>`\r\n        }\r\n        }\r\n        \r\n        \r\n    } else if (filter == 'link') {\r\n\r\n        if (item.links.length != 0) {\r\n            html = `\r\n        <tr>\r\n        <th scope=\"row\">${index+1}</th>\r\n        <td>${item.title}</td>`\r\n            if (item.docUrl.length != 0) {\r\n                html += `\r\n                <td><a href=\"${item.docUrl}\" class=\"badge bg-secondary\">문서</a>\r\n                </td>\r\n                <td>${createLinkHTML(item.links)}</td>\r\n                <td>${item.date}</td>`\r\n    \r\n                \r\n            if (item.gitUrl.length != 0) {\r\n                html += `<td><a href=\"${item.gitUrl}\" class=\"badge bg-secondary\">git</a>\r\n                </td>\r\n                </tr>`\r\n            } else {\r\n                html += `<td></td>\r\n                </tr>`\r\n            }\r\n            } else {\r\n                html += `<td></td>\r\n                <td>${createLinkHTML(item.links)}</td>\r\n                <td>${item.date}</td>`\r\n                \r\n            if (item.gitUrl.length != 0) {\r\n                html += `<td><a href=\"${item.gitUrl}\" class=\"badge bg-secondary\">git</a>\r\n                </td>\r\n                </tr>`\r\n            } else {\r\n                html += `<td></td>\r\n                </tr>`\r\n            }\r\n            }\r\n        } \r\n    } else if (filter == 'recent') {\r\n        html = `\r\n        <tr>\r\n        <th scope=\"row\">${index+1}</th>\r\n        <td>${item.title}</td>`\r\n        if (item.docUrl.length != 0) {\r\n            html += `\r\n            <td><a href=\"${item.docUrl}\" class=\"badge bg-secondary\">문서</a>\r\n            </td>\r\n            <td>${createLinkHTML(item.links)}</td>\r\n            <td>${item.date}</td>`\r\n            \r\n        if (item.gitUrl.length != 0) {\r\n            html += `<td><a href=\"${item.gitUrl}\" class=\"badge bg-secondary\">git</a>\r\n            </td>\r\n            </tr>`\r\n        } else {\r\n            html += `<td></td>\r\n            </tr>`\r\n        }\r\n        } else {\r\n            html += `<td></td>\r\n            <td>${createLinkHTML(item.links)}</td>\r\n            <td>${item.date}</td>`\r\n            \r\n        if (item.gitUrl.length != 0) {\r\n            html += `<td><a href=\"${item.gitUrl}\" class=\"badge bg-secondary\">git</a>\r\n            </td>\r\n            </tr>`\r\n        } else {\r\n            html += `<td></td>\r\n            </tr>`\r\n        }\r\n        }\r\n    } else {\r\n        if (item.gitUrl.length != 0) {\r\n            html = `\r\n            <tr>\r\n            <th scope=\"row\">${index+1}</th>\r\n            <td>${item.title}</td>\r\n            <td><a href=\"${item.docUrl}\" class=\"badge bg-secondary\">문서</a>\r\n            </td>\r\n            <td>${createLinkHTML(item.links)}</td>\r\n            <td>${item.date}</td>\r\n            <td><a href=\"${item.gitUrl}\" class=\"badge bg-secondary\">git</a>\r\n            </tr>`\r\n        }\r\n    }\r\n   return html\r\n}\r\n\r\nfunction createLinkHTML(data) {\r\n    let linkList = ''\r\n    for (let i = 0; i < data.length; i++) {\r\n        linkList += ` <a href=\"${data[i]}\" class=\"badge bg-secondary\">${i+1}</a> `\r\n    }\r\n    return linkList;\r\n}\r\n\r\nfunction createQuizHTML(item, quizFilter) {\r\n    let html = '';\r\n    if (quizFilter == 'quizall') {\r\n        html = `\r\n        <tr>\r\n        <td>${item.title}</td>\r\n        <td><a href=\"${item.docUrl}\" class=\"badge bg-secondary\">문서</a>\r\n        </td>\r\n        <td><a href=\"${item.previewUrl}\" class=\"badge bg-secondary\">previewUrl</a>\r\n        <td><a href=\"${item.gitUrl}\" class=\"badge bg-secondary\">git</a>\r\n        </tr>`;\r\n    } else {\r\n        if (item.gitUrl.length != 0) {\r\n            html = `\r\n            <tr>\r\n            <td>${item.title}</td>\r\n            <td><a href=\"${item.docUrl}\" class=\"badge bg-secondary\">문서</a>\r\n            </td>\r\n            <td><a href=\"${item.previewUrl}\" class=\"badge bg-secondary\">previewUrl</a>\r\n            <td><a href=\"${item.gitUrl}\" class=\"badge bg-secondary\">git</a>\r\n            </tr>`;\r\n        } \r\n    }\r\n        \r\n    return html;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({createClassHTML, createQuizHTML});\n\n//# sourceURL=webpack://webpack-demo/./src/html-render.js?");

/***/ }),

/***/ "./src/load-data.js":
/*!**************************!*\
  !*** ./src/load-data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nasync function loadJsonFile(json) {\r\n\r\n    const response = await fetch(json);\r\n    const result = await response.json()\r\n    return result;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loadJsonFile});\n\n//# sourceURL=webpack://webpack-demo/./src/load-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;