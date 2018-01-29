import React,{Component} from 'react'
import {connect} from 'react-redux'
import {pressedLiftButton} from '../AC'
class CurrentLevel extends Component{
    componentDidUpdate(){

        if(this.props.needAction){
            this.props.pressedLiftButton(this.props.currentLevel,this.props.newLevel)
        }
    }
    getClass = () =>{
        const {needAction,way} = this.props
        var status
        if(needAction){
            status =way==='UP'?'current-level--move-up':'current-level--move-down'
            return 'current-level '+status
        }
        return 'current-level'

    }
    render(){

        return(
            <h2 className={this.getClass()}>{this.props.currentLevel}</h2>
        )
    }
}

export default connect((state)=>({
    currentLevel: state.lift.currentLevel,
    newLevel: state.lift.newLevel,
    needAction: state.lift.moving,
    way:state.lift.way
}),{pressedLiftButton})(CurrentLevel)