import React from 'react';
import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
    let error = useRouteError();
    console.log(error);
  return (
    <div>
      This is my custom Error page 
    </div>
  )
}

export default ErrorPage
