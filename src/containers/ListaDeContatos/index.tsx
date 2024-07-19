import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { useSelector } from 'react-redux'
import { rootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: rootReducer) => state.contatos)

  return (
    <MainContainer>
      <ul>
        {itens.map((contact) => (
          <li key={contact.id}>
            <Contato
              numero={contact.numero}
              nome={contact.nome}
              email={contact.email}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
