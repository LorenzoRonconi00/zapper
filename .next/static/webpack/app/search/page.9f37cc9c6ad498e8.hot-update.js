"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-pages-browser)/./components/LikeButton.tsx":
/*!***********************************!*\
  !*** ./components/LikeButton.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"(app-pages-browser)/./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useAuthModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useAuthModal */ \"(app-pages-browser)/./hooks/useAuthModal.ts\");\n/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useUser */ \"(app-pages-browser)/./hooks/useUser.tsx\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LikeButton = (param)=>{\n    let { songId } = param;\n    var _user;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { supabaseClient } = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSessionContext)();\n    const authModal = (0,_hooks_useAuthModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { user } = (0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__.useUser)();\n    const [isLiked, setIsLiked] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        var _user;\n        if (!((_user = user) === null || _user === void 0 ? void 0 : _user.id)) {\n            return;\n        }\n        const fetchData = async ()=>{\n            const { data, error } = await supabaseClient.from(\"liked_songs\").select(\"*\").eq(\"user_id\", user.id).eq(\"song_id\", songId).single();\n            if (!error && data) {\n                setIsLiked(true);\n            }\n        };\n        fetchData();\n    }, [\n        songId,\n        supabaseClient,\n        (_user = user) === null || _user === void 0 ? void 0 : _user.id\n    ]);\n    const Icon = isLiked ? react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillHeart : react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineHeart;\n    const handleLike = async ()=>{\n        if (!user) {\n            return authModal.onOpen();\n        }\n        if (isLiked) {\n            const { error } = await supabaseClient.from(\"liked_songs\").delete().eq(\"user_id\", user.id).eq(\"song_id\", songId);\n            if (error) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(error.message);\n            } else {\n                setIsLiked(false);\n            }\n        } else {\n            const { error } = await supabaseClient.from(\"liked_songs\").insert({\n                song_id: songId,\n                user_id: user.id\n            });\n            if (error) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.error(error.message);\n            } else {\n                setIsLiked(true);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Like\");\n            }\n        }\n        router.refresh();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleLike,\n        className: \"hover:opacity-75 transition\",\n        style: {\n            zIndex: 2\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n            color: isLiked ? \"#22c55e\" : \"white\",\n            size: 25\n        }, void 0, false, {\n            fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/LikeButton.tsx\",\n            lineNumber: 93,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/LikeButton.tsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LikeButton, \"4aGUMa/2qZaNngiAvaB2GVTmiTs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSessionContext,\n        _hooks_useAuthModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _hooks_useUser__WEBPACK_IMPORTED_MODULE_5__.useUser\n    ];\n});\n_c = LikeButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LikeButton);\nvar _c;\n$RefreshReg$(_c, \"LikeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGlrZUJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDbUI7QUFDWjtBQUNIO0FBQ047QUFDaUI7QUFDckI7QUFNdEMsTUFBTVUsYUFBd0M7UUFBQyxFQUMzQ0MsTUFBTSxFQUNUO1FBNEIrQkM7O0lBM0I1QixNQUFNQyxTQUFTYiwwREFBU0E7SUFDeEIsTUFBTSxFQUFDYyxjQUFjLEVBQUMsR0FBR2IsK0VBQWlCQTtJQUUxQyxNQUFNYyxZQUFZViwrREFBWUE7SUFDOUIsTUFBTSxFQUFDTyxJQUFJLEVBQUMsR0FBR04sdURBQU9BO0lBRXRCLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7WUFDRlM7UUFBSixJQUFHLEdBQUNBLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTU0sRUFBRSxHQUFDO1lBQ1Q7UUFDSjtRQUVBLE1BQU1DLFlBQVk7WUFDZCxNQUFNLEVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFDLEdBQUcsTUFBTVAsZUFDdkJRLElBQUksQ0FBQyxlQUNMQyxNQUFNLENBQUMsS0FDUEMsRUFBRSxDQUFDLFdBQVdaLEtBQUtNLEVBQUUsRUFDckJNLEVBQUUsQ0FBQyxXQUFXYixRQUNkYyxNQUFNO1lBRVgsSUFBRyxDQUFDSixTQUFTRCxNQUFLO2dCQUNkSCxXQUFXO1lBQ2Y7UUFDSjtRQUVBRTtJQUNKLEdBQUc7UUFBQ1I7UUFBUUc7U0FBZ0JGLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTU0sRUFBRTtLQUFDO0lBRXJDLE1BQU1RLE9BQU9WLFVBQVVULHVEQUFXQSxHQUFHQywwREFBY0E7SUFFbkQsTUFBTW1CLGFBQWE7UUFDZixJQUFHLENBQUNmLE1BQUs7WUFDTCxPQUFPRyxVQUFVYSxNQUFNO1FBQzNCO1FBRUEsSUFBR1osU0FBUTtZQUNQLE1BQU0sRUFBQ0ssS0FBSyxFQUFDLEdBQUcsTUFBTVAsZUFDakJRLElBQUksQ0FBQyxlQUNMTyxNQUFNLEdBQ05MLEVBQUUsQ0FBQyxXQUFXWixLQUFLTSxFQUFFLEVBQ3JCTSxFQUFFLENBQUMsV0FBV2I7WUFFbkIsSUFBR1UsT0FBTTtnQkFDTFosa0RBQUtBLENBQUNZLEtBQUssQ0FBQ0EsTUFBTVMsT0FBTztZQUM3QixPQUNJO2dCQUNBYixXQUFXO1lBQ2Y7UUFDSixPQUNJO1lBQ0EsTUFBTSxFQUFDSSxLQUFLLEVBQUMsR0FBRyxNQUFNUCxlQUNqQlEsSUFBSSxDQUFDLGVBQ0xTLE1BQU0sQ0FBQztnQkFDSkMsU0FBU3JCO2dCQUNUc0IsU0FBU3JCLEtBQUtNLEVBQUU7WUFDcEI7WUFFSixJQUFHRyxPQUFNO2dCQUNMWixrREFBS0EsQ0FBQ1ksS0FBSyxDQUFDQSxNQUFNUyxPQUFPO1lBQzdCLE9BQ0k7Z0JBQ0FiLFdBQVc7Z0JBQ1hSLGtEQUFLQSxDQUFDeUIsT0FBTyxDQUFDO1lBQ2xCO1FBQ0o7UUFFQXJCLE9BQU9zQixPQUFPO0lBQ2xCO0lBRUEscUJBQ0ksOERBQUNDO1FBQ0RDLFNBQVNWO1FBQ1RXLFdBQVU7UUFDVkMsT0FBTztZQUFDQyxRQUFRO1FBQUM7a0JBQ2IsNEVBQUNkO1lBQUtlLE9BQU96QixVQUFVLFlBQVk7WUFBUzBCLE1BQU07Ozs7Ozs7Ozs7O0FBRzlEO0dBakZNaEM7O1FBR2FWLHNEQUFTQTtRQUNDQywyRUFBaUJBO1FBRXhCSSwyREFBWUE7UUFDZkMsbURBQU9BOzs7S0FQcEJJO0FBbUZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlrZUJ1dHRvbi50c3g/YWUzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHt1c2VTZXNzaW9uQ29udGV4dH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlQXV0aE1vZGFsIGZyb20gXCJAL2hvb2tzL3VzZUF1dGhNb2RhbFwiO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCJAL2hvb2tzL3VzZVVzZXJcIjtcbmltcG9ydCB7QWlGaWxsSGVhcnQsIEFpT3V0bGluZUhlYXJ0fSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7dG9hc3R9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuaW50ZXJmYWNlIExpa2VCdXR0b25Qcm9wc3tcbiAgICBzb25nSWQ6IHN0cmluZztcbn1cblxuY29uc3QgTGlrZUJ1dHRvbjogUmVhY3QuRkM8TGlrZUJ1dHRvblByb3BzPiA9ICh7XG4gICAgc29uZ0lkXG59KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3Qge3N1cGFiYXNlQ2xpZW50fSA9IHVzZVNlc3Npb25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBhdXRoTW9kYWwgPSB1c2VBdXRoTW9kYWwoKTtcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VVc2VyKCk7XG5cbiAgICBjb25zdCBbaXNMaWtlZCwgc2V0SXNMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZighdXNlcj8uaWQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IGF3YWl0IHN1cGFiYXNlQ2xpZW50XG4gICAgICAgICAgICAgICAgLmZyb20oJ2xpa2VkX3NvbmdzJylcbiAgICAgICAgICAgICAgICAuc2VsZWN0KCcqJylcbiAgICAgICAgICAgICAgICAuZXEoJ3VzZXJfaWQnLCB1c2VyLmlkKVxuICAgICAgICAgICAgICAgIC5lcSgnc29uZ19pZCcsIHNvbmdJZClcbiAgICAgICAgICAgICAgICAuc2luZ2xlKCk7XG5cbiAgICAgICAgICAgIGlmKCFlcnJvciAmJiBkYXRhKXtcbiAgICAgICAgICAgICAgICBzZXRJc0xpa2VkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtzb25nSWQsIHN1cGFiYXNlQ2xpZW50LCB1c2VyPy5pZF0pO1xuXG4gICAgY29uc3QgSWNvbiA9IGlzTGlrZWQgPyBBaUZpbGxIZWFydCA6IEFpT3V0bGluZUhlYXJ0O1xuXG4gICAgY29uc3QgaGFuZGxlTGlrZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYoIXVzZXIpe1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhNb2RhbC5vbk9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzTGlrZWQpe1xuICAgICAgICAgICAgY29uc3Qge2Vycm9yfSA9IGF3YWl0IHN1cGFiYXNlQ2xpZW50XG4gICAgICAgICAgICAgICAgLmZyb20oJ2xpa2VkX3NvbmdzJylcbiAgICAgICAgICAgICAgICAuZGVsZXRlKClcbiAgICAgICAgICAgICAgICAuZXEoJ3VzZXJfaWQnLCB1c2VyLmlkKVxuICAgICAgICAgICAgICAgIC5lcSgnc29uZ19pZCcsIHNvbmdJZCk7XG5cbiAgICAgICAgICAgIGlmKGVycm9yKXtcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgc2V0SXNMaWtlZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IHtlcnJvcn0gPSBhd2FpdCBzdXBhYmFzZUNsaWVudFxuICAgICAgICAgICAgICAgIC5mcm9tKCdsaWtlZF9zb25ncycpXG4gICAgICAgICAgICAgICAgLmluc2VydCh7XG4gICAgICAgICAgICAgICAgICAgIHNvbmdfaWQ6IHNvbmdJZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlci5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihlcnJvcil7XG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHNldElzTGlrZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnTGlrZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpa2V9XG4gICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvblwiXG4gICAgICAgIHN0eWxlPXt7ekluZGV4OiAyfX0+XG4gICAgICAgICAgICA8SWNvbiBjb2xvcj17aXNMaWtlZCA/ICcjMjJjNTVlJyA6ICd3aGl0ZSd9IHNpemU9ezI1fS8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpa2VCdXR0b247Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNlc3Npb25Db250ZXh0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUF1dGhNb2RhbCIsInVzZVVzZXIiLCJBaUZpbGxIZWFydCIsIkFpT3V0bGluZUhlYXJ0IiwidG9hc3QiLCJMaWtlQnV0dG9uIiwic29uZ0lkIiwidXNlciIsInJvdXRlciIsInN1cGFiYXNlQ2xpZW50IiwiYXV0aE1vZGFsIiwiaXNMaWtlZCIsInNldElzTGlrZWQiLCJpZCIsImZldGNoRGF0YSIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJlcSIsInNpbmdsZSIsIkljb24iLCJoYW5kbGVMaWtlIiwib25PcGVuIiwiZGVsZXRlIiwibWVzc2FnZSIsImluc2VydCIsInNvbmdfaWQiLCJ1c2VyX2lkIiwic3VjY2VzcyIsInJlZnJlc2giLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ6SW5kZXgiLCJjb2xvciIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LikeButton.tsx\n"));

/***/ })

});