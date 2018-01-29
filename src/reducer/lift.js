import {PRESSED_LIFT_BUTTON,SUCCESS,UP,DOWN} from '../constants'
const data = {
    currentLevel:1,
    moving:false,
    way:UP,
    newLevel:null,
    levels:[
        {num:1},
        {num:2},
        {num:4},
        {num:5},
        {num:6},
        {num:7},
        {num:8},
        {num:9}
    ]
}
export default (liftState=data,action)=>{

    const {type,payload,response,middle} = action
    switch(type){
        case PRESSED_LIFT_BUTTON:
            return {...liftState,
                currentLevel:middle.middleCurrentLevel,
                moving:true,
                newLevel:middle.middleNewLevel,
                way:middle.middleMove
            }
        case PRESSED_LIFT_BUTTON+SUCCESS:
            return {
                ...liftState,
                moving:false
            }
    }
    return liftState
}