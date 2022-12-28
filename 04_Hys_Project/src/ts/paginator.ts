import {data} from './paginator-data';
import {IPaginator} from "./models/interface";

const numberBar = document.getElementById("number_bar")!;
const pageCount: number = Math.ceil(data.length / 2);
let currentPage: number  = 1;

export default function paginator(): void{
    const btn = [...Array(pageCount)].map((value, index) => {
        return `<button class="button_num btn">${index+1}</button>`
    });

    numberBar.innerHTML = btn.join('');
    let numChild = numberBar.childNodes;
    (numChild[currentPage - 1]as HTMLElement).classList.add("active");

    numberBar.addEventListener("click", (e => {
        for (let i = 0; i < numChild.length; i++) {
            (numChild[i]as HTMLElement).classList.remove('active');

            if (e.target === numChild[i]){
                (numChild[i]as HTMLElement).classList.add('active');
                currentPage = i + 1;
            }
        }
        pageCheck();
    }));
}

function pageCheck(): void{
    const prevRange = (currentPage - 1) * 2;
    const currRange = currentPage * 2;

    const cards = data.filter((item, index) => {
        return (index >= prevRange && index < currRange);
    });
    fillContent(cards);
}
pageCheck();

function fillContent(cards : Array<IPaginator>): void{
    const result = cards.map((card) => getMarkUp(card)).join('');
    const parentEl = document.getElementById('blog_items')!;
    parentEl.innerHTML = result;
}

function getMarkUp(dataItem: IPaginator): String{
  return `
   <div class="item">
         <img class="blog_img" src="${dataItem.userImage}" alt="design image" width="328">
             <div class="item_info">
               <h5 class="card_name">${dataItem.category}</h5>
               <div class="article">
                 <img class="article_img" src="../assets/images/10blog_small.png" alt="man image" width="48">
                 <div class="article_text">
                     <h3 class="card_info">
                         ${dataItem.title}
                     </h3>
                     <a href="${dataItem.redirectLink}" class="blog_link">Read Now</a>
                </div>
             </div>
         </div>
     </div>
`
}