import {domEl} from "./select.js";
import createSliderItemMarkup from "./slider.js";
import paginator from "./paginator.js";
import burgerMenu from "./mobile-menu.js";
import keepData from "./form-keep-data.js";
import headerShowBg from "./header-feature.js";
import slick from "./slick_carousel.js";

export class App {
   async init(){
        this.optionId = new domEl('#select_menu');
        this.optionId.onSelectChange(this.onAlbumChange);
        paginator();
        burgerMenu();
        keepData();
        headerShowBg();

        slick();
    }

    onAlbumChange(id = 1){
        const request = new Request(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        fetch(request)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так на API сервере.');
                }
            })
            .then(response => {
                response.length = 8;
                createSliderItemMarkup(response);
            }).catch(error => {
            console.error(error);
        });
    }
}
