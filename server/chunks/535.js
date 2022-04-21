"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 8810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DateFormatter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function DateFormatter({ dateString  }) {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
    try {
        const dateStr = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "yyyy.MM.dd HH:mm");
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
            dateTime: dateString,
            children: dateStr
        });
    } catch (e) {
        console.error(e);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
            dateTime: dateString,
            children: dateString
        });
    }
};


/***/ }),

/***/ 7826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/layout/container.js

function Container({ children  }) {
    return /*#__PURE__*/ _jsx("div", {
        className: "container mx-auto",
        children: children
    });
};

;// CONCATENATED MODULE: ./components/layout/footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-slate-100 border-t border-accent-2 mt-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "py-4 flex flex-col items-center justify-center text-xs text-slate-500",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://twitter.com/@JooStory",
                children: "@JooStory"
            })
        })
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
;// CONCATENATED MODULE: ./components/layout/meta.js



function Meta() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: `JooStory.net`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: constants/* HOME_OG_IMAGE_URL */.vC
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout/layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min-h-screen",
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


/***/ }),

/***/ 8299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vC": () => (/* binding */ HOME_OG_IMAGE_URL),
/* harmony export */   "yf": () => (/* binding */ CMS_NAME)
/* harmony export */ });
/* unused harmony export EXAMPLE_PATH */
const EXAMPLE_PATH = "blog-starter";
const CMS_NAME = "Markdown";
const HOME_OG_IMAGE_URL = "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";


/***/ })

};
;