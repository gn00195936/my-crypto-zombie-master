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
      const address = "0xF1cd454c85f075618AfA353421859e54Fed01562"
      //实例化合约
      window.myContract = new web3.eth.Contract(abi.abi,address)
      console.log(window.myContract)
      window.defaultAccount = accounts[0].toLowerCase()
      address_w=window.defaultAccount 
      console.log("333++++"+address_w)

      return(address_w);
     } 
    }
    Getter(){

        this.setState({value:address_w})
      }
    
    render() { 
        
        let AdminArea = this.state.AdminArea
       
        return (
            <div>
                
                <button className="start-course-btn2" onClick={() =>this.Getter()}>
                <span>{address_w}</span> wallet
                
                </button>

              
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
