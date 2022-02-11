import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import './app/global-styles.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.min.css';
import configureStore from './features/store';
const store = configureStore({});
let profile = {
  local:{isSignedIn:false},
  data : {userInfo:{}}
}
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App profile={profile}/>
		</Router>

	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
