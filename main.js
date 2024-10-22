    let input = document.getElementById("input");
    let display = document.getElementById("display");

    input.addEventListener('keyup', output);

    function output(){
    display.innerHTML = input.value;
}
    
let input2 = document.getElementById("input2");
let display2 = document.getElementById("display2");

input2.addEventListener('keyup', output2)
function output2(){
    localStorage.setItem('input', input2.value);
    display2 = localStorage.getItem('input');
}

display2.innerHTML = localStorage.getItem('input');


