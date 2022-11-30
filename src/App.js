import React,{Component,Fragment} from 'react'
import './static/App.css'
import Page from "./Page";
import Web3 from "web3";
import abi from './ZombieCore.json'
import ContractAddress from './ContractAddress'

import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom"

let address_w;
let checkBalance;
let checkBalance_value;
let Hero_Gold;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { AdminArea:()=>{return(<Fragment></Fragment>)} }
        this.state2 = {
            value:0
          };
      
    }
    
 async componentDidMount(a) {
//判断页面是否安装Metamask
     if (typeof window.ethereum !== 'undefined') {
    const ethereum = window.ethereum
    //禁止自动刷新，metamask要求写的
    ethereum.autoRefreshOnNetworkChange = false

   
      //第一次链接Metamask
      const accounts = await ethereum.enable()
      console.log(accounts)
      //初始化Provider
      const provider = window['ethereum']
      console.log(provider)
      //获取网络ID
      console.log(provider.chainId)
      //实例化Web3
      const web3 = new Web3(provider)
      console.log(web3)
      //定义合约地址
      const address = "0x0d7A11b7737712791cD9630A5d6c86cdd4A39538"
      //实例化合约
      window.myContract = new web3.eth.Contract(abi.abi,address)

      window.defaultAccount = accounts[0].toLowerCase()
      address_w=window.defaultAccount 
      
      this.Hero_Gold()
      this.checkBalance1()
      console.log("checkBalance_value:"+checkBalance_value+"BNB")
      this.Getter()
      
     } 
    }
    Getter(){

        this.setState({value:address_w})
      }
    Hero_Gold = () => {
        window.myContract.methods.Hero_GoldToOwner(address_w).call().then(Hero_Gold=>{
        Hero_Gold=(Hero_Gold/1000000000)/1000000000
        console.log("Hero_Gold:"+Hero_Gold+"BNB")
        this.setState({value1:Hero_Gold})
        
          
        })
    }
    sell_Hero = () => {
        window.myContract.methods.sell_Hero().send({from:window.defaultAccount})
        this.setState({value1:Hero_Gold})
    
      }
    checkBalance1 = () => {
      
        window.myContract.methods.checkBalance().call().then(checkBalance=>{
         
        
        checkBalance=(checkBalance/1000000000)/1000000000
        console.log("checkBalance:"+checkBalance+"BNB")
        this.setState({value2:checkBalance})
        
        })
    }
    render() { 
        
        let AdminArea = this.state.AdminArea
       
        return (
             
      
            
      

            
            <div>
                
                <button className="start-course-btn2" onClick={() =>this.Getter()}> 
                <span>{address_w}</span> wallet
                </button>
           
                <div>
                <button className="start-course-golde_ui" onClick={() =>this.sell_Hero()}>{this.state.value1}    Gold </button>
                </div>
                <div>
                <button className="start-course-bnb_ui">{this.state.value2} BNB </button>
                </div>
                <div className="start-course-btn3">
                
                </div>
                
            <Fragment>
   
               
                <Router>
                    
                    <section className="zombies-hero no-webp block app-block-intro pt-5 pb-0">

                        <div className="container">
                            <div className="menu">
                                <ul>
                                    <li>
                                        <button className="start-course-btn">
                                            <span><Link to="?ZombieArmy">英雄挑戰</Link></span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="start-course-btn">
                                            <span><Link to="?MyZombie">我的角色</Link></span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="start-course-btn">
                                            <span><Link to="?ZombieMarket">NFT市場</Link></span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="start-course-btn">
                                            <span><Link to="?ZombieSimulator">模擬英雄</Link></span>
                                        </button>
                                    </li>
                                    <AdminArea></AdminArea>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="zombie-container block bg-walls no-webp">
                        <div className="container">
                            <div className="area">
                                <Route path="*" component={Page}></Route>
                            </div>
                        </div>
                    </section>
                </Router>
            </Fragment>
            </div>
            );
    }
}


export default App
