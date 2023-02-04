import { motion } from 'framer-motion';
import { Box, Center } from '@chakra-ui/react';
import './components/css/hero.css';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Hero() {
  return (
    <div className='hero'>
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {['Learn', 'evolve', 'proceed', 'succeed'].map(index => (
          <motion.li key={index} className="item" variants={item}>
            {index}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
