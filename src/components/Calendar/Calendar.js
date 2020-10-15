import React, { useState, useEffect} from 'react';
import './calendar.css';
import Main from '../Main';
import FetchData from '../../service/FetchData';
import { Link } from 'react-router-dom';

const fetchData = new FetchData();

const Calendar = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData.getLaunches()
			.then(launches => setData(launches))
	}, []);

	return (
		<>
			<Main />
			<section class="calendar">
				<div class="container">
					<ul class="calendar-list">
						
						{data.map(item => (
							<li key={item.id} class="calendar-item">
								<article class="launches">
									<div class="launches-image">
										<img src={item.links.patch.small} alt=""/>
									</div>
									<div class="launches-content">
										<h2 class="launches-title">{item.name}</h2>
										<Link to="./details" class="button launches-details">Подробнее</Link>
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