// Task 1
function func1(){
    const num1 = parseInt(document.querySelector("#i1").value);
    const num2 = parseInt(document.querySelector("#i2").value);;
        function calc(a, b){
            while(b != 0){
            const temp = b;
            b = a % b;
            a = temp
        }
    return a;
    }

    const res = calc(num1, num2);
    console.log(res);

    const displayResult = document.querySelector(".result_task1 span");
    displayResult.innerHTML = res;
}

// Task 2
function reverseNumber(){
    const num = parseInt(document.querySelector("#i3").value);
    let numStr = num.toString();
    let reversedStr = "";

    for(let i = numStr.length - 1; i >= 0; i--){
        reversedStr += numStr[i];
    }

    const res = parseInt(reversedStr);
    console.log(res);

    const displayResult = document.querySelector(".result_task2 span");
    displayResult.innerHTML = res;

}

// Task3
function transform(){
      function toBytes(value, unit) {
            switch(unit.toLowerCase()) {
                case 'kb':
                    return value * 1024;
                case 'mb':
                    return value * Math.pow(1024, 2);
                case 'gb':
                    return value * Math.pow(1024, 3);
                case 'tb':
                    return value * Math.pow(1024, 4);
                default:
                    return value;
            }
        }

        function fromBytes(bytes, unit) {
            switch(unit.toLowerCase()) {
                case 'kb':
                    return bytes / 1024;
                case 'mb':
                    return bytes / Math.pow(1024, 2);
                case 'gb':
                    return bytes / Math.pow(1024, 3);
                case 'tb':
                    return bytes / Math.pow(1024, 4);
                default:
                    return bytes;
            }
        }

    
        const num = parseFloat(document.getElementById('i4').value);
        const start = document.getElementById('start').value;
        const end = document.getElementById('end').value;

        const bytes = toBytes(num, start);
        const result = fromBytes(bytes, end);

        const displayResult = document.querySelector(".result_task3 span");
        displayResult.innerHTML = result;
        
}
