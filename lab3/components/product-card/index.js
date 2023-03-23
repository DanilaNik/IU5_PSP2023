export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }
    getHTML(data) {
        return (
            `
                <div class="card">
                    <img class="card-img-top" src="${data.src}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <button class="btn btn-primary position-relative" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня
                            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                <span class="visually-hidden">Новые уведомления</span>
                            </span>
                        </button>
                    </div>
                </div>
            `
        )
    }
    
    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }
    
    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}    