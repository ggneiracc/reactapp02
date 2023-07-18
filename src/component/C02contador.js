import React, { Fragment, useState } from 'react'

const C02contador = () => {
    const[numero, setNumero] = useState(0);

    const aumentar = () =>{
        setNumero(numero + 1);
    }
  return (
    <Fragment>
      <h3>Mi segundo componente {numero}</h3>
      <button onClick={aumentar}>Aumentar</button>
    </Fragment>
  )
}

export default C02contador;
