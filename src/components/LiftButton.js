import React,{Component} from 'react'

export default class LiftButton extends Component{
    state={
        active:false
    }
    handleLiftButton=(ev)=>{
        ev.preventDefault()
        this.props.pickLevel(this.props.num)
    }

    getClass = () =>{
        const {active,open,picked} = this.props
        var status = active && open?'lift-button--floor-current':active?'lift-button--floor-move':picked||this.state.active?'lift-button--floor-used':''
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

