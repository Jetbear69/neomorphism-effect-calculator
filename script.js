function calcNumbers(value) {
    document.querySelector('.area').value += value;
}


function percentage(result) {
    var result1 = String(result);
    if (result1.includes("%")) {
        // Separa la parte antes y después del porcentaje
        var splitWord = result1.split("%");
        var a = eval(splitWord[0]); // Evalua la parte antes del porcentaje
        var b = Number(splitWord[1]); // Valor del porcentaje
        var percent = (a / 100) * b; // Cálculo del porcentaje
        // Actualiza el valor en el display sumando el porcentaje calculado
        document.querySelector('.area').value = a + percent; // Suma el porcentaje al valor original
    } else {
        document.querySelector('.area').value = result; // Si no hay porcentaje, mostrar el resultado original
    }
}


function makeNegative(result) {
    if (result.charAt(0) == '-') {
        document.querySelector('.area').value = result.replace('-', '');
    } else {
        document.querySelector('.area').value = '-' + result;
    }
}



const body = document.querySelector("body"),
modeToggle = document.querySelector(".drak-light");

modeToggle.addEventListener("click" ,() =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    if(!body.classList.contains("dark"))
    {
        localStorage.setItem("mode", "light-mode");
    }
    else
    {
        localStorage.setItem("mode", "dark-mode");
    }  
});


// Nueva función para manejar el botón de igual
function handleEqual() {
    var displayValue = document.querySelector('.area').value;
    if (displayValue.includes('%')) {
        percentage(displayValue);
    } else {
        try {
            // Evaluar la expresión y mostrar el resultado
            document.querySelector('.area').value = eval(displayValue);
        } catch (error) {
            console.error("Error al evaluar la expresión:", error);
            document.querySelector('.area').value = "Error";
        }
    }
}


