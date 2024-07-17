import BarraLateral from '../../containers/BarraLateral'
import Cadastro from '../../containers/Cadastro'

const Cadastrar = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />
      <Cadastro />
    </>
  )
}

export default Cadastrar
