import React from 'react';
import PropTypes from 'prop-types';

import TopBar from './topBar';
import Footer from './footer/';
// import './example.scss'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<div>
			<TopBar />
			{children}
			<Footer />
		</div>
	);
};
Layout.prototype = {
	/**
   *
   */
     children: PropTypes.node.isRequired,
};

export default Layout;
