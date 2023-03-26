import { useState } from "react"
import styles from "./index.module.css"

function Pessoa(props) {
  const pessoa = props.pessoa
  const [verificado, setVerificado] = useState(false)

  function alterarVerificado(){
    return setVerificado(!verificado)
  }

  return(
    <div className={styles.container}>
      <h3>Nome: {pessoa.nome}</h3>
      <h4>Sexo: {pessoa.sexo}</h4>
      <h4>Idade: {pessoa.idade}</h4>
      <input onClick={alterarVerificado} type="checkbox"/>
      {verificado ?
        <bold>Verificado</bold> :
        <span className={styles.naoVerificado}>Não Verificado</span>}
    </div>

  )
}

export default Pessoa
