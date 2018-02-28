import {CHOOSE_WAY,REVERSE,PRESSED_LEVEL_BUTTON,LIFT_OFF,NO_WAY,START,MOVE,LIFT_MOVING,LIFT_BUTTON_ACTIVATED,OPEN_THE_DOOR,UP,LIFT_ACTIVATED,DOWN,SUCCESS,CLOSE_THE_DOOR,test}
from '../constants'

function liftTime(next,action,param){
    next({
        ...action, type:param+START
    })
    setTimeout(()=>{
        next({
            ...action,type:param+SUCCESS
        })
    },1000)
}
function minMaxFloor(min,max,state){
    var mx=max
    var mn=min
    for(var i in state){

        if(state[i].active){
            if(state[i].UP && i>mx ){
                mx=i

            }
            if(state[i].DOWN && i<mn){
                mn=i
            }

        }

    }
    return {
        max:+mx,min:+mn
    }
}
export default store => next => action => {
    const {callLiftMiddle, type, payload} = action

      if(!callLiftMiddle) return next(action)
        if(type===LIFT_BUTTON_ACTIVATED && (!payload.levelState.length || payload.levelState.indexOf(payload.newLevel)===-1)) {
            next(action)
        }
        else if(type===CHOOSE_WAY){

            var minMax = minMaxFloor(9,0,payload.floorState)
            console.log(minMax)
            if(Math.max(...payload.levelState)>payload.currentLevel || minMax.max>payload.currentLevel){

                next({
                    ...action,middle:{
                        newWay:UP
                    }
                })
            }else if(Math.min(...payload.levelState)<payload.currentLevel || (minMax.min<payload.currentLevel && minMax.min!==9)){
                next({
                    ...action,middle:{
                        newWay:DOWN
                    }
                })

            }else if(minMax.max!==0){
                next({
                    ...action,middle:{
                        newWay:DOWN
                    }
                })

            }else if(minMax.min!==9){
                next({
                    ...action,middle:{
                        newWay:UP
                    }
                })

            }
            else{
                next({
                   type:LIFT_OFF
                })
            }
        }
        else if(type===CLOSE_THE_DOOR){
            liftTime(next,action,CLOSE_THE_DOOR)
        }
        else if(type===MOVE){
            if((payload.levelState.indexOf(payload.currentLevel)===-1) && (!payload.floorState[payload.currentLevel].active || !payload.floorState[payload.currentLevel][payload.way])){
                var minMax = minMaxFloor(9,0,payload.floorState)
                if(payload.way===UP && (payload.currentLevel<Math.max(...payload.levelState)||payload.currentLevel<minMax.max)) {
                    liftTime(next,action,MOVE+UP)

                }else if(payload.way===DOWN && (payload.currentLevel>Math.min(...payload.levelState)||payload.currentLevel>minMax.min)){
                    liftTime(next,action,MOVE+DOWN)

                }
                else if(payload.floorState[payload.currentLevel].active && (payload.floorState[payload.currentLevel].UP || payload.floorState[payload.currentLevel].DOWN)){
                    liftTime(next,action,OPEN_THE_DOOR+REVERSE)
                }
                else if(minMax.min!==9){
                    if(!payload.floorState[payload.currentLevel+1]){
                        liftTime(next,action,OPEN_THE_DOOR+REVERSE+CHOOSE_WAY)
                    }else{
                        liftTime(next,action,MOVE+UP)
                    }


                }
                else if(minMax.max!==0){
                    if(!payload.floorState[payload.currentLevel-1]){
                        liftTime(next,action,OPEN_THE_DOOR+REVERSE+CHOOSE_WAY)
                    }else{
                        liftTime(next,action,MOVE+DOWN)
                    }

                }


                else {
                    // console.log(SUCCESS)
                    next({
                        ...action,type:NO_WAY
                    })
                }

            }else{
                if(!payload.floorState[payload.currentLevel+1] || !payload.floorState[payload.currentLevel-1]){
                    liftTime(next,action,OPEN_THE_DOOR+REVERSE+CHOOSE_WAY)
                }
                else{
                    liftTime(next,action,OPEN_THE_DOOR)
                }

            }

        }



}