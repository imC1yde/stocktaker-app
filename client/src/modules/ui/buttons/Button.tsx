import type { Nullable } from '@src/common/types/nullable.type.ts'
import { motion } from 'framer-motion'
import type { FC, ReactNode } from 'react'

interface IButtonProps {
  readonly onClickHandler: (...args: any[]) => void,
  readonly children: Nullable<ReactNode>,
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <motion.button
      onClick={props.onClickHandler}
      className={`
            cursor-pointer flex flex-row items-center justify-center bg-secondary-bg p-2.5 rounded-xl
          `}
      initial={{ outline: "0px solid #000000" }}
      whileHover={{ outline: "2px solid #0B4C8AB1" }}
      transition={{ type: 'tween', duration: 0.2, ease: "easeOut" }}>
      {props.children}
    </motion.button>
  )
}

export default Button