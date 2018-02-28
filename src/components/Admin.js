import React,{Component} from 'react'
import {connect} from 'react-redux'
import {checkStatus} from '../AC'
class Admin extends Component{
    getContent = () =>{
        if(this.props.off) return 'OFF'
        else {
            return 'ON'
        }
    }
    componentDidUpdate(){
        console.log('updating admin')
        this.props.checkStatus()
    }
    render(){
        return(
            <div className="admin">
               {this.getContent()}
            </div>
        )
    }
}

export default connect(state=>({off:state.lift.off}),{checkStatus})(Admin)