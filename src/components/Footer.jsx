import { Link } from 'react-router-dom'
import GithubLogo from '../assets/GithubLogo.svg'
import linkedInLogo from '../assets/linkedInLogo.svg'


function Footer() {
  return (
    <div className=' bg-slate-600 w-full flex justify-center px-12 gap-20 py-4 items-center max-[426px]:flex-col-reverse max-[426px]:gap-2'>
      <div className='flex flex-[0.25] justify-center'>Made with &#9829;</div>
      <div className='flex flex-[0.75] justify-center gap-4'>
        <Link to='https://github.com/SayanSutradhar1' target='_blank'>
          <img src={GithubLogo} alt="" className='max-h-[30px]'/>
        </Link>
        <Link to='https://www.linkedin.com/in/sayan-sutradhar-041957257' target='_blank'>
          <img src={linkedInLogo} alt="" className='max-h-[30px]'/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
