import { frameworks } from '@src/modules/layouts/footer/frameworks.ts'
import { links } from '@src/modules/layouts/footer/links.ts'
import TechIcon from '@src/modules/layouts/footer/TechIcon.tsx'
import { AnimatePresence } from 'framer-motion'
import { type FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
  return (
    <footer className="w-full pb-12 px-4 font-light text-sm flex flex-col items-center ">
      <div className="w-full max-w-2xl overflow-hidden">
        <table className="mx-auto border-separate border-spacing-y-1 text-xs font-normal">
          <tbody className="divide-y divide-transparent">
          {links.map(([ desc, url ], i) => (
            <tr
              key={i}
              className="group">
              <td className="w-1/2 py-1 px-4 whitespace-nowrap text-faded-text/70 text-right sm:text-sm sm:px-4">
                {desc}
              </td>
              <td className="w-1/2 py-1 px-4 text-left cursor-pointer truncate max-w-[150px] sm:max-w-none sm:px-4">
                <Link
                  to={url}
                  className="block truncate max-w-[120px] xs:max-w-[180px] sm:max-w-none sm:text-sm italic text-faded-text/70 hover:font-medium hover:text-faded-text/100 transition-colors">
                  {url}
                </Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      <p className="my-4 text-faded-text/70 uppercase tracking-[0.2em] text-[9px] sm:text-[10px] font-bold">Developed
        with</p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
        <AnimatePresence mode="popLayout">
          {frameworks.map(([ filename, hint, color ]) => (
            <TechIcon filename={filename} hint={hint} color={color} key={hint}/>
          ))}
        </AnimatePresence>
      </div>
    </footer>
  )
}

export default Footer