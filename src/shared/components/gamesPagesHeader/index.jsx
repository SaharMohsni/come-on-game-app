/* eslint-disable no-undef */
import React from 'react';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import './games-pages-header.scss';

import { selectUserInfo, selectPlayerUserName } from '../../../features/selectors/profile.selectors';
import { isEmpty } from 'lodash';
import { logoutUser } from '../../../features/actions/profile.actions';

const GamesPagesHeader = ({ setFilterBy }) => {
	const dispatch = useDispatch();
	const playerInfo = useSelector(selectUserInfo);
	const userName = useSelector(selectPlayerUserName);

	const handleLogOut = () => {
		dispatch(logoutUser({ username: userName }));
	};
	const onSearch = (e) => setFilterBy(e.target.value);
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
	return (
		<div className="games-pages-header global-flex-h-between-v-start">
			{renderPageContent()}
			<div className="games-pages-header__filter-by-search">
				<Input placeholder="Search Game" suffix={<SearchOutlined />} onChange={(e) => onSearch(e)} />
			</div>
		</div>
	);
};
GamesPagesHeader.propTypes = {
	/**
     * Get category filter data
     */
	setFilterBy: PropTypes.func.isRequired
};
export default GamesPagesHeader;
