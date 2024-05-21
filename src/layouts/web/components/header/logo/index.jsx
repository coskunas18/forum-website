import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className='font-semibold text-sky-800 text-3xl'>
        ./logo
        <span className='text-xs text-zinc-500 ml-1'>
            v3.0.0
        </span>
    </Link>
  )
}
