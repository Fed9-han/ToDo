import ButtonText from '../buttons/ButtonText'
import './style.scss'
export default function AlertDelete () {
  return (
		<article className='alert'>
			<h2 className='alert__title'>Удалить заметку?</h2>
			<div className='alert__questions'>
				<ButtonText value='Да' />
				<ButtonText value='Нет' />
			</div>
		</article>
	)
}