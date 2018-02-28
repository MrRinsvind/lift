import {REVERSE,LIFT_OFF,PRESSED_LEVEL_BUTTON,OPEN_THE_DOOR,NO_WAY,MOVE,CHOOSE_WAY,START,LIFT_BUTTON_ACTIVATED,CLOSE_THE_DOOR,LIFT_MOVING,LIFT_ACTIVATED,PRESSED_LIFT_BUTTON,SUCCESS,UP,DOWN} from '../constants'
const data = {
    currentLevel:1,
    off:true,
    moving:false,
    way:false,
    levelState:[],
    setTime:false,
    floorState:{
        1:{},
        2:{},
        3:{},
        4:{},
        5:{},
        6:{},
        7:{},
        8:{},
        9:{},
    }
}
export default (liftState=data,action)=>{

    const {type,payload,response,middle} = action
    switch(type){
        case CHOOSE_WAY:
            return{
                ...liftState,
                way:middle.newWay
            }
        case CLOSE_THE_DOOR+START:
            return{
                ...liftState,
                setTime:false
            }
        case CLOSE_THE_DOOR+SUCCESS:
            return{
                ...liftState,
                moving:true,
                setTime:false
            }
        case LIFT_BUTTON_ACTIVATED:
            return{
                ...liftState,
                levelState:[...liftState.levelState,payload.newLevel],
                off:false
            }
        case LIFT_OFF:
            return{
                ...liftState,
                off:true
            }
        case MOVE+START:
            return {
                ...liftState,
                setTime:true
            }
        case MOVE+UP+SUCCESS:
            return{
                ...liftState,
                setTime:false,
                currentLevel:liftState.currentLevel+1
            }
        case MOVE+DOWN+SUCCESS:
            return{
                ...liftState,

                setTime:false,
                currentLevel:liftState.currentLevel-1
            }
        case NO_WAY:
            return{
                ...liftState,
                way:false
            }
        case OPEN_THE_DOOR+START:
            return {
                ...liftState,
                setTime:true
            }
        case OPEN_THE_DOOR+REVERSE+START:
            return {
                ...liftState,
                setTime:true
            }
        case OPEN_THE_DOOR+REVERSE+CHOOSE_WAY+START:
            return {
                ...liftState,
                setTime:true
            }
        case OPEN_THE_DOOR+REVERSE+CHOOSE_WAY+SUCCESS:
            const way = payload.way===DOWN?UP:DOWN
            return{
                ...liftState,
                setTime:false,
                moving:false,
                way:way,
                levelState:liftState.levelState.filter(i=>i!==liftState.currentLevel),
                floorState:{
                    ...liftState.floorState,
                    [payload.currentLevel]:{
                        ...liftState.floorState[payload.currentLevel],
                        [way]:false
                    }
                }

            }
        case OPEN_THE_DOOR+REVERSE+SUCCESS:
            const way2 = payload.way===DOWN?UP:DOWN
            return{
                ...liftState,
                setTime:false,
                moving:false,
                levelState:liftState.levelState.filter(i=>i!==liftState.currentLevel),
                floorState:{
                    ...liftState.floorState,
                    [payload.currentLevel]:{
                        ...liftState.floorState[payload.currentLevel],
                        [way2]:false
                    }
                }

            }
        case OPEN_THE_DOOR+SUCCESS:
            return{
                ...liftState,
                setTime:false,
                moving:false,
                levelState:liftState.levelState.filter(i=>i!==liftState.currentLevel),
                floorState:{
                    ...liftState.floorState,
                    [payload.currentLevel]:{
                        ...liftState.floorState[payload.currentLevel],
                        [payload.way]:false
                    }
                }

            }

        case PRESSED_LEVEL_BUTTON:
            return {
                ...liftState,
                off:false,
                floorState: {
                    ...liftState.floorState,
                    ...payload.newObj
                }
            }

    }
    return liftState
}