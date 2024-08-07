function igualdadesoma(a, b) {
    if (a === b) {
        if (a + b > 10 && a + b > 11) {
            return "OS DOIS NÚMEROS SÃO IGUAIS E SOMADOS MAIORES QUE 10"
        } else if (a + b < 10) {
            return "OS DOIS NÚMEROS SÃO IGUAIS E SOMADOS MENORES QUE 10"
        } else if (a + b < 20) {
            return "OS DOIS NÚMEROS SÃO IGUAIS E SOMADOS SÃO MENORES QUE 20"
        }
    } else {
        return "SÃO NÚMEROS DIFERENTES"
    }

}

console.log(igualdadesoma(6,6));