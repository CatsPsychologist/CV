import {slideData} from "./slider-data";
import {ISliderData} from "./models/interface";

const slideWrap = document.getElementById("degrees_slider_wrapper")!;

const prev = document.getElementById("btn_prev")!;
const next = document.getElementById("btn_next")!;

export default function createSliderItemMarkup(data: Array<ISliderData>){

    const slideElements = data.map((slide) => {
        return `<a href="#" class="slide">
                    <img class="item_bg" src="${slide.thumbnailUrl}" alt="API image" width="200" height="200">
                    <h3 class="item_name">${slide.title}</h3>
                </a>`
    });
    setData(slideElements);
}
createSliderItemMarkup(slideData);

function setData(markUp: string[]): void{
    slideWrap.innerHTML = markUp.join(' ')
}

let itemWidth = (document.querySelector(".slide")as HTMLElement).clientWidth;
let gap = 18;

prev.addEventListener("click", () => slideWrap.scrollLeft -= itemWidth + gap);
next.addEventListener("click", () => slideWrap.scrollLeft += itemWidth + gap);
