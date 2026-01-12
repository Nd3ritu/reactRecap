import React from 'react'

const InvesstingCom = ({title, pubDate, link,name }) => {
   const formatted = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  }

  const date = new Date(pubDate).toLocaleDateString('en-US',formatted)


  return (
    <>
    </>
  )
}

export default InvesstingCom