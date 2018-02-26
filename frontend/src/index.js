import React from 'react'
import ReactDOM from 'react-dom'
import WishListContainer from './containers/WishListContainer'
import './App.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux' 
import reducer from './reducers' 
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';

const logger = store => next => action  => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(/*logger,*/ thunk)
    )
)




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider >
        <div className="o-layout--center">
          <AppBar
          className="u-hidden"
          title="Granting Wishes With Art"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div className="o-layout">
            <div className="o-layout__item u-1/1">
              <h1 className="genie-text u-margin-top-large u-margin-bottom-none">Greetings. I am the drawing genie.</h1>
              <img  className=" u-1/1 u-1/2@desktop o-crop-16by9" src="https://pbs.twimg.com/profile_banners/2499741942/1408307741"/>  
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={WishListContainer} />
          </Switch>
        </div>
      </MuiThemeProvider>

    </BrowserRouter>
  </Provider>

    , document.getElementById('root'));
registerServiceWorker();