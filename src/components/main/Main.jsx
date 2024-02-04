import { todos } from '../helpers/todo-list'
import WindowNote from '../windowNote/WindowNote'

import './style.scss'
export default function Main() {
	if (!todos) {
		return (
			<main className='main'>
				<div className='null'>
					<span className='null__title'>Заметок нет</span>
				</div>
			</main>
		)
	} else {
		return todos.map(item => {
			return (
				<WindowNote
					key={item.title}
					title={item.title}
					description={item.description}
				/>
			)
		})
	}
}
//разобраться с правильным выводом контента, т.е. если todos путой выводить заметок нет иначе winodows note
