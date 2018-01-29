import React,{Component} from 'react'
import LiftWrapper from './LiftWrapper'
import LevelWrapper from './LevelWrapper'
export default class App extends Component{

    render(){
        return(
            <div className="lift-block">
                <LiftWrapper/>
                <LevelWrapper/>
            </div>
        )
    }
}