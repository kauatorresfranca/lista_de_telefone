import styled from 'styled-components'
import { Botao } from '../../components/Contato/styles'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
`

export const Input = styled.input`
  border-radius: 8px;
  boder-color: #666666;
  padding: 8px;
  backgound-color: #fff;
  font-weight: bold;
  color: #666666;
  width: 100%;
  margin-bottom: 16px;
`

export const Descricao = styled.textarea`
  border-radius: 8px;
  boder-color: #666666;
  padding: 8px;
  backgound-color: #fff;
  font-weight: bold;
  color: #666666;
  width: 100%;
  resize: none;
  margin: 16px 0;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
    margin-left: 6px;
  }
`

export const botaoSalvar = styled(Botao)`
  background-color: green;
`
