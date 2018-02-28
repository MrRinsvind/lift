import React,{Component} from 'react'
import LiftWrapper from './LiftWrapper'
import LevelWrapper from './LevelWrapper'
import Admin from './Admin'
export default class App extends Component{

    render(){
        return(
            <div className="lift-block">
                <Admin/>
                <LiftWrapper/>
                <LevelWrapper/>
            </div>
        )
    }
}