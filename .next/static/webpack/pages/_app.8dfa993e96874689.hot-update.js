"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst { extendTheme  } = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: \"#F6F1F1\"\n            }\n        })\n};\nconst components = {\n    Heading: {\n        whitespace: \"nowrap\",\n        variants: {\n            \"landing-title\": {\n                color: \"#146C94\",\n                textDecoration: \"underline\",\n                fontSize: 40,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#19A7CE\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            },\n            \"landing-mini-title\": {\n                color: \"#146C94\",\n                fontSize: 30,\n                marginTop: 3,\n                marginBottom: 4,\n                borderBottomStyle: \"solid\",\n                borderBottomWidth: \"thick\",\n                borderBottomColor: \"#19A7CE\"\n            }\n        }\n    },\n    Link: {\n        baseStyle: {\n            textDecoration: \"none\",\n            _hover: {\n                textDecoration: \"none\"\n            }\n        },\n        variants: {\n            \"nav-link\": {\n                color: \"#146C94\",\n                fontSize: 20,\n                _hover: {\n                    textDecoration: \"underline\",\n                    textDecorationColor: \"#19A7CE\",\n                    textUnderlineOffset: 6,\n                    textDecorationThickness: 4\n                }\n            }\n        }\n    }\n};\nconst fonts = {\n    heading: \"'Libre Baskerville'\"\n};\nconst theme = extendTheme({\n    styles,\n    components,\n    fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBRUEsWUFBVyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLHVFQUFrQjtBQUVsRCxNQUFNQyxTQUFTO0lBQ2JDLFFBQVEsQ0FBQ0MsUUFBVztZQUNsQkMsTUFBTTtnQkFDSkMsSUFBSTtZQUNOO1FBQ0Y7QUFDRjtBQUNBLE1BQU1DLGFBQWE7SUFDbEJDLFNBQVM7UUFDUkMsWUFBWTtRQUNaQyxVQUFVO1lBQ1QsaUJBQWlCO2dCQUNoQkMsT0FBTztnQkFDUEMsZ0JBQWdCO2dCQUNoQkMsVUFBVTtnQkFDVkMscUJBQXFCO2dCQUNyQkMscUJBQXFCO2dCQUNyQkMseUJBQXlCO2dCQUN6QkMsV0FBVztnQkFDWEMsY0FBYztZQUNmO1lBQ0Esc0JBQXNCO2dCQUNyQlAsT0FBTztnQkFDUEUsVUFBVTtnQkFDVkksV0FBVztnQkFDWEMsY0FBYztnQkFDZEMsbUJBQW1CO2dCQUNuQkMsbUJBQW1CO2dCQUNuQkMsbUJBQW1CO1lBQ3BCO1FBQ0Q7SUFDRDtJQUNDQyxNQUFNO1FBQ0pDLFdBQVc7WUFDVFgsZ0JBQWdCO1lBQ2hCWSxRQUFRO2dCQUNOWixnQkFBZ0I7WUFDbEI7UUFDRjtRQUNGRixVQUFVO1lBQ1QsWUFBWTtnQkFDWEMsT0FBTztnQkFDUEUsVUFBVTtnQkFDVlcsUUFBUTtvQkFDUFosZ0JBQWdCO29CQUNoQkcscUJBQXFCO29CQUNyQkQscUJBQXFCO29CQUNyQkUseUJBQXlCO2dCQUMxQjtZQUNEO1FBQ0Q7SUFDQTtBQUNGO0FBRUEsTUFBTVMsUUFBUTtJQUNiQyxTQUFTO0FBQ1Y7QUFHQSxNQUFNQyxRQUFRM0IsWUFBWTtJQUN6QkU7SUFDQUs7SUFDQWtCO0FBQ0Q7QUFFQSwrREFBZUUsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdGhlbWUuanM/MzMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGV4dGVuZFRoZW1lIH0gPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBnbG9iYWw6IChwcm9wcykgPT4gKHtcclxuICAgIGJvZHk6IHtcclxuICAgICAgYmc6IFwiI0Y2RjFGMVwiLFxyXG4gICAgfSxcclxuICB9KSxcclxufTtcclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuXHRIZWFkaW5nOiB7XHJcblx0XHR3aGl0ZXNwYWNlOiBcIm5vd3JhcFwiLFxyXG5cdFx0dmFyaWFudHM6IHtcclxuXHRcdFx0J2xhbmRpbmctdGl0bGUnOiB7XHJcblx0XHRcdFx0Y29sb3I6ICcjMTQ2Qzk0JyxcclxuXHRcdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcblx0XHRcdFx0Zm9udFNpemU6IDQwLFxyXG5cdFx0XHRcdHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXHJcblx0XHRcdFx0dGV4dERlY29yYXRpb25Db2xvcjogJyMxOUE3Q0UnLFxyXG5cdFx0XHRcdHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxyXG5cdFx0XHRcdG1hcmdpblRvcDogMyxcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b206IDRcclxuXHRcdFx0fSxcclxuXHRcdFx0J2xhbmRpbmctbWluaS10aXRsZSc6IHtcclxuXHRcdFx0XHRjb2xvcjogJyMxNDZDOTQnLFxyXG5cdFx0XHRcdGZvbnRTaXplOiAzMCxcclxuXHRcdFx0XHRtYXJnaW5Ub3A6IDMsXHJcblx0XHRcdFx0bWFyZ2luQm90dG9tOiA0LFxyXG5cdFx0XHRcdGJvcmRlckJvdHRvbVN0eWxlOiBcInNvbGlkXCIsXHJcblx0XHRcdFx0Ym9yZGVyQm90dG9tV2lkdGg6IFwidGhpY2tcIixcclxuXHRcdFx0XHRib3JkZXJCb3R0b21Db2xvcjogXCIjMTlBN0NFXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fSxcclxuICBMaW5rOiB7XHJcbiAgICBiYXNlU3R5bGU6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICBfaG92ZXI6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cdFx0dmFyaWFudHM6IHtcclxuXHRcdFx0J25hdi1saW5rJzoge1xyXG5cdFx0XHRcdGNvbG9yOiAnIzE0NkM5NCcsXHJcblx0XHRcdFx0Zm9udFNpemU6IDIwLFxyXG5cdFx0XHRcdF9ob3Zlcjoge1xyXG5cdFx0XHRcdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG5cdFx0XHRcdFx0dGV4dERlY29yYXRpb25Db2xvcjogJyMxOUE3Q0UnLFxyXG5cdFx0XHRcdFx0dGV4dFVuZGVybGluZU9mZnNldDogNixcclxuXHRcdFx0XHRcdHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuXHRoZWFkaW5nOiBcIidMaWJyZSBCYXNrZXJ2aWxsZSdcIlxyXG59XHJcblxyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcblx0c3R5bGVzLFxyXG5cdGNvbXBvbmVudHMsXHJcblx0Zm9udHNcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwicmVxdWlyZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ3aGl0ZXNwYWNlIiwidmFyaWFudHMiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyQm90dG9tU3R5bGUiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbUNvbG9yIiwiTGluayIsImJhc2VTdHlsZSIsIl9ob3ZlciIsImZvbnRzIiwiaGVhZGluZyIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/theme.js\n"));

/***/ })

});