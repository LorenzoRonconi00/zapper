"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"be1de9f94864\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzgyYjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiZTFkZTlmOTQ4NjRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/PlayerContent.tsx":
/*!**************************************!*\
  !*** ./components/PlayerContent.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LikeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LikeButton */ \"(app-pages-browser)/./components/LikeButton.tsx\");\n/* harmony import */ var _MediaItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MediaItem */ \"(app-pages-browser)/./components/MediaItem.tsx\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi2 */ \"(app-pages-browser)/./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slider */ \"(app-pages-browser)/./components/Slider.tsx\");\n/* harmony import */ var _hooks_usePlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/usePlayer */ \"(app-pages-browser)/./hooks/usePlayer.ts\");\n/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-sound */ \"(app-pages-browser)/./node_modules/use-sound/dist/use-sound.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PlayerContent = (param)=>{\n    let { song, songUrl } = param;\n    _s();\n    const player = (0,_hooks_usePlayer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [volume, setVolume] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const Icon = isPlaying ? react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsPauseFill : react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsPlayFill;\n    const VolumeIcon = volume === 0 ? react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__.HiSpeakerXMark : react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__.HiSpeakerWave;\n    const onPlayNext = ()=>{\n        if (player.ids.length === 0) {\n            return;\n        }\n        const currentIndex = player.ids.findIndex((id)=>id === player.activeId);\n        const nextSong = player.ids[currentIndex + 1];\n        //if last song restart with the first song\n        if (!nextSong) {\n            return player.setId(player.ids[0]);\n        }\n        player.setId(nextSong);\n    };\n    const onPlayPrevious = ()=>{\n        if (player.ids.length === 0) {\n            return;\n        }\n        const currentIndex = player.ids.findIndex((id)=>id === player.activeId);\n        const previousSong = player.ids[currentIndex - 1];\n        //if first song play the last song\n        if (!previousSong) {\n            return player.setId(player.ids[player.ids.length - 1]);\n        }\n        player.setId(previousSong);\n    };\n    const [play, { pause, sound }] = (0,use_sound__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(songUrl, {\n        volume: volume,\n        onplay: ()=>setIsPlaying(true),\n        onend: ()=>{\n            setIsPlaying(false), onPlayNext();\n        },\n        onpause: ()=>setIsPlaying(false),\n        format: [\n            \"mp3\"\n        ]\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _sound;\n        (_sound = sound) === null || _sound === void 0 ? void 0 : _sound.play();\n        return ()=>{\n            var _sound;\n            (_sound = sound) === null || _sound === void 0 ? void 0 : _sound.unload();\n        };\n    }, [\n        sound\n    ]);\n    const handlePlay = ()=>{\n        if (!isPlaying) {\n            play();\n        } else {\n            pause();\n        }\n    };\n    const toggleMute = ()=>{\n        if (volume === 0) {\n            setVolume(1);\n        } else {\n            setVolume(0);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 md:grid-cols-3 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-x-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MediaItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: song\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikeButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            songId: song.id\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex md:hidden col-auto w-full justify-end items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handlePlay,\n                    className: \"h-7 w-7 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                        size: 30,\n                        className: \"text-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillStepBackward, {\n                        onClick: onPlayPrevious,\n                        size: 30,\n                        className: \"text-neutral-400 cursor-pointer hover:text-white transition\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handlePlay,\n                        className: \"flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            size: 30,\n                            className: \"text-black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillStepForward, {\n                        onClick: onPlayNext,\n                        size: 30,\n                        className: \"text-neutral-400 cursor-pointer hover:text-white transition\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex w-full justify-end pr-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-x-2 w-[120px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VolumeIcon, {\n                            onClick: toggleMute,\n                            className: \"cursor-pointer\",\n                            size: 34\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: volume,\n                            onChange: (value)=>setVolume(value)\n                        }, void 0, false, {\n                            fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n                lineNumber: 140,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorenzoronconi/Desktop/frankfy/components/PlayerContent.tsx\",\n        lineNumber: 104,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlayerContent, \"e9+TJTcTEdIf6bpQa7zo1/knYk4=\", false, function() {\n    return [\n        _hooks_usePlayer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        use_sound__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = PlayerContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerContent);\nvar _c;\n$RefreshReg$(_c, \"PlayerContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGxheWVyQ29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHbUQ7QUFDYjtBQUNGO0FBQ21CO0FBQ2M7QUFDUDtBQUNoQztBQUNZO0FBQ1Q7QUFPakMsTUFBTWMsZ0JBQThDO1FBQUMsRUFDakRDLElBQUksRUFDSkMsT0FBTyxFQUNWOztJQUNHLE1BQU1DLFNBQVNMLDREQUFTQTtJQUN4QixNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2tCLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ29CLGFBQWFDLGVBQWUsR0FBR3JCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1zQixPQUFPSixZQUFZZix1REFBV0EsR0FBR0Msc0RBQVVBO0lBQ2pELE1BQU1tQixhQUFhUCxXQUFXLElBQUlULDJEQUFjQSxHQUFHQywwREFBYUE7SUFFaEUsTUFBTWdCLGFBQWE7UUFDZixJQUFHVCxPQUFPVSxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFFO1lBQ3ZCO1FBQ0o7UUFFQSxNQUFNQyxlQUFlWixPQUFPVSxHQUFHLENBQUNHLFNBQVMsQ0FBQyxDQUFDQyxLQUFPQSxPQUFPZCxPQUFPZSxRQUFRO1FBQ3hFLE1BQU1DLFdBQVdoQixPQUFPVSxHQUFHLENBQUNFLGVBQWUsRUFBRTtRQUU3QywwQ0FBMEM7UUFDMUMsSUFBRyxDQUFDSSxVQUFTO1lBQ1QsT0FBT2hCLE9BQU9pQixLQUFLLENBQUNqQixPQUFPVSxHQUFHLENBQUMsRUFBRTtRQUNyQztRQUVBVixPQUFPaUIsS0FBSyxDQUFDRDtJQUNqQjtJQUVBLE1BQU1FLGlCQUFpQjtRQUNuQixJQUFHbEIsT0FBT1UsR0FBRyxDQUFDQyxNQUFNLEtBQUssR0FBRTtZQUN2QjtRQUNKO1FBRUEsTUFBTUMsZUFBZVosT0FBT1UsR0FBRyxDQUFDRyxTQUFTLENBQUMsQ0FBQ0MsS0FBT0EsT0FBT2QsT0FBT2UsUUFBUTtRQUN4RSxNQUFNSSxlQUFlbkIsT0FBT1UsR0FBRyxDQUFDRSxlQUFlLEVBQUU7UUFFakQsa0NBQWtDO1FBQ2xDLElBQUcsQ0FBQ08sY0FBYTtZQUNiLE9BQU9uQixPQUFPaUIsS0FBSyxDQUFDakIsT0FBT1UsR0FBRyxDQUFDVixPQUFPVSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFO1FBQ3pEO1FBRUFYLE9BQU9pQixLQUFLLENBQUNFO0lBQ2pCO0lBRUEsTUFBTSxDQUFDQyxNQUFNLEVBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFDLENBQUMsR0FBRzFCLHFEQUFRQSxDQUNuQ0csU0FDQTtRQUNJRSxRQUFRQTtRQUNSc0IsUUFBUSxJQUFNbkIsYUFBYTtRQUMzQm9CLE9BQU87WUFDSHBCLGFBQWEsUUFDYks7UUFDSjtRQUNBZ0IsU0FBUyxJQUFNckIsYUFBYTtRQUM1QnNCLFFBQVE7WUFBQztTQUFNO0lBQ25CO0lBR0oxQyxnREFBU0EsQ0FBQztZQUNOc0M7U0FBQUEsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPRixJQUFJO1FBRVgsT0FBTTtnQkFDRkU7YUFBQUEsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPSyxNQUFNO1FBQ2pCO0lBQ0osR0FBRztRQUFDTDtLQUFNO0lBRVYsTUFBTU0sYUFBYTtRQUNmLElBQUcsQ0FBQ3pCLFdBQVU7WUFDVmlCO1FBQ0osT0FDSTtZQUNBQztRQUNKO0lBQ0o7SUFFQSxNQUFNUSxhQUFhO1FBQ2YsSUFBRzVCLFdBQVcsR0FBRTtZQUNaQyxVQUFVO1FBQ2QsT0FDSTtZQUNBQSxVQUFVO1FBQ2Q7SUFDSjtJQUVBLHFCQUNJLDhEQUFDNEI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUM1QyxrREFBU0E7NEJBQUM2QyxNQUFNbEM7Ozs7OztzQ0FDakIsOERBQUNaLG1EQUFVQTs0QkFBQytDLFFBQVFuQyxLQUFLZ0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSW5DLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUNESSxTQUFTTjtvQkFDVEcsV0FBVTs4QkFFTiw0RUFBQ3hCO3dCQUFLNEIsTUFBTTt3QkFBSUosV0FBVTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ3pDLDhEQUFrQkE7d0JBQ25CNEMsU0FBU2hCO3dCQUNUaUIsTUFBTTt3QkFDTkosV0FBVTs7Ozs7O2tDQUVWLDhEQUFDRDt3QkFDREksU0FBU047d0JBQ1RHLFdBQVU7a0NBRU4sNEVBQUN4Qjs0QkFBSzRCLE1BQU07NEJBQUlKLFdBQVU7Ozs7Ozs7Ozs7O2tDQUU5Qiw4REFBQ3hDLDZEQUFpQkE7d0JBQ2xCMkMsU0FBU3pCO3dCQUNUMEIsTUFBTTt3QkFDTkosV0FBVTs7Ozs7Ozs7Ozs7OzBCQUlkLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDdkI7NEJBQ0QwQixTQUFTTDs0QkFDVEUsV0FBVTs0QkFDVkksTUFBTTs7Ozs7O3NDQUVOLDhEQUFDekMsK0NBQU1BOzRCQUNQMEMsT0FBT25DOzRCQUNQb0MsVUFBVSxDQUFDRCxRQUFVbEMsVUFBVWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRDtHQTFJTXZDOztRQUlhRix3REFBU0E7UUF3Q09DLGlEQUFRQTs7O0tBNUNyQ0M7QUE0SU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXJDb250ZW50LnRzeD9iNDUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlrZUJ1dHRvbiBmcm9tIFwiLi9MaWtlQnV0dG9uXCI7XG5pbXBvcnQgTWVkaWFJdGVtIGZyb20gXCIuL01lZGlhSXRlbVwiO1xuaW1wb3J0IHtCc1BhdXNlRmlsbCwgQnNQbGF5RmlsbH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQge0FpRmlsbFN0ZXBCYWNrd2FyZCwgQWlGaWxsU3RlcEZvcndhcmR9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHtIaVNwZWFrZXJYTWFyaywgSGlTcGVha2VyV2F2ZX0gZnJvbSBcInJlYWN0LWljb25zL2hpMlwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9TbGlkZXJcIjtcbmltcG9ydCB1c2VQbGF5ZXIgZnJvbSBcIkAvaG9va3MvdXNlUGxheWVyXCI7XG5pbXBvcnQgdXNlU291bmQgZnJvbSBcInVzZS1zb3VuZFwiO1xuXG5pbnRlcmZhY2UgUGxheWVyQ29udGVudFByb3Bze1xuICAgIHNvbmc6IFNvbmc7XG4gICAgc29uZ1VybDogc3RyaW5nO1xufVxuXG5jb25zdCBQbGF5ZXJDb250ZW50OiBSZWFjdC5GQzxQbGF5ZXJDb250ZW50UHJvcHM+ID0gKHtcbiAgICBzb25nLFxuICAgIHNvbmdVcmxcbn0pID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB1c2VQbGF5ZXIoKTtcbiAgICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgSWNvbiA9IGlzUGxheWluZyA/IEJzUGF1c2VGaWxsIDogQnNQbGF5RmlsbDtcbiAgICBjb25zdCBWb2x1bWVJY29uID0gdm9sdW1lID09PSAwID8gSGlTcGVha2VyWE1hcmsgOiBIaVNwZWFrZXJXYXZlXG5cbiAgICBjb25zdCBvblBsYXlOZXh0ID0gKCkgPT4ge1xuICAgICAgICBpZihwbGF5ZXIuaWRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwbGF5ZXIuaWRzLmZpbmRJbmRleCgoaWQpID0+IGlkID09PSBwbGF5ZXIuYWN0aXZlSWQpO1xuICAgICAgICBjb25zdCBuZXh0U29uZyA9IHBsYXllci5pZHNbY3VycmVudEluZGV4ICsgMV07XG5cbiAgICAgICAgLy9pZiBsYXN0IHNvbmcgcmVzdGFydCB3aXRoIHRoZSBmaXJzdCBzb25nXG4gICAgICAgIGlmKCFuZXh0U29uZyl7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyLnNldElkKHBsYXllci5pZHNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLnNldElkKG5leHRTb25nKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblBsYXlQcmV2aW91cyA9ICgpID0+IHtcbiAgICAgICAgaWYocGxheWVyLmlkcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcGxheWVyLmlkcy5maW5kSW5kZXgoKGlkKSA9PiBpZCA9PT0gcGxheWVyLmFjdGl2ZUlkKTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNTb25nID0gcGxheWVyLmlkc1tjdXJyZW50SW5kZXggLSAxXTtcblxuICAgICAgICAvL2lmIGZpcnN0IHNvbmcgcGxheSB0aGUgbGFzdCBzb25nXG4gICAgICAgIGlmKCFwcmV2aW91c1Nvbmcpe1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5zZXRJZChwbGF5ZXIuaWRzW3BsYXllci5pZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLnNldElkKHByZXZpb3VzU29uZyk7XG4gICAgfVxuXG4gICAgY29uc3QgW3BsYXksIHtwYXVzZSwgc291bmR9XSA9IHVzZVNvdW5kKFxuICAgICAgICBzb25nVXJsLFxuICAgICAgICB7XG4gICAgICAgICAgICB2b2x1bWU6IHZvbHVtZSxcbiAgICAgICAgICAgIG9ucGxheTogKCkgPT4gc2V0SXNQbGF5aW5nKHRydWUpLFxuICAgICAgICAgICAgb25lbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpLFxuICAgICAgICAgICAgICAgIG9uUGxheU5leHQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbnBhdXNlOiAoKSA9PiBzZXRJc1BsYXlpbmcoZmFsc2UpLFxuICAgICAgICAgICAgZm9ybWF0OiBbJ21wMyddXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc291bmQ/LnBsYXkoKTtcblxuICAgICAgICByZXR1cm4oKSA9PiB7XG4gICAgICAgICAgICBzb3VuZD8udW5sb2FkKCk7XG4gICAgICAgIH1cbiAgICB9LCBbc291bmRdKTtcblxuICAgIGNvbnN0IGhhbmRsZVBsYXkgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFpc1BsYXlpbmcpe1xuICAgICAgICAgICAgcGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBwYXVzZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZU11dGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHZvbHVtZSA9PT0gMCl7XG4gICAgICAgICAgICBzZXRWb2x1bWUoMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHNldFZvbHVtZSgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGgtZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYUl0ZW0gZGF0YT17c29uZ30vPlxuICAgICAgICAgICAgICAgICAgICA8TGlrZUJ1dHRvbiBzb25nSWQ9e3NvbmcuaWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6aGlkZGVuIGNvbC1hdXRvIHctZnVsbCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBsYXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC03IHctNyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGxcbiAgICAgICAgICAgICAgICBiZy13aGl0ZSBwLTEgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gc2l6ZT17MzB9IGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaC1mdWxsIG1kOmZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBtYXgtdy1bNzIycHhdIGdhcC14LTZcIj5cbiAgICAgICAgICAgICAgICA8QWlGaWxsU3RlcEJhY2t3YXJkIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUGxheVByZXZpb3VzfVxuICAgICAgICAgICAgICAgIHNpemU9ezMwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUGxheX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEwIHctMTAgcm91bmRlZC1mdWxsXG4gICAgICAgICAgICAgICAgYmctd2hpdGUgcC0xIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9ezMwfSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxBaUZpbGxTdGVwRm9yd2FyZCBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblBsYXlOZXh0fVxuICAgICAgICAgICAgICAgIHNpemU9ezMwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggdy1mdWxsIGp1c3RpZnktZW5kIHByLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTIgdy1bMTIwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxWb2x1bWVJY29uIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNdXRlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezM0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRWb2x1bWUodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDb250ZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlrZUJ1dHRvbiIsIk1lZGlhSXRlbSIsIkJzUGF1c2VGaWxsIiwiQnNQbGF5RmlsbCIsIkFpRmlsbFN0ZXBCYWNrd2FyZCIsIkFpRmlsbFN0ZXBGb3J3YXJkIiwiSGlTcGVha2VyWE1hcmsiLCJIaVNwZWFrZXJXYXZlIiwiU2xpZGVyIiwidXNlUGxheWVyIiwidXNlU291bmQiLCJQbGF5ZXJDb250ZW50Iiwic29uZyIsInNvbmdVcmwiLCJwbGF5ZXIiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiSWNvbiIsIlZvbHVtZUljb24iLCJvblBsYXlOZXh0IiwiaWRzIiwibGVuZ3RoIiwiY3VycmVudEluZGV4IiwiZmluZEluZGV4IiwiaWQiLCJhY3RpdmVJZCIsIm5leHRTb25nIiwic2V0SWQiLCJvblBsYXlQcmV2aW91cyIsInByZXZpb3VzU29uZyIsInBsYXkiLCJwYXVzZSIsInNvdW5kIiwib25wbGF5Iiwib25lbmQiLCJvbnBhdXNlIiwiZm9ybWF0IiwidW5sb2FkIiwiaGFuZGxlUGxheSIsInRvZ2dsZU11dGUiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwic29uZ0lkIiwib25DbGljayIsInNpemUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PlayerContent.tsx\n"));

/***/ })

});