const btn1 = document.getElementById('btn1');
const collection = document.getElementsByClassName("render");

const getUserInput = () => {
    const name = document.getElementById('username').value;
    
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "block";
    }
    document.getElementById('result').innerHTML =  name;
};

btn1.addEventListener('click', getUserInput)