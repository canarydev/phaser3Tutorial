export function crearTexto(texto = '', estilo = 0) {
    return creaDict(texto, estilo);
}

function creaDict(texto, estilo) {
    var dict = [
        {
            x: 10,
            y: 100,
            text: texto,
            style: {
                color: "#FF0000",
                fontSize: 30,
                backgroundColor: '#ffffff',
            }
        },
        {
            x: 10,
            y: 100,
            text: texto,
            style: {
                color: "#000000",
                fontSize: 30,
                backgroundColor: '#ffffff',
                fontStyle: 'Bold Italic',
                padding: {
                    top: 15,
                    bottom: 40,
                    right: 10,
                    left: 10,
                },
                align: 'center'
            }
        }
    ];
    return dict[estilo];
}