import React from 'react';

import MainHeader from '../MainHeader/MainHeader';
import Services from '../Services/Services';
import ExpertTeam from '../ExpertTeam/ExpertTeam';

function Home() {
	return (
		<div>
			<MainHeader /> 
			<Services /> 
			<ExpertTeam />
		</div>
	)
}

export default Home; // exported to App