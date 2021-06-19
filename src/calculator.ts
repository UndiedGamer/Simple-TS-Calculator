function addTwoNumbers(textBox1: string, textBox2: string){
    var x = document.getElementById(textBox1)!.value;
    var y = document.getElementById(textBox2)!.value;
    let sum = 0;
    sum = Number(x) + Number(y);
    alert(`Sum is: ${sum}`);
}

function subTwoNumbers(textBox1: string, textBox2: string){
    var x = document.getElementById(textBox1)!.value;
    var y = document.getElementById(textBox2)!.value;
    let diff = 0;
    diff = Number(x) - Number(y);
    alert(`Difference is ${diff}`)
}

function multiplyTwoNumbers(textBox1: string, textBox2: string) {
    var x = document.getElementById(textBox1)!.value;
    var y = document.getElementById(textBox2)!.value;
    let product = 0;
    product = Number(x) * Number(y);
    alert(`Product is ${product}`)
}

function divideTwoNumbers(textBox1: string, textBox2: string) {
    var x = document.getElementById(textBox1)!.value;
    var y = document.getElementById(textBox2)!.value;
    let quotient = 0;
    quotient = Number(x) / Number(y);
    let remainder = 0;
    remainder = Number(x) % Number(y)
    alert(`Product is ${quotient} and Remainder is ${remainder}`)
}