import React,{Component,Fragment} from 'react'


class ZombieToggler extends Component  {
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.state = { list: [
                {
                    "name":"head",
                    "title":"法師角色",
                    "max":3
                },{
                    "name":"eye",
                    "title":"戰士角色",
                    "max":5
                },{
                    "name":"shirt",
                    "title":"弓手角色",
                    "max":3
                },{
                    "name":"skin",
                    "title":"皮膚顏色",
                    "max":360
                }
            ],inputValue:[]
        }
    }
    handleChange(event){
        var id = event.target.id.replace(/_select/,"")
        var _list = this.state.inputValue
        _list[id] = event.target.value;
        this.setState({
            inputValue:_list
        })
        this.props.handleChange(event);
    }
    render() {
        return (
            <div  className="zombie-toggle col mt-lg-5 pt-4" id="zombie-toggle">
                <fieldset id="zombie-toggler"  className="form-group col mt-lg-5 pt-lg-5" >
                    <div >
                        {this.state.list.map((item,index)=>{
                            return(<Fragment key={index}>
                                <label>{item.title}:<code></code></label>
                                <input  type="range" min="1" max={item.max} className="custom-range" id={`${item.name}_select`} value={this.state.inputValue[item.name]||1}  onChange={this.handleChange}/>
                                </Fragment>)
                        })}            
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default ZombieToggler;
