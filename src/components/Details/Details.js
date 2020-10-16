import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Main from '../Main';
import './details.css';



const Details = ({
	name,
	links,
	details
}) => {
	const history = useHistory();

	return (
		<>
			<Main title={name}/>
			<main className="details">
				<div className="container">
					<div className="details-row">
						<div className="details-image">
							<img src={links.patch.small} alt=""/>
						</div>
						<div className="details-content">
							<p className="details-description">{details}</p>
						</div>
					</div>
					<div>
						<iframe className="details-youtube" width="560" height="315" src={`https://www.youtube.com/embed/${links.youtube_id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>
				<a onClick={history.goBack} className="button button-back">GO BACK</a>
			</main>
		</>
	
	);
}

export default Details;