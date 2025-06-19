'use client'
import React from 'react'
import { motion, Variants } from 'motion/react';

export default function Inner({children}: Readonly<{children: React.ReactNode;}>) {
    const anim = (variants:Variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 1
        }
    }
  return (
    <motion.div {...anim(opacity)}>
        {children}
    </motion.div>
  )
}
