/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import './game-card.scss';
const GameCard = ({ game }) => {
	const { icon, name, description } = game;
	const navigate = useNavigate();
	const handlePlayGame = () => navigate(`/game-list/${name}`);
	return (
		<div className="game-card ">
			<div className="game-card__image-container">
				<img src={require(`../../../assets/${icon}`)} alt="game-image" />
			</div>
			<div className="game-card__details global-flex-column-h-any-v-between">
				<div className="game-card__details__data">
					<div className="game-card__details__data__name">{name}</div>
					<div className="game-card__details__data__description">{description}</div>
				</div>

				<div className="game-card__details__play-button global-button global-flex-h-end-v-any">
					<Button onClick={() => handlePlayGame()}>
						Play <RightOutlined />
					</Button>
				</div>
			</div>
		</div>
	);
};
GameCard.propTypes = {
	/**
     * Current Profile
     */
	game: PropTypes.object.isRequired
};
export default GameCard;
