document.addEventListener('DOMContentLoaded', function() {
    const btnCalc = document.getElementById('btnCalc');
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    
    const inputGroup = document.getElementById('inputGroup');
    const continueGroup = document.getElementById('continueGroup');
    const resText = document.getElementById('resText');

    btnCalc.addEventListener('click', function() {
        let a = Number(document.getElementById('numA').value);
        let b = Number(document.getElementById('numB').value);
        let op = document.getElementById('operator').value;
        let result;

       
        switch (op) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                if (b === 0) {
                    result = "Помилка (ділення на 0)";
                } else {
                    result = a / b;
                }
                break;
            default:
                result = "Невідома операція";
        }

        resText.innerText = result;

    
        inputGroup.style.display = "none";
        continueGroup.style.display = "block";
    });

   
    btnYes.addEventListener('click', function() {
        inputGroup.style.display = "block";
        continueGroup.style.display = "none";
        resText.innerText = "---";
    
        document.getElementById('numA').value = "";
        document.getElementById('numB').value = "";
    });

  
    btnNo.addEventListener('click', function() {
        continueGroup.innerHTML = "<b>Програма завершена. Дякуємо!</b>";
        resText.innerText = "Bye!";
    });
});
