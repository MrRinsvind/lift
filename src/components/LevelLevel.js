import React,{Component} from 'react'
import {connect} from 'react-redux'
class LevelLevel extends Component{
    state = {
        up:false,
        down:false
    }
    getClass = type =>{
        let status = this.state[type]?' level-button--status-active':''
        return "level-button level-button--move-"+[type]+status
    }
    handleLevelButton = type => e =>{
        e.preventDefault()
        if(!this.state[type]){
            this.setState({
                [type]:true
            })
        }
    }
    render(){
        return(
            <div className="level-level">
                <span>{this.props.item.num}</span>
                <button className={this.getClass('up')} onClick={this.handleLevelButton('up')}></button>
                <button className={this.getClass('down')} onClick={this.handleLevelButton('down')}></button>
            </div>
        )
    }
}

export default LevelLevel