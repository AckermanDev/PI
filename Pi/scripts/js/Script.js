

const validate = () => {
    const input = document.getElementById("floatingInputGrid");

    if(input.value == "") {
        input.classList.add("is-invalid");
    } else { 
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
}

const validateCPF = () => {
    const inputCPF = document.getElementById("floatingInputGrid cpf-input");

    if(inputCPF.value == "" || inputCPF.value.length < 11) {
        inputCPF.classList.add("is-invalid")
    } else {
        inputCPF.classList.remove("is-invalid")
        inputCPF.classList.add("is-valid")
        var cpfFormatado = inputCPF.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4' )
        inputCPF.value = cpfFormatado;
    }
}

const validateSelect = () => {
    const selectBox = document.getElementById("floatingSelectGrid selectbox");

    if(selectBox.value == "Área") {
        console.log("sadasd")
    }
}

