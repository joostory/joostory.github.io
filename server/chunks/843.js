"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 4843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PostView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(5566);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: ./components/common/date-formatter.js
var date_formatter = __webpack_require__(8810);
;// CONCATENATED MODULE: ./components/post/post-title.js

function PostTitle({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center text-3xl",
        children: children
    });
};

;// CONCATENATED MODULE: ./components/post/post-header.js



function PostHeader({ title , date  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pt-40 pb-36 px-20 border-b-[1px] relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PostTitle, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                    className: "text-sm",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(date_formatter/* default */.Z, {
                        dateString: date
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/post/post-body.js

function PostBody({ content  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-[650px] pt-10 pb-20 mx-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
            dangerouslySetInnerHTML: {
                __html: content
            },
            className: "prose"
        })
    });
};

;// CONCATENATED MODULE: ./components/post/post-view.js






function PostView({ title , content , summary , ogImage , coverImage , date  }) {
    const router = (0,router_.useRouter)();
    if (!router.isFallback && !title) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: summary
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: ogImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: summary
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:image",
                        content: ogImage
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PostHeader, {
                        title: title,
                        date: date,
                        coverImage: coverImage,
                        author: {
                            name: "Joo"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PostBody, {
                        content: content
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;