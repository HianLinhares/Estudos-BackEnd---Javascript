const rockets = [
    {País: "Russia" , ID: 1},
    {País: "Brasil" , ID: 2},
    {País: "Argentina" , ID: 3},
    {País: "Irlanda" , ID: 4}
]

const totalDeIds = rockets.reduce((prevalor, elemento) => prevalor + elemento.ID, 0)


console.log(totalDeIds)