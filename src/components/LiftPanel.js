import React,{Component} from 'react'
import LiftButton from './LiftButton'
import {connect} from 'react-redux'
import {pressedLiftButton} from '../AC'
import {levels} from '../constants'
class LiftPanel extends Component{
    pickLevel = (id) =>{
        const {pressedLiftButton,levelState}=this.props
        pressedLiftButton(id,levelState)
    }
    render(){
        const liftButtons = levels.map((level)=>(
            <li className="lift-level" key={'l'+level.num}>
                <LiftButton
                    num={level.num}
                    pickLevel={this.pickLevel}
                    picked={this.props.levelState.indexOf(+level.num)!==-1}
                    active={+this.props.currentLevel===+level.num}
                    open={this.props.openThisLevel}
                />
            </li>
        ))
        return(
            <div className="lift-panel">
                {liftButtons}
            </div>
        )
    }
}
export default connect(state=>({
    currentLevel:state.lift.currentLevel,
    levelState:state.lift.levelState,
    openThisLevel:!state.lift.moving,
    setTime:state.lift.setTime
}),{pressedLiftButton})(LiftPanel)