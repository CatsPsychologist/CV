const selector = document.getElementById('select_menu');
export class domEl {
    constructor(selector){
        this.optionCount = 3;
        this.init(selector);
    }

    init(selector){
        this._element = document.querySelector(`${selector}`);
        this.getSelectMenu(this._element);
    }

    getSelectMenu(select){
        const selectMenu = [...Array(this.optionCount)].map((value, index) => {
            return `<a href="" class="select_item">Item ${index+1}</a>`
        });
        select.innerHTML = selectMenu.join('');
    }

    onSelectChange(callBack){
        this._element.addEventListener('click', e =>{
            e.preventDefault();
            for (let i = 0; i < selector.childNodes.length; i++) {
                if (e.target === selector.childNodes[i]){
                    callBack(i + 1);
                }
            }
        })
    }
}

