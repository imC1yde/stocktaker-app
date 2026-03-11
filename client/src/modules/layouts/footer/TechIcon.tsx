import { Arrow, Content, Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'
import { type FC } from 'react'

interface ITechIconProps {
  readonly filename: string,
  readonly hint: string,
  readonly color: string
}

const TechIcon: FC<ITechIconProps> = (props) => {
  return (
    <Provider>
      <Root>
        <Trigger asChild>
          <motion.div
            style={{ maskImage: `url(./src/assets/${props.filename})` }}
            className="size-9 bg-icon"
            whileHover={{
              backgroundColor: `${props.color}`
            }}
            transition={{
              duration: 0.3,
              ease: 'easeIn'
            }}
          >
          </motion.div>
        </Trigger>

        <Portal>
          <Content
            side="top"
            sideOffset={8}
            className="z-50 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg shadow-xl select-none animate-in fade-in zoom-in-95 duration-200">
            {props.hint}
            <Arrow className="fill-slate-900 stroke-slate-800 stroke-1"/>
          </Content>
        </Portal>
      </Root>
    </Provider>
  )
}

export default TechIcon