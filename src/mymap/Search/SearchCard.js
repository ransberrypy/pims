import React from 'react';

function SearchCard(props) {
    const {name,property_type}=props
	return (
		<div className="card card-stats bg-card mb-3">
			<div className="card-body">
				<div className="justify-content-center">
					<div className="search-content">
						<p className="">{name}</p>
						<p className="card-category text-white">{property_type}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchCard;
