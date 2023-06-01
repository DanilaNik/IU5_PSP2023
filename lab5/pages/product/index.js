import { ProductComponent } from "../../components/product/index.js"
import { BackButtonComponent } from "../../components/back-button/index.js"
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import { MainPage } from "../main/index.js"
import { groupId } from "../../modules/consts.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    async getData() {
        let arr = await urls.getGroupMembers(groupId)
        for (let i = 0; i < arr.response.items.length; i++) {
            if(arr.response.items[i]['id'] == this.id) {
                return arr.response.items[i];
            }
        }
    }

    async renderData(item) {
        let userInfo = urls.getUserInfo(this.id)
        let userData = await urls.getUser(userInfo);
        const user = userData.response[0];
        //['bdate', 'university_name', 'faculty_name']
        //const { bdate, university_name, faculty_name } = user;
        const product = new ProductComponent(this.pageRoot, userData.response[0]['bdate'], userData.response[0]['city'], userData.response[0]['university_name'], userData.response[0]['faculty_name']);
        product.render(item);
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
        
        let data = await this.getData();
        this.renderData(data);
    }
}