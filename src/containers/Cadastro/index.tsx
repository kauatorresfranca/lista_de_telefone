import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { MainContainer, Nome } from '../../styles'

import Contato from '../../models/contato'
import { cadastrar } from '../../store/reducers/contato'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Contato(nome, email, numero, 4)

    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Nome>Novo Contato</Nome>
      <S.Form onSubmit={cadastrarTarefa}>
        <S.Input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Nome"
        />
        <S.Input
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="Email"
        />
        <S.Input
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
          placeholder="Numero de numero"
        />
        <S.botaoSalvar type="submit">Cadastrar</S.botaoSalvar>
      </S.Form>
    </MainContainer>
  )
}

export default Cadastro
