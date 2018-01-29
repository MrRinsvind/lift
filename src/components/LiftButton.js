import React,{Component} from 'react'
import {connect} from 'react-redux'
import {pressedLiftButton} from '../AC'
class LiftButton extends Component{
    state={
        active:false
    }
    handleLiftButton=(ev)=>{
        ev.preventDefault()
        this.setState({
            active:true
        })
        if(!this.props.moving){

            this.props.pressedLiftButton(this.props.currentLevel,this.props.num)
        }

    }
    componentWillUpdate(){
        if(this.state.active){
            this.setState({
                active:false
            })
        }

    }
    getClass = () =>{
        // lift-button--floor-current
        const {num,currentLevel,newLevel,moving} = this.props
        var status = num==currentLevel && moving?'lift-button--floor-move':num==currentLevel?'lift-button--floor-current':num==newLevel||this.state.active?'lift-button--floor-used':''
        return "lift-button "+status
    }
    render(){
        return(
            <button className={this.getClass()} onClick={this.handleLiftButton}>
                {this.props.num}
            </button>
        )
    }
}

export default connect(state=>({
    currentLevel:state.lift.currentLevel,
    newLevel:state.lift.newLevel,
    moving:state.lift.moving
}),{pressedLiftButton})(LiftButton)
