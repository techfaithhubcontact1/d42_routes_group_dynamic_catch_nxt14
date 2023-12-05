// 1. import area
import './layout1.css'
import React from 'react'

export default function Layout({children} : { children: React.ReactNode}) {
  return (
    <div className="layout1">{children}</div>
  )
}
