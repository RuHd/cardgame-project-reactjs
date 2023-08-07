import React from 'react'
import '../components/styles/score.scss'

const Score = ({wins,losses}) => {
  return (
    <section className='score'>
        <span>Battles Won: {wins}</span>
        <span>Battles Lost: {losses}</span>
    </section>
  )
}

export default Score