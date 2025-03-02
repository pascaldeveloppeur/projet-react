import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <section className="container mx-auto">
        <header>header</header>
        <main>
            <Outlet />
        </main>
      
    </section>
  )
}

export default Dashboard
