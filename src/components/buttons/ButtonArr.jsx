import {
	IconCopy,
	IconFacebook,
	IconTg,
	IconVk,
	IconWhatsApp,
} from '../icons/Icons'
import './style.scss'

function ButtonCopy() {
	return (
		<button className='btn-social'>
			<IconCopy />
		</button>
	)
}
function ButtonVk() {
	return (
		<button className='btn-social'>
			<IconVk />
		</button>
	)
}
function ButtonTg() {
	return (
		<button className='btn-social'>
			<IconTg />
		</button>
	)
}
function ButtonWhatsApp() {
	return (
		<button className='btn-social'>
			<IconWhatsApp />
		</button>
	)
}
function ButtonFacebook() {
	return (
		<button className='btn-social'>
			<IconFacebook />
		</button>
	)
}

export { ButtonCopy, ButtonFacebook, ButtonTg, ButtonVk, ButtonWhatsApp }
