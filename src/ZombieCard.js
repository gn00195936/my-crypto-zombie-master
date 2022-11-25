import React, { Component } from 'react';
import ZombiePreview from "./ZombiePreview"

class ZombieCard extends Component {
    constructor(props) {
        super(props)
        this.state = { zombie:this.props.zombie,zombie2:this.props.zombie2,name:this.props.name,level:this.props.level}
       
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps!==this.props){
            this.setState({ _className:nextProps._className,_style:nextProps._style})
            return true
        }else{
            return false
        }
    }
    render() { 
        console.log(this.state.zombie.rarity)
        var rarity = this.state.zombie.rarity
        if (rarity==0){
        return ( 
            <div className="game-card home-card selectable">
                <div className="zombie-char">
                <ZombiePreview zombie={this.state.zombie}></ZombiePreview>
                    <div className="zombie-card card bg-shaded">
                        <div className="card-header bg-dark hide-overflow-text">
                            <strong>ID:{this.state.name}</strong>
                        </div>
                        <small className="hide-overflow-text">英雄LV{this.state.level}</small>
                    </div>
                </div>
            </div>            
        )
        }
        if (rarity==1){
            return ( 
                <div className="game-card home-card2 selectable">
                    <div className="zombie-char">
                    <ZombiePreview zombie={this.state.zombie}></ZombiePreview>
                        <div className="zombie-card card bg-shaded">
                            <div className="card-header bg-dark hide-overflow-text">
                                <strong>ID:{this.state.name}</strong>
                            </div>
                            <small className="hide-overflow-text">英雄LV{this.state.level}</small>
                        </div>
                    </div>
                </div>            
            )
            }
            if (rarity==2){
                return ( 
                    <div className="game-card home-card3 selectable">
                        <div className="zombie-char">
                        <ZombiePreview zombie={this.state.zombie}></ZombiePreview>
                            <div className="zombie-card card bg-shaded">
                                <div className="card-header bg-dark hide-overflow-text">
                                    <strong>ID:{this.state.name}</strong>
                                </div>
                                <small className="hide-overflow-text">英雄LV{this.state.level}</small>
                            </div>
                        </div>
                    </div>            
                )
                }
                if (rarity==3){
                    return ( 
                        <div className="game-card home-card4 selectable">
                            <div className="zombie-char">
                            <ZombiePreview zombie={this.state.zombie}></ZombiePreview>
                                <div className="zombie-card card bg-shaded">
                                    <div className="card-header bg-dark hide-overflow-text">
                                        <strong>ID:{this.state.name}</strong>
                                    </div>
                                    <small className="hide-overflow-text">英雄LV{this.state.level}</small>
                                </div>
                            </div>
                        </div>            
                    )
                    }
    }
}
 
export default ZombieCard;