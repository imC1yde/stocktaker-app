import { motion } from 'framer-motion'
import { type FC } from 'react'

interface INavbarTabProps {
  readonly label: string
}

const NavbarTab: FC<INavbarTabProps> = (props) => {
  return (
    <motion.div
      className="relative cursor-pointer py-2 group"
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      <p className="text-sm font-medium text-primary-text group-hover:text-white transition-colors duration-300 uppercase">
        {props.label}
      </p>

      <motion.div
        variants={{
          initial: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 }
        }}
        transition={{ duration: 0.3, ease: "circOut" }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-main-glow to-transparent origin-center"
      />
    </motion.div>
  )
}

export default NavbarTab