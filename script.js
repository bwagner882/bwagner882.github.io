const number = 5;
let backgroundElements = document.getElementsByClassName('background');
let colors = ['red','blue','green','purple','pink','orange','yellow','violet','teal','black'];

let ele = document.getElementById('head');
ele.innerHTML = "What's up??";

const getJoke = () =>{
    let url = 'https://v2.jokeapi.dev/joke/';
    let endpoint = 'Miscellaneous,Pun,Christmas';
    let params = '?format=json&blacklistFlags=sexist,racist,nsfw&type=single';
    let fullURL = `${url}${endpoint}${params}`;
    console.log(fullURL);
    fetch(fullURL, {cache: 'no-cache'}).then(response =>{
        //console.log(response);
        if(response.ok){
            //console.log('response ran');
            
            return response.json();
        }
        console.error('API REQUEST ERROR LINE getJoke()');
        throw new Error('Request has failed');
    }).then(data =>{
        console.log(data);
        let type = data.category;
        let joke = data.joke;
        alert(`Here's a joke about ${type}!\n${joke}`);
    });
}

const joke = () =>{
    getJoke();
}

const clicked = () =>{
    let element = document.getElementById('head');
    let inElement = document.getElementById('input').value;
    if(inElement.toLowerCase() === 'eggy' || inElement.toLowerCase() === 'egg'){
        element.innerHTML = 'I LOVE YOU SO MUCH!!!!';
        element.style.fontSize = '50px';
        element.style.fontFamily = 'Helvetica';
        let randomNumber = Math.floor(Math.random()*colors.length)
        let color = colors[randomNumber];
        let otherColor = colors[Math.floor(Math.random()*colors.length)];
        element.style.color = otherColor;
        for (let index = 0; index < backgroundElements.length; index++) {
            const ele = backgroundElements[index];
            ele.style.backgroundColor = color;
        }
    
        let button = document.getElementById('button');
        button.innerHTML = 'CLICK ME MORE!!!';
        button.style.fontSize = '38px';
        document.getElementById('jokeBTN').style.visibility = 'visible';
    } else if(inElement.toLowerCase() === 'paige'){
        element.innerHTML = 'Is that your true name?????';
    }else{
        element.innerHTML = 'This is not for you';
        for (let index = 0; index < backgroundElements.length; index++) {
            const element = backgroundElements[index];
            element.style.backgroundColor = 'white';
        }
    }
}



const clear = e =>{
    let element = e.target;
    element.value = "";
    console.log(element);
    console.log(e);
}
let jokeBTN = document.getElementById('jokeBTN');
jokeBTN.addEventListener('click', joke);
jokeBTN.style.visibility = 'hidden';
const inBox = document.getElementById('input');
inBox.addEventListener("click", clear);
//console.log(inBox);
