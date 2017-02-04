import React from 'react';
import Base from './Base.jsx'
import api from '../scripts/api.js';



export default class LandingHeader extends Base{
		constructor(props){
			super(props)
			this.state = {
				btcValue: ''
			}
		}
		componentWillMount(){
			this.getBtc()
		}
		getBtc(){
			api.get('http://api.coindesk.com/v1/bpi/currentprice.json').then( res =>{
				
				var btcValue = res['bpi']['USD']['rate']
				btcValue = btcValue.slice(0,btcValue.length - 2)

				this.setState({
					btcValue: btcValue
				})
			});

			
		}
	render(){
		return(
					<div className='header'>
						<div className='flex-row header-2'>
							<img className='setcoins-logo' src='http://d1wbxby8dwa4u.cloudfront.net/namecheap/setcoins-logo-white.png'></img>
							<h1 id='setcoins-landing-header'>Setcoins</h1>
						</div>
						<h1 id='btc-value'>1 BTC  = ${this.state.btcValue}</h1>
					</div>
			)
		}
	}





