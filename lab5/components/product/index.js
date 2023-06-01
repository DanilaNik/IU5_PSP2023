export class ProductComponent {
    constructor(parent, bdate, city, university_name, faculty_name) {
        this.parent = parent;
        //this.data = data;
        this.bdate = bdate;
        this.city = city;
        this.university_name = university_name;
        this.faculty_name = faculty_name;
    }

    getHTML(data) {
        //const { bdate, city, university_name, faculty_name } = this.data;
        return (
            `
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.photo_400_orig}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                            </div>
                            <div>
                                <p>День рождения: ${this.bdate}</p>
                                <p>Город: ${this.city?.title || 'Информация не указана'}</p>
                                <p>Университет: ${this.university_name || 'Информация не указана'}</p>
                                <p>Факультет: ${this.faculty_name || 'Информация не указана'}</p> 
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}


// this.city.title = city.title;
// this.university_name = university_name;
// this.faculty_name = faculty_name;




{/* <div>
<p>День рождения: ${data.bdate}</p>


</div> */}

{/* <p>Город: ${data.city?.title || ''}</p>
<p>Университет: ${data.university_name || ''}</p>
<p>Факультет: ${data.faculty_name || ''}</p>  */}