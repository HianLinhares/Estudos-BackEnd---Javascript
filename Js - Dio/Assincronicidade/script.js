// Assincronicidade = Que não ocorre ou não se efetiva ao mesmo tempo
// Promisses = Objeto de processamento assincrono, inicialmente seu valor é desconhecido, ela pode ser ou não resolvida
// Estados da promisses = PENDENTE/ COMPLETADA / REJEITADA


const myPromise = new Promise((resolve, reject)=> {
    window.setTimeout(()=>{
        resolve(console.log('resolvida'))
    },3000)
})


