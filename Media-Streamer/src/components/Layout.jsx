import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </>
  )
}