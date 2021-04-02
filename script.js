const number = 5;
let backgroundElements = document.getElementsByClassName('background');
let colors = ['red','blue','green','purple','pink','orange','yellow','violet','teal','white'];

let ele = document.getElementById('head');
ele.innerHTML = "What's up??";

const clicked = () =>{
    let element = document.getElementById('head');
    let inElement = document.getElementById('input').value;
    if(inElement.toLowerCase() === 'eggy'){
        element.innerHTML = 'I LOVE YOU SO MUCH!!!!';
        element.style.fontSize = '50px';
        element.style.fontFamily = 'Helvetica';
        for(let i = 0; i < 200; i++){
            let color = colors[Math.floor(Math.random()*colors.length)];
            for (let index = 0; index < backgroundElements.length; index++) {
                const element = backgroundElements[index];
                element.style.backgroundColor = color;
                console.log(index, i);
            }
        }
        let button = document.getElementById('button');
        button.innerHTML = 'CLICK ME MORE!!!';
        button.style.fontSize = '38px';
    } else if(inElement.toLowerCase() === 'paige'){
        element.innerHTML = 'Is that your true name?????';

    }else{
        element.innerHTML = 'This is not for you';
        for (let index = 0; index < backgroundElements.length; index++) {
            const element = backgroundElements[index];
            element.style.backgroundColor = 'white';
            console.log(index, i);
        }
    }
}

const clear = e =>{
    let element = e.target;
    element.value = "";
    console.log(element);
    console.log(e);
}

const inBox = document.getElementById('input');
inBox.addEventListener("click", clear);
console.log(inBox);
