import React,{Component} from 'react'

class ZombiePreview extends Component  {
    constructor(props){
        super(props)
        this.state = { zombie:this.props.zombie,_style:this.props._style,_className:this.props._className}
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps!==this.props){
            this.setState({ 
                zombie:nextProps.zombie,
                _style:nextProps._style,
                _className:nextProps._className,
            })
            return true
        }else{
            return false
        }
    }
    render(){
        var _style = this.state._style || []
        var _className = this.state._className
        if(this.state.zombie !== undefined){
            _style['color'] = {filter:"hue-rotate(0deg)"}
            _style['skin'] = {filter:"hue-rotate(0deg)"}
            _style['eye_color'] = {filter:"hue-rotate(0deg)"}
            _className = "zombie-parts head-visible-1 eye-visible-1 shirt-visible-1"
            if(this.state.zombie.dna !== undefined){
                var dna = this.state.zombie.dna
                var job = this.state.zombie.job
                var char_number = this.state.zombie.char_number
                var _eye=0
                var _head=0
                var _shirt=0
               
                if(job == 0 ){
                 _eye = char_number
                 _head = 0
                 _shirt = 0
                }
                if(job == 1){
                 _eye = 0
                 _head = char_number
                 _shirt = 0

                }
                if(job == 2){
                 _eye = 0
                 _head = 0
                 _shirt = char_number
                }
                
                _className = "zombie-parts head-visible-"+_head+" eye-visible-"+_eye+" shirt-visible-"+_shirt

                _style['skin'] = {filter:"hue-rotate("+dna.substring(9,12) % 360 +1+"deg)"}

            }
        }
        return (
                    <div className={_className} id="zombie-parts">
                        {/* <img alt="" src="./catlegs.png" className="cat-legs" style={{filter:"hue-rotate(0deg); display: none"}}/> */}
                        <img alt="" src="./shirt-1@2x.png" className="shirt shirt-part-1" style={_style['skin']}/>
                        <img alt="" src="./shirt-2@2x.gif" className="shirt shirt-part-2" style={_style['skin']}/>
                        <img alt="" src="./shirt-3@2x.gif" className="shirt shirt-part-3" style={_style['skin']}/>
                        <img alt="" src="./shirt-4@2x.gif" className="shirt shirt-part-4" style={_style['skin']}/>
                        <img alt="" src="./shirt-5@2x.gif" className="shirt shirt-part-5" style={_style['skin']}/>
                        <img alt="" src="./shirt-6@2x.gif" className="shirt shirt-part-6" style={_style['skin']}/>
                        <img alt="" src="./shirt-7@2x.gif" className="shirt shirt-part-7" style={_style['skin']}/>
                        <img alt="" src="./head-1@2x.png" className="head head-part-1" style={_style['skin']}/>
                        <img alt="" src="./head-2@2x.gif" className="head head-part-2" style={_style['skin']}/>
                        <img alt="" src="./head-3@2x.gif" className="head head-part-3" style={_style['skin']}/>
                        <img alt="" src="./head-4@2x.gif" className="head head-part-4" style={_style['skin']}/>
                        <img alt="" src="./head-5@2x.gif" className="head head-part-5" style={_style['skin']}/>
                        <img alt="" src="./head-6@2x.gif" className="head head-part-6" style={_style['skin']}/>
                        <img alt="" src="./head-7@2x.gif" className="head head-part-7" style={_style['skin']}/>
                        <img alt="" src="./eyes-1@2x.png" className="eye eye-part-1" style={_style['skin']}/>
                        <img alt="" src="./eyes-2@2x.gif" className="eye eye-part-2" style={_style['skin']}/>
                        <img alt="" src="./eyes-3@2x.gif" className="eye eye-part-3" style={_style['skin']}/>
                        <img alt="" src="./eyes-4@2x.gif" className="eye eye-part-4" style={_style['skin']}/>
                        <img alt="" src="./eyes-5@2x.gif" className="eye eye-part-5" style={_style['skin']}/>
                        <img alt="" src="./eyes-6@2x.gif" className="eye eye-part-6" style={_style['skin']}/>
                        <img alt="" src="./eyes-7@2x.gif" className="eye eye-part-7" style={_style['skin']}/>
                        <img alt="" src="./eyes-8@2x.gif" className="eye eye-part-8" style={_style['skin']}/>
                    </div>
        );
      }
    }
    
    
export default ZombiePreview;
