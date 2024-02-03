import Input from '../inputs/Input'
import ButtonAdd from '../buttons/ButtonAdd'
import './style.scss'

export default function Header() {

	return (
		<header className='header'>
			<form className='header__form form-main'>
				<div className='form-main__inputs'>
					<Input placeholder='Заголовок...' />
					<Input placeholder='Описание...' />
				</div>
				<div className='form-main__btn'>
					{' '}
					<ButtonAdd />
				</div>
			</form>
		</header>
	)
}
