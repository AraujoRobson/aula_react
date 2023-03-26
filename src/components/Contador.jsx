import {useState} from "react"

function Contador() {
  const [contador, setContador] = useState(0)
  const [mostrarContador, setMostrarContador] = useState(false)

  function aumentarContador(){
    setContador(anterior => anterior + 1)
  }

  function diminuirContador(){
    setContador(anterior => anterior - 1)
  }

  function zerarContador(){
    setContador(0)
  }

  function alterarVisualizacaoDoContador(){
    setMostrarContador(!mostrarContador)
  }

  return (
    <div>
      <button onClick={alterarVisualizacaoDoContador}>
        Alterar Visualização do Contador
      </button>

      {mostrarContador && (
        <>
          <h3>{contador}</h3>
          <button onClick={aumentarContador}> + </button>
          <button onClick={diminuirContador}> - </button>
          <button onClick={zerarContador}>Zerar Contador</button>
        </>
      )}

    </div>
  )
}

export default Contador
