import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const axios = require('axios');
const url = 'https://course-api.com/react-tours-project';

function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	// getting the tours data
	const getTours = async () => {
		try {
			setLoading(true);
			const response = await axios.get(url);
			setTours(response.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	useEffect(() => {
		getTours();
	}, []);

	const removeTour = (id) => {
		const newTour = tours.filter((tour) => tour.id !== id);
		setTours(newTour);
	};

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>No tours left</h2>
					<button className="btn" onClick={() => getTours()}>
						REFRESH
					</button>
				</div>
			</main>
		);
	}

	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}

export default App;
