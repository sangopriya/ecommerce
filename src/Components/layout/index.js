import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className='flex-col flex gap-3 '>
      <div>
        <Header/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
