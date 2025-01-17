import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Sidebar from './components/sidebar'
export default function WebLayout() {
  return (
    <>
     <Header/>
    
       <Sidebar/>
       <main className='p-6  flex-1 ml-[250px]'>
         <Outlet/>
       </main>
    </>
  )
}
