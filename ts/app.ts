import * as Handlebars from 'handlebars';
import { product } from './product';
import { admin } from './admin';

import { userData } from './userdata';
import { user } from './user';
import { cart } from './cart';

import { displayProduct } from './helpers';
import { displayCart } from './helpers';
import { findProduct } from './helpers';



function main() {
    let loggedIn: admin | user = null;

    const users = [
        new admin('Vuk', 'Mistovic', 'mist', '123')
    ]

    loggedIn = users[0]; // setovano privremeno

    const publishedProducts = [
        new product("Prsuta", "Najbolja prsuta sa Zaltibora", users[0]),
        new product("Kobasica", "Kobasice pravljene od najboljeg mesa", users[0])
    ];

    const cartArry: Array<product> = [

    ]

    // --> | templejt elementi| <--
    const productTPl = (<HTMLTemplateElement>document.getElementById('product-tpl')).innerHTML;
    const adminTPl = (<HTMLTemplateElement>document.getElementById('admin-tpl')).innerHTML;
    const cartTPl = (<HTMLTemplateElement>document.getElementById('cart-tpl')).innerHTML;

    // --> | Mjesta gdje serviramo podatke | <--
    const productPLace = <HTMLDivElement>document.getElementById('products');
    const adminPLace = <HTMLDivElement>document.getElementById('admin-bar');
    const cartPLace = <HTMLDivElement>document.getElementById('cart');

    // --> | Funkcije za kompajliranje templejta | <-- 
    const renderProduct = Handlebars.compile(productTPl);
    const renderAdminControl = Handlebars.compile(adminTPl);
    const renderCart = Handlebars.compile(cartTPl);

    if (loggedIn instanceof admin) {
        adminPLace.innerHTML = renderAdminControl({
            "names": {
                "title": "admin-product-title",
                "description": "admin-product-description",
                "submit": "product-submit"
            }
        })


    }

    displayProduct(productPLace, publishedProducts, renderProduct, loggedIn);

    window.addEventListener('click', function (e) {
        const el = <HTMLElement>e.target;

        // * Event za dodavanje Produkta
        if (el && el.id == 'product-submit') {
            const title = (<HTMLInputElement>document.querySelector('#admin-product-title')).value;
            const description = (<HTMLInputElement>document.querySelector('#admin-product-description')).value;
            publishedProducts.unshift(new product(title, description, loggedIn));
            displayProduct(productPLace, publishedProducts, renderProduct, loggedIn);
        }

        // ** event za dodavanje u cart
        if (el && el.classList.contains('add-to-cart')) {
            const product_id = Number(el.getAttribute('data-productid'));
            const title = (<HTMLHeadingElement>document.querySelector(`h3[data-productid='${product_id}']`)).innerText;
            const description = (<HTMLParagraphElement>document.querySelector(`p[data-productid='${product_id}']`)).innerText;
            const productHere = findProduct(product_id, publishedProducts);

            if (productHere) {
                cartArry.push(new product(title, description, loggedIn));
                displayCart(cartPLace, cartArry, renderCart);
            }
        }
    })

}

main();