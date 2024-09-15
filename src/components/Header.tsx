import React from 'react'
import { BuzzLogo } from './BuzzLogo'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex justify-center py-4 -mb-28'>
        <BuzzLogo className='h-20 z-10 cursor-pointer text-sky-800'/>
    </header>
  )
}