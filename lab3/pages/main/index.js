import {ButtonComponent} from "../../components/button/index.js";        
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getData() {
        return [
            {
                id: 1,
                src: "img/apple.jpeg",
                title: "Яблоки",
                text: "Такие яблоки вы еще точно не видели)"
            },
            {
                id: 2,
                src: "img/tomat(2).jpeg",
                title: "Томаты Фламенко",
                text: "По настоящему красные даже внутри"
            },
            {
                id: 3,
                src: "img/mandarin(1).jpg",
                title: "Мандарины",
                text: "Вкус Нового года"
            },
        ]
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}