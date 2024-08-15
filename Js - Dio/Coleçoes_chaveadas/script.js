const myMap = new Map()
myMap.set('Apple', 'Fruit')

// MAP
myMap.get(apple)
myMap.delete(apple)
myMap.set(apple)

// SET
const mySet = new Set()
mySet.add(1)
mySet.has(1) // acessar algum valor dentro do set 
mySet.delete(5)



const getAdmins = (map) =>{
    let admins = []
    for ([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins
}


const usuarios = new Map()
usuarios.set('Luiz', 'Admin')
usuarios.set('Léo', 'Admin')
usuarios.set('Ana', 'users')
usuarios.set('Natalia', 'users')


console.log(getAdmins(usuarios))