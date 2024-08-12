import React from 'react'
import {CurrentBalance} from './easyRoute.js'
const balanceData = () => {
  return (
    <>
    <CurrentBalance 
      cardNumber='xxx.xxx.xxx.xxx'
      balance='$5645.45'
      name='Aneesha Shaju '
      date='08/32'
    />
    <CurrentBalance 
      cardNumber='xxx.xxx.xxx.xxx'
      balance='$9745.45'
      name='Aneesha Shaju '
      date='08/25'
    />
    <CurrentBalance 
      cardNumber='xxx.xxx.xxx.xxx'
      balance='$345.45'
      name='Aneesha Shaju '
      date='08/30'
    />
  </>
    
  )
}

export default balanceData