import {domEl} from "./select";

import createSliderItemMarkup from "./slider";
import paginator from "./paginator";
import burgerMenu from "./mobile-menu";
import keepData from "./form-keep-data";
import headerShowBg from "./header-feature";
import slick from "./slick_carousel";

export class App {
    optionId! : domEl;

   async init() {
        this.optionId = new domEl('#select_menu');
        this.optionId.onSelectChange(this.onAlbumChange);

        paginator();
        burgerMenu();
        keepData();
        headerShowBg();
        slick();
    }

    onAlbumChange(id = 1){
        const request = new Request(`https://jsonplaceholder.typicode.com/albums1/${id}/photos`);
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

                console.debug(response);

                createSliderItemMarkup([]);
            }).catch(error => {
            console.error(error);
        });
    }
}


// const classApp = new App();
// classApp.init();
// classApp.onAlbumChange();

