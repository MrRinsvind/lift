import React,{Component} from 'react'
import {levels} from '../constants'
import LevelLevel from './LevelLevel'
class LevelWrapper extends Component{
    render(){
        const levelList = levels.map((level)=>(
            <LevelLevel item={level} key={'r'+level.num}/>
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

export default LevelWrapper