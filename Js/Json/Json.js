const variosObjetos = [
    {
      id: 1,
      nome: "Hian",
    },
    {
      id: 2,
      nome: "pedro",
    },
    {
      id:3,
      nome: "Lucas"
    }
  ];

  const variosObjetosJson = JSON.stringify(variosObjetos); // transformando a lista em um JSON
  console.log(variosObjetosJson)

  const variosObjetosJsonList = JSON.parse(variosObjetosJson) // transformando o Json em uma lista 
  console.log(variosObjetosJsonList)