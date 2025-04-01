const DIGITOS_SEM_VERIFICADOR = 9

export function gerarDV( cpf ){
    checarCpf(cpf, 9)

    //Passo 1 
    let soma = 0;
    for( let i = 0 ; i < DIGITOS_SEM_VERIFICADOR; i++){
        soma += Number( cpf[i] ) * ( 10 - i )
    }
    let dv1 = soma % 11
    dv1 = dv1 < 2 ? 0 : ( 11 - dv1 )

    //Passo 2 
    cpf += dv1.toString()
    soma = 0
    for( let i = 0 ; i < DIGITOS_SEM_VERIFICADOR + 1; i++){
        soma += Number( cpf[i] ) * ( 11 - i )
    }
    let dv2 = soma % 11
    dv2 = dv2 < 2 ? 0 : ( 11 - dv2 )

    return dv1.toString() + dv2.toString()

    //Lemmbrete:
    //         0 1 2 3 4 5 6 7 8
    //Passo1  10 9 8 7 6 5 4 3 2
    // multiplicação dos dígitos pelos valores
    // soma tudo e tira o módulo com 11
    // se o resto for 0 ou 1 -> dígito é 0
    // se nao                -> dígito é 11 - resto
    //PASSO 2
    // adiciona o DV ao cpf
    //  0  1 2 3 4 5 6 7 8 9
    // 11 10 9 8 7 6 5 4 3 2
    // cálculo idem  
}

function checarCpf(cpf, qtd){
    if( typeof cpf != "string"){
        throw new Error('O CPF deve ser uma string. ')
    }

    if( cpf.length !== qtd ){
        throw new Error("O CPF deve ter "+ qtd+  " dígitos. ")
    }

    if( ! /^[0-9]+$/.test(cpf) ){
        throw new Error("O cpf deve ter " +qtd +" dígitos numéricos.")
    }

}

export function validarCpf(cpf){
    checarCpf(cpf, 11)
    const stringCpf = cpf.toString()

    let cpfSemDigitos = stringCpf.substring(0,9)
    let digitosCpf = stringCpf.substring((stringCpf.length -2))

    let digitos = gerarDV(cpfSemDigitos)

    return digitos === digitosCpf 
}

export function gerarCpf(){
    let cpf = Math.floor(Math.random() * 1000000000).toFixed(0).padStart(9, '0')
    let digitos = gerarDV(cpf.toString())
    return cpf.toString() + digitos.toString()
}