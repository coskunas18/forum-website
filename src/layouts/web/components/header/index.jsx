import React from 'react'
import Logo from './logo'
import Search from './search'
import Auth from './auth'

export default function Header() {
  return (
    <header className='h-16 sticky top-0 border-b border-sky-800/30 bg-gray-100 flex justify-between items-center px-4'>
        <Logo/>
        <Search/>
        <Auth/>
    </header>
  )
}
