import { IconCopy, IconVk, IconFacebook, IconTg, IconWhatsApp} from '../icons/IconSocials'

const arrIcon = [IconCopy, IconVk, IconFacebook, IconTg, IconWhatsApp]

export default function ButtonSocial() {

  arrIcon.forEach((item) => {
    	return <button className='btn-social'>{item}</button>
  })

}

//Решить проблему с выводом иконок социальных сетей
