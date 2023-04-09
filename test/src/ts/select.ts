import {Label} from "./models/select_enum";
const selector = document.getElementById('select_menu');
export class domEl {
    optionCount = Object.keys(Label).length;
    _element!: Element | null;

    constructor(selector : String){
        this.init(selector);
    }

    init(selector : String){
        this._element  = document.querySelector(`${selector}`);

        this.getSelectMenu((this._element as HTMLElement));
    }

    getSelectMenu(select : HTMLElement){
        const selectMenu = [...Array(this.optionCount)].map((value, index) => {
            return `<a href="" class="select_item">Item ${index+1}</a>`
        });
        select.innerHTML = selectMenu.join('');
    }

    onSelectChange(callBack : Function){
        (this._element as  HTMLElement).addEventListener('click', e =>{
            e.preventDefault();
            for (let i = 0; i < (selector as HTMLElement).childNodes.length; i++) {
                if (e.target === (selector as HTMLElement).childNodes[i]){
                    callBack(i + 1);
                }
            }
        })
    }
}

