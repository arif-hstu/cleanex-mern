import React from 'react';

import MainHeader from '../MainHeader/MainHeader';
import Services from '../Services/Services';
import ExpertTeam from '../ExpertTeam/ExpertTeam';
import Partners from '../Partners/Partners';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';

function Home() {
	return (
		<div>
			<MainHeader /> 
			<Services /> 
			<ExpertTeam />
			<Partners />
			<Review />
			<Footer />
		</div>
	)
}

export default Home; // exported to App