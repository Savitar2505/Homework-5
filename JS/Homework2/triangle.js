let triangle=''
for (let i = 0; i < 7; i++) {
     for (let j = 0; j <= i; j++) {
         triangle+='*'
     }
     triangle+='\n'
 }
document.getElementById('triangle').innerText=triangle


let numbers =''
for(let i=1; i<=100; i++)
{
    if(i%3===0){
        numbers=i+' - FlizzBuzz'+'\n'
        document.write(numbers)
    }
    else if(i%5===0){
        numbers=i+' - FlizzBuzz  '+'  \n';
        document.write(numbers)
    }
}

let chess='';
const chess_show = () => {
    let size=document.getElementById('size').value;
    for(let i=0; i<size; i++) {
        for(let n=0; n<size; n++) {
            if ((n + i)%2 === 0) {
                chess +='#';
            }
            else {
                chess +='ᅠ';
            }
        }
        chess+='\n';
    }
    document.getElementById('chess').innerText=chess;
}
