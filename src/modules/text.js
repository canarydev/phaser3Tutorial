export function crearTexto(texto, estilo = 0, params = {} ) {
    params = {
        color: params.color || undefined, 
        backgroundColor: params.backgroundColor || undefined, 
        fontSize: params.fontSize || undefined,
        fontStyle: params.fontStyle || undefined,
        align: params.align || undefined,
        padding: params.padding || undefined
    }
    return crearTextoConEstilos(texto, estilo, params.color, params.backgroundColor, params.fontSize, params.fontStyle, params.align, params.padding);
}

function crearTextoConEstilos(texto, estilo, color, backgroundColor, fontSize, fontStyle, align, padding) {
    var dictEstilos = [
        //Por defecto:
        {
            x: 5,
            y: 5,
            text: texto || "Se te ha olvidado poner texto!",
            style: {
                color: color || "#000000",
                fontSize: fontSize || 20,
            }
        },
        //Diálogos del personaje
        {
            x: 10,
            y: 25,
            text: texto || "Se te ha olvidado poner texto!",
            style: {
                fontFamily: 'IndieFlower',
                color:  color || "#00F000",
                backgroundColor: backgroundColor || '#ffffff',
                fontSize: fontSize || 30,
                fontStyle: fontStyle ||'Bold Italic',
                padding: padding || {
                    top: 15,
                    bottom: 40,
                    right: 10,
                    left: 10,
                },
                align: align || 'center'
            }
        },
        //Diálogos enemigo.
        {
            x: 5,
            y: 100,
            text: texto || "Se te ha olvidado poner texto!",
            style: {
                fontFamily: 'FyF',
                color: color || "#FF0000",
                backgroundColor: backgroundColor || '#000000',
                fontSize: fontSize || 30,
                fontStyle: fontStyle ||'',
                padding: padding || {
                    top: 15,
                    bottom: 10,
                    right: 10,
                    left: 10,
                },
                align: align ||'center'
            }
        }
    ];
    return dictEstilos[estilo];
}