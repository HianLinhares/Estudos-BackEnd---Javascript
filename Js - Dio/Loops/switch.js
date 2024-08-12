function getAnimal(id){
    switch(id){
        case 1: 
        return "Cão"
        break
        case 2:
            return "Gato"
            break
            case 3:
                return "Peixe"
                break
                default:
                    return "Cavalo"
                    break
    }
}

// quando nenhuma dessas opções acontece

console.log(getAnimal(5))