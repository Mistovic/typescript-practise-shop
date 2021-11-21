import { product } from './product';
import { admin } from './admin';
import { user } from './user';


export function displayProduct(element: HTMLDivElement, products: Array<product>, render: HandlebarsTemplateDelegate, loggedInUser: admin | user) {
    element.innerHTML = '';
    for (let product of products) {
        element.innerHTML += render({ "product": product, "loggedInUser": loggedInUser });
    }
}

export function displayCart(element: HTMLDivElement, products: Array<product>, render: HandlebarsTemplateDelegate) {
    element.innerHTML = '';
    for (let product of products) {
        element.innerHTML += render({ "product": product });
    }
}

export function findProduct(id: number, products: Array<product>): product {
    let foundPost = null;
    for (let product of products) {
        if (id == product.ID) {
            foundPost = product;
            break;
        }
    }

    return foundPost;
}