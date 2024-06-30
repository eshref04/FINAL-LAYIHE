import React from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet } from 'react-router'

const AdminRoot = () => {
  return (
    <div className='d-flex'>
      <Header/>
      <Outlet/>
      
    </div>
  )
}

export default AdminRoot
