import { admin } from './admin';
import { cart } from './cart';

export class product {
    public static counter = 1;

    public ID: number;
    public title: string;
    public description: string;
    public user: admin;
    public date: string;

    public constructor(title: string, description: string, user: admin) {
        this.ID = product.counter;
        product.counter++;
        this.title = title;
        this.description = description;
        this.user = user;

        let date = new Date();

        let minutes = date.getMinutes();
        let hours = date.getHours();
        let month = date.getMonth();
        let day = date.getDay();
        let year = date.getFullYear();

        let writeDate = hours + ':' + minutes + ' ' + day + '.' + month + '.' + year;
        this.date = writeDate;
    }
}