
function getData() { 
    const inputJs = document.getElementById('inputJs').value;
    const inputJs2 = document.getElementById('inputJs2').value;
    const inputJs3 = document.getElementById('inputJs3').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const cardNumber = document.getElementById('cardNumber').value;
   

    document.getElementById('realName').innerHTML = cardHolder;
    document.getElementById('realNumber').innerHTML = cardNumber;
    document.getElementById('expireDate').innerHTML = inputJs + "/" + inputJs2;
    document.getElementById('realCvc').innerHTML = inputJs3;

     if(cardHolder == "") { 
        alert(' Please enter a card holder Name.')
        return;
    }
    if(cardNumber === "") { 
        alert('Please enter you card number.')
        return;
    }
    if (inputJs + inputJs2 === "") { 
        alert('Please enter you expire date.')
        return;
    }

    if (inputJs3 === "") {
        alert('Please enter you CVC.')
        return;
    }
    console.log(inputJs, inputJs2, inputJs3 ,cardNumber,cardHolder);

}
