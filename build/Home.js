"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("preact/jsx-runtime");
const Counter_1 = require("./islands/Counter");
function Home() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Home" }), (0, jsx_runtime_1.jsx)(Counter_1.Counter, { start: 0 })] }));
}
exports.Home = Home;
//# sourceMappingURL=Home.js.map