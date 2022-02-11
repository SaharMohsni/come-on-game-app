import React from 'react'
import './topBar.scss'

const TopBar = () => {
    return (
		<div className="footer global-page-padding-left-right global-flex-h-center-v-center">
			<div className="footer__copy-rights">©2019 Market</div>
			<div className="dot global-flex-h-center-v-center">
				<span>.</span>
			</div>
			<div className="footer__policy">Privacy Policy</div>
		</div>
	);
}


export default TopBar