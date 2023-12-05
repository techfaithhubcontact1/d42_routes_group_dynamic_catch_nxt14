import React from 'react'

export default function Page({ params }: { params: { city: string } }) {
  return (
    <div>restaurants Page:- {params.city}</div>
  )
}
