import React from 'react'
import { render } from 'react-dom'
import { Router , Route , browserHistory } from 'react-router'

import App from './components/App'
import ViewImages from './components/ViewImages'
import UploadImg from './components/UploadImg'


render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/upload' component={UploadImg}/>
      <Route path='/viewImages' component={ViewImages}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
