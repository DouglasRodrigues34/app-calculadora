function calcular(tipo, valor) {

    // Verifica o tipo de operação
    if(tipo === 'acao') {

        // Verifica se o valor é 'c' (limpar visor)
        if(valor === 'c') {

            // limpar o visor (id resultado)
            document.getElementById('resultado').value = '';
        }

        // Verifica se o valor é uma operação matemática
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {

            // Adiciona o valor à string de resultado
            document.getElementById('resultado').value += valor;
        }

        // Verifica se o valor é '=' (igual)
        if(valor === '=') {

            // Executa a operação matemática e armazena o resultado em uma variável
            var valor_campo = eval(document.getElementById('resultado').value)

            // Atualiza o valor do visor com o resultado
            document.getElementById('resultado').value = valor_campo;
        }
    
    // Verifica se o tipo é 'valor' (número)
    } else if(tipo === 'valor') {
        
        // Adiciona o valor ao visor
        document.getElementById('resultado').value += valor;
    }
}