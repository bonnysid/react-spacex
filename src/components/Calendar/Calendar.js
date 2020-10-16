import React, { useState, useEffect} from 'react';
import './calendar.css';
import Main from '../Main';
import FetchData from '../../service/FetchData';
import { Link } from 'react-router-dom';

const fetchData = new FetchData();

const Calendar = ({updateCard}) => {

	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData.getLaunches()
			.then(launches => setData(launches))
	}, []);

	return (
		<>
			<Main />
			<section className="calendar">
				<div className="container">
					<ul className="calendar-list">
						
						{data.map(item => (
							<li key={item.id} className="calendar-item">
								<article className="launches">
									<div className="launches-image">
										<img src={item.links.patch.small} alt=""/>
									</div>
									<div className="launches-content">
										<h2 className="launches-title">{item.name}</h2>
										<Link onClick={() => updateCard(item)} to="./details" className="button launches-details">Подробнее</Link>
									</div>
								</article>
							</li>
						))}
	
					</ul>
				</div>
			</section>
		</>
	
	);
}

export default Calendar;