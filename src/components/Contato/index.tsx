import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contato'
import ContatoClass from '../../models/contato'

type Props = ContatoClass

const Tarefa = ({
  nome: nomeOriginal,
  email: emailOriginal,
  numero: numeroAntigo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (numeroAntigo.length > 0) {
      setNumero(numeroAntigo)
    }
  }, [emailOriginal, nomeOriginal, numeroAntigo])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setNome(nomeOriginal)
    setNumero(numeroAntigo)
  }
  return (
    <S.Card>
      <label htmlFor="nome">nome:</label>
      <S.Input
        id="nome"
        disabled={!estaEditando}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label htmlFor="email">email:</label>
      <S.Input
        id="email"
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="numero">numero:</label>
      <S.Input
        id="numero"
        disabled={!estaEditando}
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.botaoSalvar
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                dispatch(
                  editar({
                    nome,
                    email,
                    numero,
                    id
                  })
                ),
                  setEstaEditando(false)
              }}
            >
              Salvar
            </S.botaoSalvar>
            <S.botaoCancelarRemover onClick={() => cancelarEdicao()}>
              Cancelar
            </S.botaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.botaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.botaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
