"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeting = void 0;
const jsx_runtime_1 = require("preact/jsx-runtime");
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
function Greeting() {
    const [count, setCount] = (0, hooks_1.useState)(0);
    function doit() {
        setCount(count + 1);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "Hello!" }), (0, jsx_runtime_1.jsx)("button", { onClick: doit, children: "Click" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Count: ", count] })] }));
}
exports.Greeting = Greeting;
(0, preact_1.render)((0, jsx_runtime_1.jsx)(Greeting, {}), document.getElementById('root'));
//# sourceMappingURL=Greeting.js.map