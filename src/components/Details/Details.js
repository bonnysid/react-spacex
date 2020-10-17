import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Main from '../Main';
import './details.css';
import useLaunches from '../hooks/useLaunches';
import Youtube from 'react-youtube';



const Details = (props) => {
	const [launch, setLaunch] = useState(null);
	const { getLaunch } = useLaunches(); 
	const history = useHistory();

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id))
	}, [getLaunch, props.match.params.id]);

	if (!launch) return <div>Загрузка...</div>;
	const { name, links, details } = launch;

	return (
		<div>
			<Main title={name}/>
			<main className="details">
				<div className="container">
					<div className="details-row">
						<div className="details-image">
							<img src={links.patch.small} alt={name}/>
						</div>
						<div className="details-content">
							<p className="details-description">{details}</p>
						</div>
					</div>
					<Youtube className='details-youtube' videoId={links.youtube_id}/>
				</div>
				<div onClick={history.goBack} className="button button-back">GO BACK</div>
			</main>
		</div>
	
	);
}

export default Details;