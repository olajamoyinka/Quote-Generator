import React, { useEffect } from 'react'
import './Quote.css'
import Quotes from './quote.json'
import background_video_2 from "../Assets/background_video_2.mp4"


export const Quote = () => {
  const quotes = Quotes.quote;

  

  const shuffle = () => {
    let random = Math.floor(Math.random()*quotes.length)
    let quote = quotes[random]
    console.log(quote)
    quoteGenerator(quote)

  }

  const quoteGenerator = (myQuote) => {
    const element = document.getElementsByClassName("the-quotes")
    const author = document.getElementsByClassName('author')

    element[0].innerHTML = myQuote.content
    author[0].innerHTML = myQuote.author

  }



  return (
    <div className='container'>

      {/* <VideoBG></VideoBG> */}
      <div className="background">
        <div className="overlay">
          <video src={background_video_2} autoPlay loop muted></video>
        </div>
      </div>


      <div className='quote-container'>
        <div className="quotes">

          <blockquote className="the-quotes">This is Jaymighty's quote generator. Are you looking for a quote to motivate or inspire you, or even to post on your social media status or timeline. Welcome, You're in the right place</blockquote>
          <p className='author '>Jaymighty</p>
        </div>
      </div>

      <div className="tile">
        <button onClick={()=>{shuffle()}} className=''>Generate quote</button>
      </div>

    </div>
  )
}


// const VideoBG = () => {


//     return (
//       <video src={background_video_2} autoplay muted loop>
//       <source  type="video/mp4"/>
//     </video>
//     )
// }