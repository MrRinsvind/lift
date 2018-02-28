import {PRESSED_LEVEL_BUTTON,OPEN_THE_DOOR,CLOSE_THE_DOOR,MOVE,CHOOSE_WAY,LIFT_BUTTON_ACTIVATED,} from '../constants'

export function pressedLiftButton(newLevel,levelState){
    return{
        type:LIFT_BUTTON_ACTIVATED,
        payload:{newLevel,levelState},
        callLiftMiddle:true
    }
}

export function pressedLevelButton(newObj) {
    return{
        type:PRESSED_LEVEL_BUTTON,
        payload:{newObj}
    }
}
export  function checkStatus() {

    return (dispatch, getState) => {
        const {lift}=getState()
        if(!lift.setTime){
            if(!lift.way){

                return dispatch({
                    type:CHOOSE_WAY,
                    callLiftMiddle:true,
                    payload:{
                        levelState:lift.levelState,
                        currentLevel:lift.currentLevel,
                        floorState:lift.floorState
                    }
                })
            }
            if(!lift.moving){
                return dispatch({
                    type:CLOSE_THE_DOOR,
                    callLiftMiddle:true
                })
            }
            return dispatch({
                type:MOVE,
                callLiftMiddle:true,
                payload:{
                    way:lift.way,
                    levelState:lift.levelState,
                    currentLevel:lift.currentLevel,
                    floorState:lift.floorState
                }
            })

        }


    }
}