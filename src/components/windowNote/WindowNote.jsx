import ButtonDell from '../buttons/ButtonDell'
import './style.scss'
export default function WindowNote() {
	return (
		<article className='note'>
			<div className='note__content'>
				<div className='note__text'>
					<h2 className='note__title'>Далеко-далеко за словесными горами в стране.</h2>
					<p className='note__description'>
						Далеко-далеко за словесными горами в стране гласных и согласных
						живут рыбные тексты!
					</p>
				</div>
				<div className='note__btn'>
					<ButtonDell />
				</div>
			</div>
		</article>
	)
}
