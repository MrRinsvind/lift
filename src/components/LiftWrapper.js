import React,{Component} from 'react'
import CurrentLevel from './CurrentLevel'
import LiftPanel from './LiftPanel'
class LiftWrapper extends Component{
    render(){
        return(
            <div className="lift-side lift-side--left-side">
                <CurrentLevel/>
                <LiftPanel/>
            </div>
        )
    }
}

export default LiftWrapper