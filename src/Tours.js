import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
	const { tours } = props;
	const { removeTour } = props;
	return (
		<section>
			<div className="title">
				<h2>Our tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{tours.map((tour) => (
					<Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
				))}
			</div>
		</section>
	);
};

export default Tours;
