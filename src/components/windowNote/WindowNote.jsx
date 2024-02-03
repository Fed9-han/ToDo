import ButtonDell from '../buttons/ButtonDell'
import './style.scss'
export default function WindowNote() {
	const todos = [
		{
			title: 'Сделать домашнюю работу по алгебре',
			description:
				'Изучить Числовые выражения. Алгебраические выражения. Математический язык. Математические модели реальных ситуаций. Линейное уравнение с одной переменной. Алгоритм решения. Координатная прямая. Числовые промежутки.',
		},
		{
			title: 'Проверочная работа',
			description:
				'Проверочная работа за 7 класс по русскому языку пройдет с 15 марта по 21 мая. Точные дата и время зависят от руководства школы, но им рекомендуют ставить ВПР в расписание на время 2-4 уроков.',
		},
	]
	return (
		<article className='note'>
			<div className='note__content'>
				<div className='note__text'>
					<h2 className='note__title'>{todos[0].title}</h2>
					<p className='note__description'>{todos[0].description}</p>
				</div>
				<div className='note__btn'>
					<ButtonDell />
				</div>
			</div>
		</article>
	)
}
