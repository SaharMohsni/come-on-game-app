/* eslint-disable no-undef */
import React from 'react';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash';
import { useLocation } from 'react-router-dom';

import './games-pages-header.scss';

import { selectUserInfo } from '../../../features/selectors/profile.selectors';
import { logoutUser } from '../../../features/actions/profile.actions';
import routes from '../../../app/routes/routes';

const GamesPagesHeader = ({ setFilterByGameName }) => {
	const dispatch = useDispatch();
	const playerInfo = useSelector(selectUserInfo);
	const location = useLocation();
	const handleLogOut = () => {
		if (!isEmpty(playerInfo)) {
			dispatch(logoutUser({ username: playerInfo.username }));
		}
	};
	const onSearch = (e) => setFilterByGameName(e.target.value);

	const renderPageContent = () => {
		if (!isEmpty(playerInfo)) {
			return (
				<div>
					<div className="ui list games-pages-header__data-container global-flex-h-start-v-center">
						<div className="player item">
							<img
								className="ui avatar image"
								src={require(`../../../assets/${playerInfo.avatar}`)}
								alt="avatar"
							/>

							<div className="content">
								<div className="header">
									<b className="name"> {playerInfo.name}</b>
								</div>
								<div className="description event">{playerInfo.event}</div>
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

	const renderInputSearch = () => {
		if (location.pathname === routes.GAMES_LIST.path) {
			return (
				<div className="games-pages-header__filter-by-search">
					<Input placeholder="Search Game" suffix={<SearchOutlined />} onChange={(e) => onSearch(e)} />
				</div>
			);
		}
	};
	return (
		<div className="games-pages-header global-flex-h-between-v-start">
			{renderPageContent()}
			{renderInputSearch()}
		</div>
	);
};
GamesPagesHeader.propTypes = {
	/**
     * Get category filter data
     */
	setFilterByGameName: PropTypes.func
};
export default GamesPagesHeader;
