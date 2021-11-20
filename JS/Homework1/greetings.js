let name=prompt("Введите ваше имя ")
document.getElementById('name').innerText="Привет "+name+"!";

const a1 =[2, 4, 'hello', 39, true]
const a2 =['java', 52, 3, false, 294, 17]

const check = () => {
    if(a1.length>a2.length){
        document.getElementById('result').innerText="Длина массива 1 больше"
    }
    else if(a2.length>a1.length){
        document.getElementById('result').innerText="Длина массива 2 больше"
    }
    else {
        document.getElementById('result').innerText="Длины массивов равны"
    }
}
const warning = (operation) => {
    operation==="red" ? document.getElementById('warning').innerText='Нельзя' : operation==="yellow" ? document.getElementById('warning').innerText="Предупреждение" : document.getElementById('warning').innerText="Можно";
}