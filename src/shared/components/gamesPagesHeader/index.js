/* eslint-disable no-undef */
import React from 'react';
import { Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LeftOutlined } from '@ant-design/icons';
import './games-pages-header.scss';

import { selectUserInfo, selectPlayerUserName } from '../../../features/selectors/profile.selectors';
import { isEmpty } from 'lodash';
import { logoutUser } from '../../../features/actions/profile.actions';
const GamesPagesHeader = () => {
	const dispatch = useDispatch();
	const playerInfo = useSelector(selectUserInfo);
	const userName = useSelector(selectPlayerUserName);

	const handleLogOut = () => {
		dispatch(logoutUser({ username: userName }));
	};
	const renderPageContent = () => {
		if (!isEmpty(playerInfo)) {
			return (
				<div>
					<div className="games-pages-header__data-container global-flex-h-start-v-center">
						<Avatar
							size={{
								xs: 24,
								sm: 32,
								md: 40,
								lg: 64,
								xl: 64,
								xxl: 64
							}}
							src={require(`../../../assets/${playerInfo.avatar}`)}
						/>
						<div className="games-pages-header__data-container__player-details">
							<div className="games-pages-header__data-container__player-details__username">
								{playerInfo.name}
							</div>
							<div className="games-pages-header__data-container__player-details__last-event">
								{playerInfo.event}
							</div>
						</div>
					</div>
					<div className="games-pages-header__logout-button global-button">
						<Button icon={<LeftOutlined />} onClick={() => handleLogOut()}>
							Log out
						</Button>
					</div>
				</div>
			);
		}
		return <div />;
	};
	return <div className="games-pages-header">{renderPageContent()}</div>;
};
export default GamesPagesHeader;
