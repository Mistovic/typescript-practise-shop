"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Handlebars = __importStar(require("handlebars"));
var product_1 = require("./product");
var admin_1 = require("./admin");
var helpers_1 = require("./helpers");
var helpers_2 = require("./helpers");
var helpers_3 = require("./helpers");
function main() {
    var loggedIn = null;
    var users = [
        new admin_1.admin('Vuk', 'Mistovic', 'mist', '123')
    ];
    loggedIn = users[0]; // setovano privremeno
    var publishedProducts = [
        new product_1.product("Prsuta", "Najbolja prsuta sa Zaltibora", users[0]),
        new product_1.product("Kobasica", "Kobasice pravljene od najboljeg mesa", users[0])
    ];
    var cartArry = [];
    // --> | templejt elementi| <--
    var productTPl = document.getElementById('product-tpl').innerHTML;
    var adminTPl = document.getElementById('admin-tpl').innerHTML;
    var cartTPl = document.getElementById('cart-tpl').innerHTML;
    // --> | Mjesta gdje serviramo podatke | <--
    var productPLace = document.getElementById('products');
    var adminPLace = document.getElementById('admin-bar');
    var cartPLace = document.getElementById('cart');
    // --> | Funkcije za kompajliranje templejta | <-- 
    var renderProduct = Handlebars.compile(productTPl);
    var renderAdminControl = Handlebars.compile(adminTPl);
    var renderCart = Handlebars.compile(cartTPl);
    if (loggedIn instanceof admin_1.admin) {
        adminPLace.innerHTML = renderAdminControl({
            "names": {
                "title": "admin-product-title",
                "description": "admin-product-description",
                "submit": "product-submit"
            }
        });
    }
    helpers_1.displayProduct(productPLace, publishedProducts, renderProduct, loggedIn);
    window.addEventListener('click', function (e) {
        var el = e.target;
        // * Event za dodavanje Produkta
        if (el && el.id == 'product-submit') {
            var title = document.querySelector('#admin-product-title').value;
            var description = document.querySelector('#admin-product-description').value;
            publishedProducts.unshift(new product_1.product(title, description, loggedIn));
            helpers_1.displayProduct(productPLace, publishedProducts, renderProduct, loggedIn);
        }
        // ** event za dodavanje u cart
        if (el && el.classList.contains('add-to-cart')) {
            var product_id = Number(el.getAttribute('data-productid'));
            var title = document.querySelector("h3[data-productid='" + product_id + "']").innerText;
            var description = document.querySelector("p[data-productid='" + product_id + "']").innerText;
            var productHere = helpers_3.findProduct(product_id, publishedProducts);
            if (productHere) {
                cartArry.push(new product_1.product(title, description, loggedIn));
                helpers_2.displayCart(cartPLace, cartArry, renderCart);
            }
        }
    });
}
main();
