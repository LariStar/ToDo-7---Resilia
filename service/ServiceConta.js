class ServiceConta{
    static somar (primeiro, segundo){
        return parseInt(primeiro) + parseInt(segundo)
    }
    static multiplicar(primeiro,segundo){
        return parseInt(primeiro) * parseInt(segundo)
    }
    static subtrair (primeiro, segundo){
        return parseInt(primeiro) - parseInt(segundo)
    }
    static dividir (primeiro, segundo){
        return parseInt(primeiro) / parseInt(segundo)
    }
}

module.exports = ServiceConta