import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>meat {params.id}</h1>
    </div>
  )
}

export default page
