"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const jsx_runtime_1 = require("preact/jsx-runtime");
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
if (typeof window !== 'undefined') {
    function TheCounter() {
        const [count, setCount] = (0, hooks_1.useState)(0);
        function doit() {
            setCount(count + 1);
        }
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "Hello!" }), (0, jsx_runtime_1.jsx)("button", { onClick: doit, children: "Click" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Count: ", count] })] }));
    }
    class WcCounter extends HTMLElement {
        connectedCallback() {
            (0, preact_1.render)((0, jsx_runtime_1.jsx)(TheCounter, {}), this);
        }
    }
    window.customElements.define('wc-counter', WcCounter);
}
function Counter(props) {
    return (
    // @ts-ignore
    (0, jsx_runtime_1.jsx)("wc-counter", {}));
}
exports.Counter = Counter;
//# sourceMappingURL=Counter.js.map