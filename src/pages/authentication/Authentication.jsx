import React from 'react'
import LoginForm from '../../components/authentication/LoginForm';
import './authentication.scss'

const Authentication = () => {
    return (
		<div className="authentication global-flex-h-center-v-center">
			<LoginForm />
		</div>
	);
}


export default Authentication