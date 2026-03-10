import { PATH } from '@src/common/constants/path.constant.ts'
import { navbarTabs } from '@src/modules/layouts/header/navbar-tabs.ts'
import Button from '@src/modules/ui/buttons/Button.tsx'
import Logo from '@src/modules/ui/logo/Logo.tsx'
import { LogInIcon } from 'lucide-react'
import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
  const navigate = useNavigate()

  const signUpHandler = () => navigate(PATH.AUTH)

  return (
    <header
      className={`
        w-full h-[5rem] flex flex-row justify-between items-center align-center backdrop-blur-lg px-3
      `}>
      <div className="pl-3">
        <Logo size="3rem"/>
      </div>

      <nav className="flex flex-row gap-[14vh]">
        {
          navbarTabs.map(tab => (
            <p className="text-lg" key={tab}>
              {tab}
            </p>
          ))
        }
      </nav>

      <Button onClickHandler={signUpHandler}>
        <span className="mr-2">Sign In</span>
        <LogInIcon/>
      </Button>
    </header>
  )
}

export default Header