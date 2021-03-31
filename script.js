const number = 5;
const clicked = () =>{
    let element = document.getElementById('head');
    console.log(number);
    element.innerHTML = 'I LOVE YOU SO MUCH';
    let backgroundElements = document.getElementsByClassName('background');
    backgroundElements.forEach(element => {
        element.style.backgroundColor = 'red';
    });
}