//Code 1 --Slower as it requires reflow and repaint 100 times each to show content on document

const t1 = performance.now();

for(let i=1;i<=100;i++){
    let para = document.createElement("p");
    para.textContent = "This is para " +i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("Total time by code 1 is " + (t2-t1));



//Code 2 --Faster as only 1 reflow and repaint is needed

const t3 = performance.now();

let mydiv = document.createElement('div');
for(let i = 1;i<100;i++){
    let para = document.createElement('p');
    para.textContent = "This is Para "+ i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("Total time by code 2 is " + (t4-t3));




//Document Fragment

const t5 = performance.now();


let fragment = document.createDocumentFragment();

for(let i = 1;i<100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    fragment.appendChild(para); //No reflow and no repaint for this line
}

document.body.appendChild(fragment);//takes 1 reflow and 1 repaint

const t6 = performance.now();

console.log("Total time by code 3 is " + (t6-t5));