var inputLabel = document.getElementById('inputLabel');
     
    function sendVal(obj) {
         
        var input = obj.innerHTML;
        console.log(input)
        if (input == '=') {
            inputLabel.innerHTML = eval(inputLabel.innerHTML);
             
        } else if (input == 'AC') {
            inputLabel.innerHTML = '0';
             
        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = input;
                 
            } else {
                inputLabel.innerHTML += input;   
            }
        }
        console.log(inputLabel.innerHTML)
    }