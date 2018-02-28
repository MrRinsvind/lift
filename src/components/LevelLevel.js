import React,{Component} from 'react'
class LevelLevel extends Component{

    getClass = type =>{
        let status = this.props.active[type]?' level-button--status-active':''
        return "level-button level-button--move-"+String.prototype.toLowerCase.call(type)+status
    }


    handleLevelButton = type => e =>{

        e.preventDefault()
            this.props.onClick({[this.props.item.num]:{
                DOWN:this.props.active.DOWN,
                UP:this.props.active.UP,
                active:true,
                id:this.props.item.num,
                [type]:true
            }})

        // if(!this.state[type]){
        //     this.setState({
        //         [type]:true
        //     })
        // }

    }
    render(){
        return(
            <div className="level-level">
                <span>{this.props.item.num}</span>
                <button className={this.getClass('UP')} onClick={this.handleLevelButton('UP')}></button>
                <button className={this.getClass('DOWN')} onClick={this.handleLevelButton('DOWN')}></button>
            </div>
        )
    }
}

export default LevelLevel