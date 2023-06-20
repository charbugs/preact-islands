"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDocument = exports.Document = void 0;
const jsx_runtime_1 = require("preact/jsx-runtime");
const preact_render_to_string_1 = require("preact-render-to-string");
const Home_1 = require("./Home");
function Document() {
    return ((0, jsx_runtime_1.jsxs)("html", { children: [(0, jsx_runtime_1.jsx)("head", { children: (0, jsx_runtime_1.jsx)("title", { children: "Home" }) }), (0, jsx_runtime_1.jsxs)("body", { children: [(0, jsx_runtime_1.jsx)(Home_1.Home, {}), (0, jsx_runtime_1.jsx)("div", { id: "root" }), (0, jsx_runtime_1.jsx)("script", { src: "/js/bundle.js" })] })] }));
}
exports.Document = Document;
function renderDocument() {
    return (0, preact_render_to_string_1.render)((0, jsx_runtime_1.jsx)(Document, {}));
}
exports.renderDocument = renderDocument;
//# sourceMappingURL=Document.js.map