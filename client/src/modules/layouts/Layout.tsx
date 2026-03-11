import type { Nullable } from '@src/common/types/nullable.type.ts'
import Footer from '@src/modules/layouts/footer/Footer.tsx'
import Header from '@src/modules/layouts/header/Header'
import { type FC, type ReactNode } from 'react'

interface ILayoutProps {
  readonly children?: Nullable<ReactNode>
}

const Layout: FC<ILayoutProps> = (props) => {
  return (
    <div className="w-full h-dvh min-h-dvh bg-primary-bg flex flex-col">
      <Header/>
      <div className="flex-1">
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout