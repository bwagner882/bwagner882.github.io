const number = 5;
let backgroundElements = document.getElementsByClassName('background');
let colors = ['red','blue','green','purple','pink','orange','yellow','violet','teal','white'];

let ele = document.getElementById('head');
ele.innerHTML = "What's up Paige??";
const clicked = () =>{
    let element = document.getElementById('head');
    console.log(number);
    element.innerHTML = 'I LOVE YOU SO MUCH';
    for(let i = 0; i < 200; i++){
        let color = colors[Math.floor(Math.random()*colors.length)];
        for (let index = 0; index < backgroundElements.length; index++) {
            const element = backgroundElements[index];
            element.style.backgroundColor = color;
            console.log(index, i);
        }
    }
    document.getElementById('button').innerHTML = 'CLICK ME MORE!!!';
}