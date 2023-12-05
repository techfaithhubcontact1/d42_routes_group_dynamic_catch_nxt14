import React from 'react'
import './city.css'

export default function Layout({children} : { children: React.ReactNode}) {
  return (
    <div className="layout2">{children}</div>
  )
}
