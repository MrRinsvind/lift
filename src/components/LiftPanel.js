import React,{Component} from 'react'
import LiftButton from './LiftButton'
import {levels} from '../constants'
class LiftPanel extends Component{
    render(){
        const liftButtons = levels.map((level)=>(
            <li className="lift-level" key={'l'+level.num}>
                <LiftButton num={level.num}/>
            </li>
        ))
        return(
            <div className="lift-panel">
                {liftButtons}
            </div>
        )
    }
}

export default LiftPanel