import ButtonAdd from './buttons/ButtonAdd'
import ButtonDell from './buttons/ButtonDell'
import ButtonEdit from './buttons/ButtonEdit'
import ButtonInfo from './buttons/ButtonInfo'
import ButtonShare from './buttons/ButtonShare'
import {ButtonCopy, ButtonVk, ButtonFacebook, ButtonTg, ButtonWhatsApp, } from './buttons/ButtonArr'
import ButtonText from './buttons/ButtonText'


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
			<ButtonCopy/>
			<ButtonVk/>
			<ButtonTg/>
			<ButtonWhatsApp/>
			<ButtonFacebook/>
		</div>
	)
}

export default App
