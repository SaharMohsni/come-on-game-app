import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';


const PrivateRoutes = () => {
	return <Route exact path={routes.GAMES_LIST.path} render={(props) => <routes.GAMES_LIST.component {...props} />} />;
};

export default PrivateRoutes