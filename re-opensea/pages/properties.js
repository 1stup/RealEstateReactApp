import React from 'react'
import { useRouter } from 'next/router'

const Properties = () => {
  const router = useRouter()
  console.log(router.query)
  console.log(router.query.properties)
  return (
    <div>properties</div>
  )
}

export default Properties