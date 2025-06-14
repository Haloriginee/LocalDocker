import Header from 'components/Header'
import React from 'react'

const dashboard = () => {

  const user = {

    name: "Kévin",

  }

  return (

    <main className='dashboard wrapper'>
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destinations"
      />
      Dashboard Contents
    </main>

  )
}

export default dashboard
