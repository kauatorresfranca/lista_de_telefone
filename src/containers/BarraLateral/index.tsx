import * as S from './styles'

import ComeToHome from '../../components/BotaoVoltar/index'
import BotaoAdicionar from '../../components/BotaoAdicionar/index'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <BotaoAdicionar></BotaoAdicionar>
          </>
        ) : (
          <ComeToHome />
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
