import type { Nullable } from '@src/common/types/nullable.type.ts'
import Footer from '@src/modules/layouts/footer/Footer.tsx'
import Header from '@src/modules/layouts/header/Header.tsx'
import { type FC, type ReactNode } from 'react'

interface ILayoutProps {
  readonly children?: Nullable<ReactNode>
}

const Layout: FC<ILayoutProps> = (props) => {
  return (
    <div className="w-full min-h-dvh flex flex-col bg-primary-bg antialiased">
      <Header/>

      <main className="flex-1 w-full flex flex-col pt-20">
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          {props.children}
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Layout