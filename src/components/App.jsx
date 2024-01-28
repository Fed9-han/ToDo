
import ButtonText from './buttons/ButtonText'
import ButtonAdd from './buttons/ButtonAdd'
import ButtonDell from './buttons/ButtonDell'



function App() {
	return (
		<div className='container'>
			<ButtonText value='Да' />
			<ButtonText value='Нет' />
			<ButtonText value='Сохранить' />
			<ButtonText value='Отмена' />
			<ButtonAdd />
			<ButtonDell />


		</div>
	)
}

export default App
