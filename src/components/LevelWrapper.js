import React,{Component} from 'react'
import {levels} from '../constants'
import LevelLevel from './LevelLevel'

import {connect} from 'react-redux'
import {pressedLevelButton} from '../AC'
class LevelWrapper extends Component{
    render(){
        const levelList = levels.map((level)=>(
            <LevelLevel item={level} key={'r'+level.num} active={this.props.floorState[level.num]} onClick={this.props.pressedLevelButton}/>
        ))
        return(
            <div className="lift-side lift-side--right-side">
               <div className="level-panel">
                   {levelList}
               </div>
            </div>
        )
    }
}

export default connect(state=>({
    floorState:state.lift.floorState
}),{pressedLevelButton})(LevelWrapper)