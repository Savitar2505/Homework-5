const twoNumbers = () => {
    let num1 = document.querySelector('.number1').value;
    let num2 = document.querySelector('.number2').value;
    if(num1 > num2){
        document.getElementById('result').innerHTML='Число 2 меньше';
    }
    else if(num2 > num1){
        document.getElementById('result').innerHTML='Число 1 меньше';
    }
    else {
        document.getElementById('result').innerHTML='Числа равны';
    }
}

let array1 = [1, "Jack", true, 0]
let array2 =["John", 57, 45, 12, false]
const check=()=>{
    if(array1.length>array2.length){
        document.getElementById('length').innerText="Массив 1 больше"
    }
    else if(array2.length>array1.length){
        document.getElementById('length').innerText="Массив 2 больше"
    }
    else {
        document.getElementById('length').innerText="Массивы равны"
    }
}

const countChar=()=> {
    let string=document.querySelector('.text').value;
    document.getElementById('text_length').innerText="Длина строки равна: " +string.length;
}
