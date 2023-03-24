function method1(string1){
    if(string1 === Array.from(string1).reverse().join('')){
        console.log("Polindrom from method 1")
    }
    else{
        console.log("Not polindrom from method 1")
    }
}

function method2(string2){
    if(string2.length % 2 === 0){
        for(let i = 0; i < string2.length / 2; i++){
            if(string2[i] !== string2[string2.length - 1 - i]){
                console.log("Not polindrom from method 2")
                return
            }
        }
        console.log("Polindrom from method 2")
    }
    else{
      for(let i = 0; i < Math.trunc(string2.length / 2); i++){
        if(string2[i] !== string2[string2.length - 1 - i]){
                console.log("Not polindrom from method 2")
                return
            }
      }
      console.log("Polindrom from method 2")
    }
}


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter test string: ", function (answer) {
    method1(answer);
    method2(answer);
  rl.close();
});


/*
console.log(test_string1);
method1(test_string1);//должно выводить Not polindrom from method 1
method2(test_string1);//должно выводить Not polindrom from method 2
console.log(test_string2);
method1(test_string2);//должно выводить Polindrom from method 1
method2(test_string2);//должно выводить Polindrom from method 2
*/