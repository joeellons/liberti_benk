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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst { extendTheme  } = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: \"#F6F1F1\"\n            }\n        })\n};\nconst components = {\n    Heading: {\n        variants: {\n            \"landing-title\": {\n                color: \"#146C94\",\n                textDecoration: \"underline\",\n                fontSize: 40,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#19A7CE\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            },\n            \"landing-mini-title\": {\n                color: \"#146C94\",\n                fontSize: 30,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: {\n            textDecoration: \"none\",\n            _hover: {\n                textDecoration: \"none\"\n            }\n        },\n        variants: {\n            \"nav-link\": {\n                color: \"#146C94\",\n                fontSize: 20,\n                _hover: {\n                    color: \"#000000\"\n                }\n            }\n        }\n    }\n};\nconst fonts = {\n    heading: \"'Libre Baskerville'\"\n};\nconst theme = extendTheme({\n    styles,\n    components,\n    fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBRUEsWUFBVyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLHVFQUFrQjtBQUVsRCxNQUFNQyxTQUFTO0lBQ2JDLFFBQVEsQ0FBQ0MsUUFBVztZQUNsQkMsTUFBTTtnQkFDSkMsSUFBSTtZQUNOO1FBQ0Y7QUFDRjtBQUNBLE1BQU1DLGFBQWE7SUFDbEJDLFNBQVM7UUFDUkMsVUFBVTtZQUNULGlCQUFpQjtnQkFDaEJDLE9BQU87Z0JBQ1BDLGdCQUFnQjtnQkFDaEJDLFVBQVU7Z0JBQ1ZDLHFCQUFxQjtnQkFDckJDLHFCQUFxQjtnQkFDckJDLHlCQUF5QjtnQkFDekJDLFdBQVc7Z0JBQ1hDLGNBQWM7WUFDZjtZQUNBLHNCQUFzQjtnQkFDckJQLE9BQU87Z0JBQ1BFLFVBQVU7Z0JBQ1ZJLFdBQVc7Z0JBQ1hDLGNBQWM7WUFDZjtRQUNEO0lBQ0Q7SUFDQ0MsTUFBTTtRQUNKQyxXQUFXO1lBQ1RSLGdCQUFnQjtZQUNoQlMsUUFBUTtnQkFDTlQsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFDRkYsVUFBVTtZQUNULFlBQVk7Z0JBQ1hDLE9BQU87Z0JBQ1BFLFVBQVU7Z0JBQ1ZRLFFBQVE7b0JBQ1BWLE9BQU87Z0JBQ1I7WUFDRDtRQUNEO0lBQ0E7QUFDRjtBQUVBLE1BQU1XLFFBQVE7SUFDYkMsU0FBUztBQUNWO0FBR0EsTUFBTUMsUUFBUXZCLFlBQVk7SUFDekJFO0lBQ0FLO0lBQ0FjO0FBQ0Q7QUFFQSwrREFBZUUsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdGhlbWUuanM/MzMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGV4dGVuZFRoZW1lIH0gPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBnbG9iYWw6IChwcm9wcykgPT4gKHtcclxuICAgIGJvZHk6IHtcclxuICAgICAgYmc6IFwiI0Y2RjFGMVwiLFxyXG4gICAgfSxcclxuICB9KSxcclxufTtcclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuXHRIZWFkaW5nOiB7XHJcblx0XHR2YXJpYW50czoge1xyXG5cdFx0XHQnbGFuZGluZy10aXRsZSc6IHtcclxuXHRcdFx0XHRjb2xvcjogJyMxNDZDOTQnLFxyXG5cdFx0XHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuXHRcdFx0XHRmb250U2l6ZTogNDAsXHJcblx0XHRcdFx0dGV4dFVuZGVybGluZU9mZnNldDogNixcclxuXHRcdFx0XHR0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnIzE5QTdDRScsXHJcblx0XHRcdFx0dGV4dERlY29yYXRpb25UaGlja25lc3M6IDQsXHJcblx0XHRcdFx0bWFyZ2luVG9wOiAzLFxyXG5cdFx0XHRcdG1hcmdpbkJvdHRvbTogNFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQnbGFuZGluZy1taW5pLXRpdGxlJzoge1xyXG5cdFx0XHRcdGNvbG9yOiAnIzE0NkM5NCcsXHJcblx0XHRcdFx0Zm9udFNpemU6IDMwLFxyXG5cdFx0XHRcdG1hcmdpblRvcDogMyxcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b206IDRcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9LFxyXG4gIExpbms6IHtcclxuICAgIGJhc2VTdHlsZToge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgIF9ob3Zlcjoge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblx0XHR2YXJpYW50czoge1xyXG5cdFx0XHQnbmF2LWxpbmsnOiB7XHJcblx0XHRcdFx0Y29sb3I6ICcjMTQ2Qzk0JyxcclxuXHRcdFx0XHRmb250U2l6ZTogMjAsXHJcblx0XHRcdFx0X2hvdmVyOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogJyMwMDAwMDAnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGZvbnRzID0ge1xyXG5cdGhlYWRpbmc6IFwiJ0xpYnJlIEJhc2tlcnZpbGxlJ1wiXHJcbn1cclxuXHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuXHRzdHlsZXMsXHJcblx0Y29tcG9uZW50cyxcclxuXHRmb250c1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJyZXF1aXJlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnRzIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3R5bGUiLCJfaG92ZXIiLCJmb250cyIsImhlYWRpbmciLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n"));

/***/ })

});