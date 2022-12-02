
//TODO Tengo que generar las variables de entorno de la URL (ya que de momento me esta dando un "undefined")

export const getEnvVariables = () => {
    import.meta.env //* Extrayendo variables de entorno

    return (
        {...import.meta.env}
    )
}
