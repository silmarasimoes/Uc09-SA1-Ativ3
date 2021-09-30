//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function existeInputVazio() {
    var inputName = document.getElementById("nome");
    if(inputName.value == null || inputName.value.length < 1) {
        return true
    }

    var inputCpf = document.getElementById("cpf");
    if(inputCpf.value == null || inputCpf.value.length < 1) {
        return true
    }

    var inputEmail = document.getElementById("email");
    if(inputEmail.value == null || inputEmail.value.length < 1) {
        return true
    }

    var inputCelular = document.getElementById("cel");
    if(inputCelular.value == null || inputCelular.value.length < 1) {
        return true
    }

    var inputDataNascimento = document.getElementById("nascimento");
    if(inputDataNascimento.value == null || inputDataNascimento.value.length < 1) {
        return true
    }

    var inputSalario = document.getElementById("salario");
    if(inputSalario.value == null || inputSalario.value.length < 1) {
        return true
    }

    var sexoOk = false
    var inputSexo = document.querySelectorAll("input[name=sexo]");
    for (var input of inputSexo) {
        if (input.checked) {
            sexoOk = true
        }
    }

    var inputTime = document.querySelector("select[name=times]");
    if(inputTime.value == null || inputTime.value.length < 1) {
        console.log("erro: times")
        return true
    }

    var planoOk = false
    var inputPlano = document.querySelectorAll("input[name=planos]");
    for (var input of inputPlano) {
        if (input.checked) {
            planoOk = true
        }
    }

    premiereOk = false
    var inputPremiere = document.querySelectorAll("input[name=premiere]");
    for (var input of inputPremiere) {
        if (input.checked) {
            premiereOk = true
        }
    }
    
    if (!sexoOk || !planoOk || !premiereOk) {
        return true
    }
    
    return false
}

function validaCpf(cpf) {
    return /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/.test(cpf)
}

function validaCelular(celular) {
    return /^\(?[0-9]{2}\)? ?[0-9]{5}[- ]?[0-9]{4}$/.test(celular)
}

function validaSalario(salario) {
    return /^[0-9]+((,|\.)[0-9]+)?$/.test(salario)
}

function validaLoginESenha(login, senha) {
    var json = '{"login": "Usuario","senha":"Abc$123"}'
    var parsedJson = JSON.parse(json)
    return login == parsedJson.login && senha == parsedJson.senha
}

function validar_tudo() {
    if(existeInputVazio()) {
        alert("Preencha todos os campos!")
        return false
    }

    var inputCpf = document.getElementById("cpf")
    if(!validaCpf(inputCpf.value)) {
        alert("Cpf inválido!")
        return false
    }

    var inputCel = document.getElementById("cel")
    if(!validaCelular(inputCel.value)) {
        alert("Número de celular inválido!")
        return false;
    }

    var inputSalario = document.getElementById("salario")
    if(!validaSalario(inputSalario.value)) {
        alert("Salário inválido!")
        return false
    }

    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    var inputAssinar = document.getElementById("butassin")
    if(!validaLoginESenha(login, senha)) {
        inputAssinar.disabled = true
        alert("Login ou senha inválidos!")
        return false
    }

    inputAssinar.disabled = false

    return true
}
