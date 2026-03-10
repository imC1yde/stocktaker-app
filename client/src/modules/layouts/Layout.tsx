import type { Nullable } from '@src/common/types/nullable.type.ts'
import Footer from '@src/modules/layouts/footer/Footer.tsx'
import Header from '@src/modules/layouts/header/Header'
import { type FC, type ReactNode } from 'react'

interface ILayoutProps {
  readonly children?: Nullable<ReactNode>
}

const Layout: FC<ILayoutProps> = (props) => {
  return (
    <div className="w-full h-dvh bg-primary-bg">
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout