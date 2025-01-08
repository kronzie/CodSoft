window.onload = function() {
    display = document.querySelector('.display');
    key1 = document.querySelector('.key1');
    key2 = document.querySelector('.key2');
    key3 = document.querySelector('.key3');
    key4 = document.querySelector('.key4');
    key5 = document.querySelector('.key5');
    key6 = document.querySelector('.key6');
    key7 = document.querySelector('.key7');
    key8 = document.querySelector('.key8');
    key9 = document.querySelector('.key9');
    key0 = document.querySelector('.key0');
    keyPLUS = document.querySelector('.key-plus');
    keyMINUS = document.querySelector('.key-minus');
    keyMULTIPLY = document.querySelector('.key-multiply');
    keyDIVIDE = document.querySelector('.key-divide');
    keyDOT = document.querySelector('.key-dot');
    keyDEL = document.querySelector('.keyDEL');
    keyRESET = document.querySelector('.keyRESET');
    keyEQUAL = document.querySelector('.key-equal');
    
    key1.addEventListener('click', () => {
        display.value += '1';
    })

    key2.addEventListener('click', () => {
        display.value += '2';
    })

    key3.addEventListener('click', () => {
        display.value += '3';
    })
    
    key4.addEventListener('click', () => {
        display.value += '4';
    })

    key5.addEventListener('click', () => {
        display.value += '5';
    })

    key6.addEventListener('click', () => {
        display.value += '6';
    })

    key7.addEventListener('click', () => {
        display.value += '7';
    })

    key8.addEventListener('click', () => {
        display.value += '8';
    })

    key9.addEventListener('click', () => {
        display.value += '9';
    })

    key0.addEventListener('click', () => {
        display.value += '0';
    })

    keyPLUS.addEventListener('click', () => {
        display.value += '+';
    })

    keyMINUS.addEventListener('click', () => {
        display.value += '-';
    })

    keyMULTIPLY.addEventListener('click', () => {
        display.value += '*';
    })

    keyDIVIDE.addEventListener('click', () => {
        display.value += '/';
    })

    keyDOT.addEventListener('click', () => {
        display.value += '.';
    })

    keyDEL.addEventListener('click', () => {
        if(display.value == 'error'){
            display.value = '';
        }
        else {
            display.value = display.value.slice(0, -1);
        }
    })

    keyRESET.addEventListener('click', () => {
        display.value = '';
    })

    keyEQUAL.addEventListener('click', () => {
        display.value = eval(display.value);

        if(display.value > '9999999999'){
            display.value = 'error';
        }
    })
}

// DONE

