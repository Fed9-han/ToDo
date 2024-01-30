
import ButtonText from './buttons/ButtonText'
import ButtonAdd from './buttons/ButtonAdd'
import ButtonDell from './buttons/ButtonDell'
import ButtonShare from './buttons/ButtonShare'
import ButtonEdit from './buttons/ButtonEdit'
import ButtonInfo from './buttons/ButtonInfo'
import ButtonSocial from './buttons/ButtonSocial'




function App() {
	return (
		<div className='container'>
			<ButtonText value='Да' />
			<ButtonText value='Нет' />
			<ButtonText value='Сохранить' />
			<ButtonText value='Отмена' />
			<ButtonAdd />
			<ButtonDell />
			<ButtonShare />
			<ButtonEdit />
			<ButtonInfo />
			<ButtonSocial />



		</div>
	)
}

export default App
