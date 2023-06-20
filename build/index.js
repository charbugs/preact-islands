"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const Document_1 = require("./Document");
const app = (0, express_1.default)();
app.use((0, compression_1.default)());
const publicPath = path_1.default.resolve(__dirname, 'public');
app.use(express_1.default.static(publicPath));
app.get('/', (req, res) => {
    const html = (0, Document_1.renderDocument)();
    res.send(html);
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
//# sourceMappingURL=index.js.map