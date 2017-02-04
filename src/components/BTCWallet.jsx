import React from 'react';
var $ = require('jquery');

import Base from './Base.jsx';


export default class BTCWallet extends Base {
	constructor(props) {
		super(props)
		
	}
	
	



	render() {
	
		return (
			<div className='section features' id='section2'>
				<div className='inner container-centered text-right'>
						<div className=' animated '>
							<h1 className='content-title'>Learn Through Using</h1>
							<p className='content wallet'>In early 2014, MIT indirectly inspired this movement and gave away $100 worth of Bitcoin to each of it’s <a id='mit' href='https://techcrunch.com/2014/04/29/mits-bitcoin-club-to-give-100-in-btc-to-every-student/'>students</a>. We agree that the best way to learn about something is by using it, and we think everybody should have that opportunity.</p>
						</div>
				</div>
			</div>	
		)
	}
}
