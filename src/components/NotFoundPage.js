import React from 'react'

import './NotFoundPage.css'

const NotFoundPage = ({lang}) => {
  return (
      <div className='NotFoundPage'>
        <h1>
          {lang === 'fr' ?
            '/!\\ Erreur 404 /!\\'
            : '/!\\ 404 Error /!\\'}
        </h1>
        <img src={require('../pictures/404.png')} alt='rabbid picture' />
        <p>
          {lang === 'fr' ?
            'Oups...Cette page n\'existe pas !'
            : 'Oops... This page does not exist !'}
        </p>
      </div>
  )
}
export default NotFoundPage
