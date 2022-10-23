import React from 'react'
import "./Error.css"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import zuri from '../Vector.png'
import I4G from '../I4G.png'

function Error() {
  return (
    <div className='container'>
      <div className='errorContainer'>
        <p className='errMessage'>404 error</p>
        <h2 className='errTitle'>We can't Find that page</h2>
        <p className='errMessage2'>Sorry, the page you are looking for doesn't exist.</p>
        <div className='buttons'>
          <a className='goLink' href='/'>
            <button className='goBack'> <FontAwesomeIcon icon={faArrowLeft} size="1x" /> Go back</button>
          </a>
          <a className='goLink' href='/'>

            <button className='takeMeHome'>Take me home</button>
          </a>
        </div>
      </div>

      <footer className='footer'>
        <img className='zuri' src={zuri} />
        <span>HNG Internship 9 Frontend Task</span>
        <img className='i4g' src={I4G} />
      </footer>
    </div>
  )
}

export default Error
