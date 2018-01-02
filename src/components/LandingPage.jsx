import React from 'react';
import Base from './Base.jsx';
import LandingHeader from './LandingHeader.jsx'
export default class LandingPage extends Base {
    render(){
        return(
                <div>
                    <div className='landingPage'>
                        <LandingHeader/>
                        <div className='body'>
                            <div className='contentContainer'>
                                <h1>Bloomberg 2.0</h1>
                                <h1>For Cryptocurrencies</h1>
                                <div className='bodyText'>
                                    <div>
                                  Made by crypto-enthusiasts for recreational investors like yourself,
                                    SetCoins is an advanced cryptocurrency & blockchain research platform.
                                    Now that instituational investors are entering the space, how will you keep up?
                                    </div>
                                    <div>
                                    The journey starts with side-by-side comparisons, unique pattern recognition algorithims,
                                     & GitHub data analysis. The iOS app is completey <strong>free</strong> so why not check out what the future holds?
                                    </div>
                                </div>
                                <div className='buttonRow'>
                                    <a href="https://itunes.apple.com/us/app/setcoins/id1153859584?mt=8" target="_blank"><div className='button'>
                                        <div className='buttonTitle'>iOS App</div>
                                    </div></a>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdmuabrWcdKxaq-ecxLWReIibEN767Xz3MOvRsZnEVSukgSAA/viewform?usp=sf_link" target="_blank"><div className='button'>
                                        <div className='buttonTitle'>Beta Register</div>
                                    </div></a>
                                </div>
                            </div>
                            <div className='imgContainer'>
                                <div className='imgBlock'></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}
