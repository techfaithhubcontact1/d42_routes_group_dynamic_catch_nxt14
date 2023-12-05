import React from 'react'

export default function Page({ params }: { params: { ads: string } }) {
  return (
    <div> ...ads page:-  {params.ads}</div>
  )
}
