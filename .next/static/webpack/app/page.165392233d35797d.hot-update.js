"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/EmailSection.tsx":
/*!*****************************************!*\
  !*** ./src/components/EmailSection.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst EmailSection = ()=>{\n    _s();\n    const [emailSubmitted, setEmailSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const data = {\n            email: e.target.email.value,\n            subject: e.target.subject.value,\n            message: e.target.message.value\n        };\n        const JSONdata = JSON.stringify(data);\n        const endpoint = \"/api/send\";\n        const options = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSONdata\n        };\n        const response = await fetch(endpoint, options);\n        const resData = await response.json();\n        if (response.status === 200) {\n            console.log(\"Message sent.\");\n            setEmailSubmitted(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"contact\",\n        className: \"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2\"\n            }, void 0, false, {\n                fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-xl font-bold text-white my-2\",\n                        children: \"Let's Connect\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#ADB7BE] mb-4 max-w-md\",\n                        children: [\n                            \" \",\n                            \"I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"socials flex flex-row gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"https://github.com/DoPhuc22\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: \"/github-icon.svg\",\n                                width: 60,\n                                height: 50,\n                                alt: \"Github Icon\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: emailSubmitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-green-500 text-sm mt-2\",\n                    children: \"Email sent successfully!\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"text-white block mb-2 text-sm font-medium\",\n                                    children: \"Your email\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"email\",\n                                    type: \"email\",\n                                    id: \"email\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"example@gmail.com\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"subject\",\n                                    className: \"text-white block text-sm mb-2 font-medium\",\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"subject\",\n                                    type: \"text\",\n                                    id: \"subject\",\n                                    required: true,\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Just saying hi\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"text-white block text-sm mb-2 font-medium\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"message\",\n                                    id: \"message\",\n                                    className: \"bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5\",\n                                    placeholder: \"Let's talk about...\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-primary-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full\",\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\workspace\\\\portfolio\\\\src\\\\components\\\\EmailSection.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EmailSection, \"IL/1oxkK5/Jlk2NonsoBRMUDKwE=\");\n_c = EmailSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailSection);\nvar _c;\n$RefreshReg$(_c, \"EmailSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VtYWlsU2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0M7QUFDWDtBQUNFO0FBRS9CLE1BQU1JLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQUM7SUFFckQsTUFBTU0sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxPQUFPO1lBQ1hDLE9BQU9ILEVBQUVJLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDRSxLQUFLO1lBQzNCQyxTQUFTTixFQUFFSSxNQUFNLENBQUNFLE9BQU8sQ0FBQ0QsS0FBSztZQUMvQkUsU0FBU1AsRUFBRUksTUFBTSxDQUFDRyxPQUFPLENBQUNGLEtBQUs7UUFDakM7UUFDQSxNQUFNRyxXQUFXQyxLQUFLQyxTQUFTLENBQUNSO1FBQ2hDLE1BQU1TLFdBQVc7UUFFakIsTUFBTUMsVUFBVTtZQUNkQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1QO1FBQ1I7UUFFQSxNQUFNUSxXQUFXLE1BQU1DLE1BQU1OLFVBQVVDO1FBQ3ZDLE1BQU1NLFVBQVUsTUFBTUYsU0FBU0csSUFBSTtRQUVuQyxJQUFJSCxTQUFTSSxNQUFNLEtBQUssS0FBSztZQUMzQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1p4QixrQkFBa0I7UUFDcEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDeUI7UUFDQ0MsSUFBRztRQUNIQyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQUlELFdBQVU7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBb0M7Ozs7OztrQ0FHbEQsOERBQUNHO3dCQUFFSCxXQUFVOzs0QkFDVjs0QkFBSTs7Ozs7OztrQ0FLUCw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUMvQixpREFBSUE7NEJBQUNtQyxNQUFLO3NDQUNULDRFQUFDbEMsa0RBQUtBO2dDQUFDbUMsS0FBSztnQ0FBb0JDLE9BQU87Z0NBQUlDLFFBQVE7Z0NBQUlDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpFLDhEQUFDUDswQkFDRTdCLCtCQUNDLDhEQUFDK0I7b0JBQUVILFdBQVU7OEJBQThCOzs7Ozs4Q0FJM0MsOERBQUNTO29CQUFLVCxXQUFVO29CQUFnQlUsVUFBVXBDOztzQ0FDeEMsOERBQUMyQjs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNXO29DQUNDQyxTQUFRO29DQUNSWixXQUFVOzhDQUNYOzs7Ozs7OENBR0QsOERBQUNhO29DQUNDQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMaEIsSUFBRztvQ0FDSGlCLFFBQVE7b0NBQ1JoQixXQUFVO29DQUNWaUIsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ2hCOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ1c7b0NBQ0NDLFNBQVE7b0NBQ1JaLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ2E7b0NBQ0NDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xoQixJQUFHO29DQUNIaUIsUUFBUTtvQ0FDUmhCLFdBQVU7b0NBQ1ZpQixhQUFZOzs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDaEI7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDVztvQ0FDQ0MsU0FBUTtvQ0FDUlosV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDa0I7b0NBQ0NKLE1BQUs7b0NBQ0xmLElBQUc7b0NBQ0hDLFdBQVU7b0NBQ1ZpQixhQUFZOzs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDRTs0QkFDQ0osTUFBSzs0QkFDTGYsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQXBITTdCO0tBQUFBO0FBc0hOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VtYWlsU2VjdGlvbi50c3g/M2IwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBFbWFpbFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsU3VibWl0dGVkLCBzZXRFbWFpbFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOmFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZW1haWw6IGUudGFyZ2V0LmVtYWlsLnZhbHVlLFxyXG4gICAgICBzdWJqZWN0OiBlLnRhcmdldC5zdWJqZWN0LnZhbHVlLFxyXG4gICAgICBtZXNzYWdlOiBlLnRhcmdldC5tZXNzYWdlLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IEpTT05kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiL2FwaS9zZW5kXCI7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OZGF0YSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgb3B0aW9ucyk7XHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2Ugc2VudC5cIik7XHJcbiAgICAgIHNldEVtYWlsU3VibWl0dGVkKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBpZD1cImNvbnRhY3RcIlxyXG4gICAgICBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIG15LTEyIG1kOm15LTEyIHB5LTI0IGdhcC00IHJlbGF0aXZlXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bcmFkaWFsLWdyYWRpZW50KGVsbGlwc2VfYXRfY2VudGVyLF92YXIoLS10dy1ncmFkaWVudC1zdG9wcykpXSBmcm9tLXByaW1hcnktOTAwIHRvLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCBoLTgwIHctODAgei0wIGJsdXItbGcgYWJzb2x1dGUgdG9wLTMvNCAtbGVmdC00IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUtMS8yXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMFwiPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG15LTJcIj5cclxuICAgICAgICAgIExldCZhcG9zO3MgQ29ubmVjdFxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0FEQjdCRV0gbWItNCBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgSSZhcG9zO20gY3VycmVudGx5IGxvb2tpbmcgZm9yIG5ldyBvcHBvcnR1bml0aWVzLCBteSBpbmJveCBpcyBhbHdheXNcclxuICAgICAgICAgIG9wZW4uIFdoZXRoZXIgeW91IGhhdmUgYSBxdWVzdGlvbiBvciBqdXN0IHdhbnQgdG8gc2F5IGhpLCBJJmFwb3M7bGxcclxuICAgICAgICAgIHRyeSBteSBiZXN0IHRvIGdldCBiYWNrIHRvIHlvdSFcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxzIGZsZXggZmxleC1yb3cgZ2FwLTJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRG9QaHVjMjJcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvZ2l0aHViLWljb24uc3ZnXCJ9IHdpZHRoPXs2MH0gaGVpZ2h0PXs1MH0gYWx0PVwiR2l0aHViIEljb25cIiAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZW1haWxTdWJtaXR0ZWQgPyAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCB0ZXh0LXNtIG10LTJcIj5cclxuICAgICAgICAgICAgRW1haWwgc2VudCBzdWNjZXNzZnVsbHkhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFlvdXIgZW1haWxcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzE4MTkxRV0gYm9yZGVyIGJvcmRlci1bIzMzMzUzRl0gcGxhY2Vob2xkZXItWyM5Q0EyQTldIHRleHQtZ3JheS0xMDAgdGV4dC1zbSByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTIuNVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImV4YW1wbGVAZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwic3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJsb2NrIHRleHQtc20gbWItMiBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU3ViamVjdFxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMTgxOTFFXSBib3JkZXIgYm9yZGVyLVsjMzMzNTNGXSBwbGFjZWhvbGRlci1bIzlDQTJBOV0gdGV4dC1ncmF5LTEwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtMi41XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSnVzdCBzYXlpbmcgaGlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmxvY2sgdGV4dC1zbSBtYi0yIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzE4MTkxRV0gYm9yZGVyIGJvcmRlci1bIzMzMzUzRl0gcGxhY2Vob2xkZXItWyM5Q0EyQTldIHRleHQtZ3JheS0xMDAgdGV4dC1zbSByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTIuNVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxldCdzIHRhbGsgYWJvdXQuLi5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBweS0yLjUgcHgtNSByb3VuZGVkLWxnIHctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsU2VjdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJFbWFpbFNlY3Rpb24iLCJlbWFpbFN1Ym1pdHRlZCIsInNldEVtYWlsU3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJqZWN0IiwibWVzc2FnZSIsIkpTT05kYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuZHBvaW50Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc0RhdGEiLCJqc29uIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsImg1IiwicCIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/EmailSection.tsx\n"));

/***/ })

});