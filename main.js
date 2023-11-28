var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value);
var resultParagraph = document.getElementById("result");

function calculate_lcm(num1, num2) {
    let min = (num1 > num2) ? num1 : num2;

    // while loop
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            console.log(`The LCM of ${num1} and ${num2} is ${min}`);
            break;
        }
        min++;
    }
}

function calculate_gcd(num1, num2) {

    if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
        return false;
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while (num2) {
        var t = num2;
        y = num1 % num2;
        num1 = t;
    }
    console.log(num1)
}

function calculate() {

    var lcm = calculate_lcm(num1, num2);
    var gcd = calculate_gcd(num1, num2);

    resultParagraph.innerHTML = "Result: LCM = " + lcm + ", GCD = " + gcd;
}

calculate();