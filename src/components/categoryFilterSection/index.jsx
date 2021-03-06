import React from 'react';
import PropTypes from 'prop-types';
import './category-filter-section.scss';

const CategoryFilterSection = ({ categoriesList, setFilterByCategoryId, filterByCategoryId }) => {
	// Filter by category function
	const handleFilterByCategory = (categoryId) => {
		setFilterByCategoryId(categoryId);
	};

	// Render categories
	const renderCategories = () => {
		return categoriesList.map((category) => {
			return (
				<div
					className={`${filterByCategoryId === category.id &&
						'is-clicked'} category item category-filter-section__filter-section__content__filter-element`}
					key={category.id}
					onClick={() => handleFilterByCategory(category.id)}
				>
					<div className="content ">
						<div className="header">{category.name}</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div className="four wide column">
			<h3 className="ui dividing header category-filter-section__filter-section__title">Categories</h3>
			<div className="ui selection animated list category items category-filter-section__filter-section__content">
				{renderCategories()}
			</div>
		</div>
	);
};
CategoryFilterSection.propTypes = {
	/**
     * Categories list
     */
	categoriesList: PropTypes.array.isRequired,
	/**
     * Get category filter data
     */
	setFilterByCategoryId: PropTypes.func,
	/**
     * filter key
     */
	filterByCategoryId: PropTypes.number
};

export default CategoryFilterSection;
