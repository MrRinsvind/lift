import {UP,DOWN,SUCCESS} from '../constants'
export default store => next => action => {
    const {callLiftMiddle, type, payload} = action
    if (!callLiftMiddle) return next(action)
    var middleNewLevel = payload.newLevel;
    var middleCurrentLevel=payload.currentLevel;
    if(middleCurrentLevel!==middleNewLevel){
        var middleMove;
        if(middleCurrentLevel<middleNewLevel){
            middleCurrentLevel++
            middleMove=UP;
        }
        else{
            middleCurrentLevel--
            middleMove=DOWN;
        }
        setTimeout(()=>{

            return next({...action,middle:{
                middleCurrentLevel,middleNewLevel,middleMove
            }})
        },1000)
    }else{
        return next({...action,type:type+SUCCESS})
    }
}