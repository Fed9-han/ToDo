import ButtonText from '../buttons/ButtonText'
import Input from '../inputs/Input'
import TextArea from '../inputs/TextArea'
import './style.scss'
export default function WindowEdit() {
	return (
		<article className='window-edit'>
			<Input placeholder='Изменение темы' />
			<TextArea />
			<div className='window-edit__btns'>
				<ButtonText value='Отмена' />
				<ButtonText value='Сохранить' />
			</div>
		</article>
	)
}
