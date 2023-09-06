import React from 'react'
import notFoundImg from '../../images/img_notFound/404-Pages-1536x768.jpg';
import css from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={css.background} style={{ backgroundImage: `url(${notFoundImg})` }}> 
    </div>
  )
}

export default NotFound