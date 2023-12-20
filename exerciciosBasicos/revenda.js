function revenda(tipo) {
    switch (tipo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break;
        case 'sedans':
            console.log('tem certeza?')
            break;
        case 'moto':
            console.log('tem certeza?')
            break;
        case 'caminhonete':
            console.log('tem certeza?')
            break;
    
        default:
            break;
    }
}
revenda('hatch')