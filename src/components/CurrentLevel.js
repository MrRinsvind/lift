import React,{Component} from 'react'
import {connect} from 'react-redux'
import {checkStatus} from '../AC'
class CurrentLevel extends Component{
    componentDidUpdate(){
        // setTimeout(()=>{
        //     this.props.checkStatus()
        // },500)
        this.props.checkStatus()

    }
    getClass = () =>{
        const {needAction,way} = this.props
        var status
        status =way==='UP'?'current-level--move-up':way==='DOWN'?'current-level--move-down':''
        return 'current-level '+status

    }
    render(){

        return(
            <h2 className={this.getClass()}>{this.props.currentLevel}</h2>

        )
    }
}

export default connect((state)=>({
    currentLevel: state.lift.currentLevel,
    needAction: state.lift.moving,
    way:state.lift.way
}),{checkStatus})(CurrentLevel)