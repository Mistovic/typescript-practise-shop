"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProduct = exports.displayCart = exports.displayProduct = void 0;
function displayProduct(element, products, render, loggedInUser) {
    element.innerHTML = '';
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product_1 = products_1[_i];
        element.innerHTML += render({ "product": product_1, "loggedInUser": loggedInUser });
    }
}
exports.displayProduct = displayProduct;
function displayCart(element, products, render) {
    element.innerHTML = '';
    for (var _i = 0, products_2 = products; _i < products_2.length; _i++) {
        var product_2 = products_2[_i];
        element.innerHTML += render({ "product": product_2 });
    }
}
exports.displayCart = displayCart;
function findProduct(id, products) {
    var foundPost = null;
    for (var _i = 0, products_3 = products; _i < products_3.length; _i++) {
        var product_3 = products_3[_i];
        if (id == product_3.ID) {
            foundPost = product_3;
            break;
        }
    }
    return foundPost;
}
exports.findProduct = findProduct;
