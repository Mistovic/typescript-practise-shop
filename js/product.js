"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
var product = /** @class */ (function () {
    function product(title, description, user) {
        this.ID = product.counter;
        product.counter++;
        this.title = title;
        this.description = description;
        this.user = user;
        var date = new Date();
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var month = date.getMonth();
        var day = date.getDay();
        var year = date.getFullYear();
        var writeDate = hours + ':' + minutes + ' ' + day + '.' + month + '.' + year;
        this.date = writeDate;
    }
    product.counter = 1;
    return product;
}());
exports.product = product;
