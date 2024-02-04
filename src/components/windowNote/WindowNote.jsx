import ButtonDell from '../buttons/ButtonDell'
import './style.scss'
export default function WindowNote({title, description}) {
	return (
		<article className='note'>
			<div className='note__content'>
				<div className='note__text'>
					<h2 className='note__title'>{title}</h2>
					<p className='note__description'>{description}</p>
				</div>
				<div className='note__btn'>
					<ButtonDell />
				</div>
			</div>
		</article>
	)
}
