import Pessoa from "./Pessoa/Pessoa"

function Lista(){
  const pessoas = [
    {nome: "Robson", sexo: "M", idade: 27},
    {nome: "Jessica", sexo: "F", idade: 48},
    {nome: "Pierre", sexo: "M", idade: 27}
  ]

  return (
    <div>
      <h1>LISTA</h1>

      {pessoas.map((pessoa, index) => (
        <Pessoa key={index} pessoa={pessoa} />
      ))}
    </div>
  )
}

export default Lista
