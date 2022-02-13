import React from 'react';
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../features/selectors/profile.selectors';
import logo from '../../../assets/images/avatar/rebecka.jpg';
const GamesPagesHeader = () => {
	const playerInfo = useSelector(selectUserInfo);

	// const avatarImage = lazy(() => import(`../../../assets/${playerInfo.avatar}`));

	return (
		<div className="games-pages-header">
			<Avatar
				// size={{
				// 	xs: 24,
				// 	sm: 32,
				// 	md: 40,
				// 	lg: 64,
				// 	xl: 80,
				// 	xxl: 100
				// }}
				src={logo}
			/>
			<div className="games-pages-header__player-details">
				<div className="games-pages-header__player-details__username">{playerInfo.name}</div>
				<div className="games-pages-header__player-details__last-event">{playerInfo.event}</div>
			</div>
		</div>
	);
};
export default GamesPagesHeader;
