"use strict";
(() => {
var exports = {};
exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 2101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getTistoryPost),
/* harmony export */   "R": () => (/* binding */ getTistoryPostIds)
/* harmony export */ });
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(855);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5338);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_html_parser__WEBPACK_IMPORTED_MODULE_1__]);
node_html_parser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getTistoryPostIds() {
    var ref;
    const res = await fetch("https://blog.joostory.net/sitemap.xml");
    const text = await res.text();
    const parser = new (xml2js__WEBPACK_IMPORTED_MODULE_0___default().Parser)();
    const data = await parser.parseStringPromise(text);
    const urlPattern = /https:\/\/blog.joostory.net\/(\d+)/;
    return data === null || data === void 0 ? void 0 : (ref = data.urlset) === null || ref === void 0 ? void 0 : ref.url.filter((item)=>!!item.lastmod
    ).filter((item)=>{
        return item === null || item === void 0 ? void 0 : item.loc[0].match(urlPattern);
    }).map((item)=>{
        return item === null || item === void 0 ? void 0 : item.loc[0].match(urlPattern)[1];
    });
}
async function getTistoryPost(id) {
    var ref;
    const res = await fetch("https://blog.joostory.net/" + id);
    if (!res.ok) {
        return {};
    }
    const text = await res.text();
    const root = (0,node_html_parser__WEBPACK_IMPORTED_MODULE_1__.parse)(text);
    const content = root.querySelector(".area_view .contents_style");
    content.querySelector(".revenue_unit_wrap").remove();
    content.querySelector(".container_postbtn").remove();
    const title = root.querySelector(".tit_post a");
    const date = root.querySelector(".info_date");
    const image = (ref = root.querySelector("meta[property='og:image']")) === null || ref === void 0 ? void 0 : ref.getAttribute("content");
    return {
        id: id,
        date: date.innerText,
        title: title.innerText,
        content: content.innerHTML,
        summary: content.innerText.substring(0, 255),
        image: image
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TistoryPost),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_tistory_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2101);
/* harmony import */ var _components_post_post_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4843);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7826);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_tistory_api__WEBPACK_IMPORTED_MODULE_4__]);
_lib_tistory_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function TistoryPost({ post  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.id)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {
            statusCode: 404
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: `https://blog.joostory.net/${post.id}`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_post_view__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: post.title,
                    content: post.content,
                    summary: post.summary,
                    ogImage: post.image,
                    date: post.date
                })
            ]
        })
    });
};
async function getStaticProps({ params  }) {
    const post = await (0,_lib_tistory_api__WEBPACK_IMPORTED_MODULE_4__/* .getTistoryPost */ .G)(params.id);
    return {
        props: {
            post: post
        }
    };
}
async function getStaticPaths() {
    const ids = await (0,_lib_tistory_api__WEBPACK_IMPORTED_MODULE_4__/* .getTistoryPostIds */ .R)();
    return {
        paths: ids.map((id)=>({
                params: {
                    id: id
                }
            })
        ),
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 855:
/***/ ((module) => {

module.exports = require("xml2js");

/***/ }),

/***/ 5338:
/***/ ((module) => {

module.exports = import("node-html-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [535,843], () => (__webpack_exec__(3228)));
module.exports = __webpack_exports__;

})();