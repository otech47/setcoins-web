import React from 'react';
import Base from './Base.jsx';
import LandingPage from './LandingPage.jsx';
export default class Home extends Base {
    constructor(props) {
        super(props)
        this.onLoad()
    }
    onLoad(){
            console.log($(window).width())
            console.log($(window).height())
    }
    render() {
        return (
        <div>
                <LandingPage/>
        </div>
        )
    }
    }
