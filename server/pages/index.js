"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/common/date-formatter.js
var date_formatter = __webpack_require__(8810);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/post/cover-image.js




function CoverImage({ title , src , slug , height , width  }) {
    const image = /*#__PURE__*/ _jsx(Image, {
        src: src,
        alt: `Cover Image for ${title}`,
        className: cn("shadow-sm", {
            "hover:shadow-md transition-shadow duration-200": slug
        }),
        layout: "responsive",
        width: width,
        height: height
    });
    return /*#__PURE__*/ _jsx("div", {
        className: "",
        children: slug ? /*#__PURE__*/ _jsx(Link, {
            as: `/posts/${slug}`,
            href: "/posts/[slug]",
            children: /*#__PURE__*/ _jsx("a", {
                "aria-label": title,
                children: image
            })
        }) : image
    });
};

;// CONCATENATED MODULE: ./components/post/post-preview.js






function PostPreview({ title , coverImage , date , excerpt , slug ,  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                as: `/posts/${slug}`,
                href: "/posts/[slug]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "group flex space-x-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    className: "group-hover:text-yellow-600 font-normal text-lg",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-md leading-relaxed text-slate-600",
                                    children: excerpt
                                })
                            ]
                        }),
                        coverImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-32",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: coverImage,
                                alt: `Cover Image for ${title}`,
                                layout: "responsive",
                                width: "100vw",
                                height: "100vh"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-xs mt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-slate-500",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(date_formatter/* default */.Z, {
                        dateString: date
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/post/more-stories.js


function MoreStories({ posts  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "divide-y",
            children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "py-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(PostPreview, {
                        title: post.title,
                        coverImage: post.coverImage,
                        date: post.date,
                        author: post.author,
                        slug: post.slug,
                        excerpt: post.excerpt
                    }, post.slug)
                }, post.slug)
            )
        })
    });
};

// EXTERNAL MODULE: ./components/layout/layout.js + 3 modules
var layout = __webpack_require__(7826);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(7851);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8299);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./components/profile/profile-summary.js



function ProfileSummary() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center space-y-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/assets/profile.jpg",
                className: "rounded-full",
                width: "100",
                height: "100"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-xl",
                        children: "Joo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-sm text-slate-400",
                        children: "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C\uC744 \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.js







function Index({ allPosts  }) {
    const morePosts = allPosts;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "Next.js Blog Example with ",
                            constants/* CMS_NAME */.yf
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pt-24 pb-20 border-b-[1px]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProfileSummary, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-3xl mx-auto mt-6 mb-16",
                    children: morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(MoreStories, {
                        posts: morePosts
                    })
                })
            ]
        })
    });
};
async function getStaticProps() {
    const allPosts = (0,api/* getAllPosts */.Bd)([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt", 
    ]);
    return {
        props: {
            allPosts
        }
    };
}


/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664,535,851], () => (__webpack_exec__(8350)));
module.exports = __webpack_exports__;

})();