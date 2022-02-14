import React from 'react';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { loadGame } from '../../features/services/games.service';
import routes from '../../app/routes/routes';
import './game-page.scss';
import { selectLaunchedGame } from '../../features/selectors/games.selectors';
const GamePage = () => {
	const navigate = useNavigate();
	const launchedGame = useSelector(selectLaunchedGame);

	const handleGoBack = () => navigate(routes.GAMES_LIST.path);

	// const game = loadGame(getURLCleanPath(launchedGame.code));
	return (
		<div className="game-page global-page-css ">
			<div className="global-button">
				<Button icon={<LeftOutlined />} onClick={() => handleGoBack()}>
					Back to games list
				</Button>
			</div>
			<div id="game-launch" className="game-page__launched-game" />
			<div className="game-page__details">
				<div className="game-page__details__name">{launchedGame.name}</div>
				<p className="game-page__details__description">{launchedGame.description}</p>
			</div>
		</div>
	);
};

export default GamePage;
