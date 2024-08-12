const user = {
    age: 23,
    id: 1,
    Fullname: {
        firstName: "Hian",
        lastName: "Linhares"
    }
}

function getFullName({Fullname: {firstName: first, lastName: last}}){
    return `${first} ${last}`
}

console.log(getFullName(user))