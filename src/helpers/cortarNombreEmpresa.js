
export const cortarNombreEmpresa = (nombreEmpresa='') =>{ //* Funcion para evitar que se rompa el disenio del "SelectEmpresa" en caso de exista una empresa con un nombre muy largo...
    return nombreEmpresa.length > 10
      ? nombreEmpresa.substring(0, 10) + '...'
      : nombreEmpresa
}