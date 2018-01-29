import {PRESSED_LIFT_BUTTON} from '../constants'

export function pressedLiftButton(currentLevel,newLevel){
    return{
        type:PRESSED_LIFT_BUTTON,
        payload:{currentLevel,newLevel},
        callLiftMiddle:true
    }
}