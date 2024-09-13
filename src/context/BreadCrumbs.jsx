import React from 'react'
import { useLocation } from 'react-router-dom'

function BreadCrumbs() {
location = useLocation

let currentLink =""

const crumbs = location.pathname.split('/').filter(crumb=>{crumb!==' '}).map(crumb=>{
    currentLink += `/${crumb}`;
})


    return (
    <div>BreadCrumbs</div>
  )
}

export default BreadCrumbs