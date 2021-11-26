"use strict";
exports.__esModule = true;
var listEl = document.querySelectorAll("#categories .item");
console.log("\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 " + listEl.length + " \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:");
listEl.forEach(function (elem) {
    var _a, _b;
    console.log("");
    console.log("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F " + ((_a = elem === null || elem === void 0 ? void 0 : elem.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent));
    console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 " + ((_b = elem === null || elem === void 0 ? void 0 : elem.lastElementChild) === null || _b === void 0 ? void 0 : _b.children.length));
});
