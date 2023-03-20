// файл script.js
window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    let operationButtonClicked = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
                if(a === ''  && digit !== '.') {
                    butClick = 0 + (+digit)
                    a = butClick.toString()
                }
                else{
                    if(a === '0' && digit !== '0'){
                        a = digit
                    }
                    else if(a != '0'){
                        a += digit
                    }
                    else if (a === '0' && digit === '.'){
                        a += digit
                    }
                }
            }
            outputElement.innerHTML = a
        } else {
            operationButtonClicked.style.background = '#ff9801'
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                if(b !== '0'){
                    b += digit
                }
                outputElement.innerHTML = b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() {
        if(operationButtonClicked !== null){
            operationButtonClicked.style.background = '#ff9801'
        }
        document.getElementById("btn_op_equal").click()
        document.getElementById("btn_op_mult").style.background = 'black'
        operationButtonClicked = document.getElementById("btn_op_mult")
        if (a === '') {
            a = 0
        }
        selectedOperation = 'x'
    }


    document.getElementById("btn_op_plus").onclick = function() { 
        if(operationButtonClicked !== null){
            operationButtonClicked.style.background = '#ff9801'
        }
        document.getElementById("btn_op_equal").click()
        document.getElementById("btn_op_plus").style.background = 'black'
        operationButtonClicked = document.getElementById("btn_op_plus")
        if (a === '') return
        selectedOperation = '+'
    }


    document.getElementById("btn_op_minus").onclick = function() { 
        if(operationButtonClicked !== null){
            operationButtonClicked.style.background = '#ff9801'
        }
        document.getElementById("btn_op_equal").click()
        document.getElementById("btn_op_minus").style.background = 'black'
        operationButtonClicked = document.getElementById("btn_op_minus")
        if (a === '') {
            a = 0
        }
        selectedOperation = '-'
    }


    document.getElementById("btn_op_div").onclick = function() { 
        if(operationButtonClicked !== null){
            operationButtonClicked.style.background = '#ff9801'
        }
        document.getElementById("btn_op_equal").click()
        document.getElementById("btn_op_div").style.background = 'black'
        operationButtonClicked = document.getElementById("btn_op_div")
        if (a === '') return
        selectedOperation = '/'
    }
    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        if(operationButtonClicked !== null){
            operationButtonClicked.style.background = '#ff9801'
        }
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }

    //кнопка смены знака
    document.getElementById("btn_op_sign").onclick = function() { 
        if(operationButtonClicked !== null){
            operationButtonClicked.style.background = '#ff9801'
        }
        if (a === '' || a === '0') return
        else{
            if(Number(a) > 0){
                a = '-' + a 
            }
            else{
                let c = Math.abs(Number(a))
                a = c.toString()
            }
        }
        selectedOperation = ''
        outputElement.innerHTML = a
    }

    //кнопка вычисления процента
    document.getElementById("btn_op_percent").onclick = function() { 
        if(operationButtonClicked !== null){
            operationButtonClicked.style.background = '#ff9801'
        }
        if (a === '') return
        else if( a !== '' && b === ''){
            let percent_res = (+a) * 0.01
            a = percent_res.toString()
            outputElement.innerHTML = a
        }
        else if(b !== ''){
            let percent_res = (+b) * 0.01
            b = percent_res.toString()
            outputElement.innerHTML = b

        }
    }
/*
    document.getElementById("btn_digit_dot").onclick = function() { 
        if(operationButtonClicked !== null){
            operationButtonClicked.style.background = '#ff9801'
        }
        if (a === '') return
        else if( a !== '' && b === ''){
            let percent_res = (+a) * 0.01
            a = percent_res.toString()
            outputElement.innerHTML = a
        }
        else if(b !== ''){
            let percent_res = (+b) * 0.01
            b = percent_res.toString()
            outputElement.innerHTML = b

        }
    }
*/
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        console.log("Зашел в равно")
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                console.log("Зашел в плюс")
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }
        operationButtonClicked.style.background = '#ff9801'
        if(expressionResult >= 100000000){
            let exp_res = expressionResult.toExponential()
            expressionResult = exp_res
        }
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
        if(isNaN(a)){
            a = 'Ошибка'
        }
        outputElement.innerHTML = a
    }

};