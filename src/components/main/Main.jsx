import WindowNote from '../windowNote/WindowNote'
import './style.scss'
export default function Main() {
	return (
		<main className='main'>
			<WindowNote />
			<div className='null'>
				<span className='null__title'>Заметок нет</span>
			</div>
		</main>
	)
}
//разобраться с выводом того или иного контента
