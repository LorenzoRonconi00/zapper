"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/liked/page",{

/***/ "(app-pages-browser)/./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/lib/tw-merge.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./components/Button.tsx\");\n/* harmony import */ var _hooks_useAuthModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useAuthModal */ \"(app-pages-browser)/./hooks/useAuthModal.ts\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"(app-pages-browser)/./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useUser */ \"(app-pages-browser)/./hooks/useUser.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { children, className } = param;\n    _s();\n    const authModal = (0,_hooks_useAuthModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__.useSupabaseClient)();\n    const { user } = (0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_6__.useUser)();\n    const handleLogout = async ()=>{\n        const { error } = await supabaseClient.auth.signOut();\n        //reset song\n        router.refresh();\n        if (error) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.error(error.message);\n        } else {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success(\"Logout eseguito correttamente\");\n        }\n    };\n    const handleHomeClick = ()=>{\n        router.push(\"/\");\n    };\n    const handleSearchClick = ()=>{\n        router.push(\"/search\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_8__.twMerge)(\"\\n            h-fit\\n            bg-gradient-to-b\\n            from-cyan-700\\n            p-6\\n        \", className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full mb-4 flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex gap-x-2 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"rounded-full bg-black flex items-center justify-center hover:opacity-75 transition\",\n                                onClick: ()=>router.back(),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_9__.RxCaretLeft, {\n                                    size: 35,\n                                    className: \"text-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"rounded-full bg-black flex items-center justify-center hover:opacity-75 transition\",\n                                onClick: ()=>router.forward(),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_9__.RxCaretRight, {\n                                    size: 35,\n                                    className: \"text-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex md:hidden gap-x-2 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleHomeClick,\n                                className: \"rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_10__.HiHome, {\n                                    className: \"text-black\",\n                                    size: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSearchClick,\n                                className: \"rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_11__.BiSearch, {\n                                    className: \"text-black\",\n                                    size: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center gap-x-4\",\n                        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-x-4 items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: handleLogout,\n                                className: \"bg-white px-6 py-2\",\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 25\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        onClick: authModal.onOpen,\n                                        className: \"bg-transparent text-neutral-300 font-medium\",\n                                        children: \"Iscriviti\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        onClick: authModal.onOpen,\n                                        className: \"bg-white px-6 py-2\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/Header.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"4lWSgvrkwis/pwiOp3JvLrdUWKw=\", false, function() {\n    return [\n        _hooks_useAuthModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_5__.useSupabaseClient,\n        _hooks_useUser__WEBPACK_IMPORTED_MODULE_6__.useUser\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUM7QUFDRztBQUNhO0FBQ25CO0FBQ0M7QUFDYjtBQUNJO0FBQ2tCO0FBQ2U7QUFDckI7QUFDSjtBQU90QyxNQUFNWSxTQUFnQztRQUFDLEVBQ25DQyxRQUFRLEVBQ1JDLFNBQVMsRUFDWjs7SUFDRyxNQUFNQyxZQUFZUCwrREFBWUE7SUFDOUIsTUFBTVEsU0FBU2YsMERBQVNBO0lBRXhCLE1BQU1nQixpQkFBaUJSLCtFQUFpQkE7SUFDeEMsTUFBTSxFQUFDUyxJQUFJLEVBQUMsR0FBR1IsdURBQU9BO0lBRXRCLE1BQU1TLGVBQWU7UUFDakIsTUFBTSxFQUFDQyxLQUFLLEVBQUMsR0FBRyxNQUFNSCxlQUFlSSxJQUFJLENBQUNDLE9BQU87UUFDakQsWUFBWTtRQUNaTixPQUFPTyxPQUFPO1FBRWQsSUFBR0gsT0FBTTtZQUNMVCxrREFBS0EsQ0FBQ1MsS0FBSyxDQUFDQSxNQUFNSSxPQUFPO1FBQzdCLE9BQUs7WUFDRGIsa0RBQUtBLENBQUNjLE9BQU8sQ0FBQztRQUNsQjtJQUNKO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3BCVixPQUFPVyxJQUFJLENBQUM7SUFDaEI7SUFFQSxNQUFNQyxvQkFBb0I7UUFDdEJaLE9BQU9XLElBQUksQ0FBQztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDRTtRQUFJZixXQUFXZCx1REFBT0EsQ0FBRSwyR0FNckJjOzswQkFFQSw4REFBQ2U7Z0JBQUlmLFdBQVU7O2tDQUNYLDhEQUFDZTt3QkFBSWYsV0FBVTs7MENBQ1gsOERBQUNnQjtnQ0FDRGhCLFdBQVU7Z0NBQ1ZpQixTQUFTLElBQU1mLE9BQU9nQixJQUFJOzBDQUN0Qiw0RUFBQzlCLHVEQUFXQTtvQ0FBQytCLE1BQU07b0NBQUluQixXQUFVOzs7Ozs7Ozs7OzswQ0FFckMsOERBQUNnQjtnQ0FDRGhCLFdBQVU7Z0NBQ1ZpQixTQUFTLElBQU1mLE9BQU9rQixPQUFPOzBDQUN6Qiw0RUFBQy9CLHdEQUFZQTtvQ0FBQzhCLE1BQU07b0NBQUluQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHMUMsOERBQUNlO3dCQUFJZixXQUFVOzswQ0FDWCw4REFBQ2dCO2dDQUNEQyxTQUFTTDtnQ0FDVFosV0FBVTswQ0FDTiw0RUFBQ1YsbURBQU1BO29DQUFDVSxXQUFVO29DQUFhbUIsTUFBTTs7Ozs7Ozs7Ozs7MENBRXpDLDhEQUFDSDtnQ0FDREMsU0FBU0g7Z0NBQ1RkLFdBQVU7MENBQ04sNEVBQUNULHFEQUFRQTtvQ0FBQ1MsV0FBVTtvQ0FBYW1CLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUcvQyw4REFBQ0o7d0JBQUlmLFdBQVU7a0NBQ1ZJLHFCQUNHLDhEQUFDVzs0QkFBSWYsV0FBVTtzQ0FDWCw0RUFBQ1AsK0NBQU1BO2dDQUNQd0IsU0FBU1o7Z0NBQ1RMLFdBQVU7MENBQXFCOzs7Ozs7Ozs7O3NEQU1uQzs7OENBQ0ksOERBQUNlOzhDQUNHLDRFQUFDdEIsK0NBQU1BO3dDQUNQd0IsU0FBU2hCLFVBQVVvQixNQUFNO3dDQUN6QnJCLFdBQVU7a0RBQThDOzs7Ozs7Ozs7Ozs4Q0FJNUQsOERBQUNlOzhDQUNHLDRFQUFDdEIsK0NBQU1BO3dDQUNQd0IsU0FBU2hCLFVBQVVvQixNQUFNO3dDQUN6QnJCLFdBQVU7a0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRbEREOzs7Ozs7O0FBR2I7R0FqR01EOztRQUlnQkosMkRBQVlBO1FBQ2ZQLHNEQUFTQTtRQUVEUSwyRUFBaUJBO1FBQ3pCQyxtREFBT0E7OztLQVJwQkU7QUFtR04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4PzAzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7UnhDYXJldExlZnQsIFJ4Q2FyZXRSaWdodH0gZnJvbSBcInJlYWN0LWljb25zL3J4XCI7XG5pbXBvcnQge0hpSG9tZX0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5pbXBvcnQge0JpU2VhcmNofSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCB1c2VBdXRoTW9kYWwgZnJvbSBcIkAvaG9va3MvdXNlQXV0aE1vZGFsXCI7XG5pbXBvcnQge3VzZVN1cGFiYXNlQ2xpZW50fSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJAL2hvb2tzL3VzZVVzZXJcIjtcbmltcG9ydCB7dG9hc3R9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuaW50ZXJmYWNlIEhlYWRlclByb3Bze1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPEhlYWRlclByb3BzPiA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lXG59KSA9PiB7XG4gICAgY29uc3QgYXV0aE1vZGFsID0gdXNlQXV0aE1vZGFsKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBzdXBhYmFzZUNsaWVudCA9IHVzZVN1cGFiYXNlQ2xpZW50KCk7XG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlVXNlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7ZXJyb3J9ID0gYXdhaXQgc3VwYWJhc2VDbGllbnQuYXV0aC5zaWduT3V0KCk7XG4gICAgICAgIC8vcmVzZXQgc29uZ1xuICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xuXG4gICAgICAgIGlmKGVycm9yKXtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ0xvZ291dCBlc2VndWl0byBjb3JyZXR0YW1lbnRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVIb21lQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvc2VhcmNoJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHdNZXJnZShgXG4gICAgICAgICAgICBoLWZpdFxuICAgICAgICAgICAgYmctZ3JhZGllbnQtdG8tYlxuICAgICAgICAgICAgZnJvbS1jeWFuLTcwMFxuICAgICAgICAgICAgcC02XG4gICAgICAgIGAsXG4gICAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggZ2FwLXgtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWJsYWNrIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJ4Q2FyZXRMZWZ0IHNpemU9ezM1fSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWJsYWNrIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5mb3J3YXJkKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJ4Q2FyZXRSaWdodCBzaXplPXszNX0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOmhpZGRlbiBnYXAteC0yIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVIb21lQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBwLTIgYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6b3BhY2l0eS03NSB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlIb21lIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiBzaXplPXsyMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNoQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBwLTIgYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6b3BhY2l0eS03NSB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmlTZWFyY2ggY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIHNpemU9ezIwfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAge3VzZXI/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtNiBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXV0aE1vZGFsLm9uT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1uZXV0cmFsLTMwMCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXNjcml2aXRpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2F1dGhNb2RhbC5vbk9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTYgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbInR3TWVyZ2UiLCJ1c2VSb3V0ZXIiLCJSeENhcmV0TGVmdCIsIlJ4Q2FyZXRSaWdodCIsIkhpSG9tZSIsIkJpU2VhcmNoIiwiUmVhY3QiLCJCdXR0b24iLCJ1c2VBdXRoTW9kYWwiLCJ1c2VTdXBhYmFzZUNsaWVudCIsInVzZVVzZXIiLCJ0b2FzdCIsIkhlYWRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYXV0aE1vZGFsIiwicm91dGVyIiwic3VwYWJhc2VDbGllbnQiLCJ1c2VyIiwiaGFuZGxlTG9nb3V0IiwiZXJyb3IiLCJhdXRoIiwic2lnbk91dCIsInJlZnJlc2giLCJtZXNzYWdlIiwic3VjY2VzcyIsImhhbmRsZUhvbWVDbGljayIsInB1c2giLCJoYW5kbGVTZWFyY2hDbGljayIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwic2l6ZSIsImZvcndhcmQiLCJvbk9wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.tsx\n"));

/***/ })

});