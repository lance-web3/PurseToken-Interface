import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import purse from '../purse.png'
import purse2 from '../purse2.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Buttons from 'react-bootstrap/Button'
import './App.css';
import Popup from 'reactjs-popup';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { FaExclamationCircle, FaCheck } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

class Menu extends Component {
    render() {
        return (
            <div id="content" className="mt-3">
                <div className="text-center">
                    <ButtonGroup>
                        <Link to="/lpfarm/menu/" style={{ textDecoration: "none" }}>
                            <Buttons className="textWhiteMedium center hover" variant="link" size="lg">PANCAKESWAP</Buttons>
                        </Link>
                        <Link to="/lpfarm/fxswap/" style={{ textDecoration: "none" }}>
                            <Buttons className="textPurpleMedium center hover" variant="outline" size="lg">FXSWAP</Buttons>
                        </Link>
                    </ButtonGroup>
                </div>
                <div className="center img">
                    <img src={purse2} height='180' alt="" />
                </div>
                <h1 className="textWhite center" style={{fontSize:"40px", textAlign:"center"}}><b>LP Restaking Farm</b></h1>
                <div className="center mt-4 mb-3" style={{ fontFamily: 'Verdana', color: 'silver', textAlign:"center" }}>Stake FXSWAP LP Tokens to earn FX&nbsp;!</div>
                <br />
                <div className="row center" style={{ minWidth: '300px' }}>
                    <div className="card mb-4 cardbody" style={{ width: '350px', color: 'white' }} >
                        <div className="card-body">
                            <span>
                                <span className="float-left">
                                    Your PURSE Balance&nbsp;
                                    <Popup 
                                        trigger={open => (
                                            <span style={{ position: "relative", top: '-1px' }}><BsFillQuestionCircleFill size={12} /></span>
                                        )}
                                        on="hover"
                                        position="right center"
                                        offsetY={-23}
                                        offsetX={5}
                                        contentStyle={{ padding: '3px' }}
                                    >
                                        <span className="textInfo"><small>The amount shown is the PURSE balance on f(x)Core for the address you are currently connected to.</small></span>
                                    </Popup><br />
                                    <b>{parseFloat(window.web3Bsc.utils.fromWei(this.props.purseBalanceOnFXCore, 'Ether')).toLocaleString('en-US', { maximumFractionDigits: 2 })}</b>
                                </span>
                                <span className="float-right">
                                    <Buttons 
                                        variant="outline-info"
                                        size="sm"
                                        style={{ minWidth: '80px' }} 
                                        className="mb-2"
                                        onClick={() => {
                                            window.open('https://fx-swap.io/#/swap', '_blank'); // Or use _self
                                        }}>
                                        Swap&nbsp;
                                        <HiExternalLink style={{marginBottom:"3px"}}/>
                                    </Buttons>
                                </span><br /><br /><br />
                            </span>
                            <span>
                                <small>
                                    <span className="float-left">Total Pending Harvest</span>
                                    <span className="float-right">
                                        <span>
                                            {parseFloat(window.web3Bsc.utils.fromWei(this.props.earnedAmountOnFXCore, 'Ether')).toLocaleString('en-US', { maximumFractionDigits: 4 })}&nbsp;FX
                                        </span>
                                    </span>
                                </small>
                            </span>
                        </div>
                    </div><li style={{color:'transparent'}}/>

                    <div className="card mb-4 cardbody" style={{ width: '350px', color: 'white' }}>
                        <div className="card-body">
                            <span>
                                <span className="float-left">
                                    Total PURSE Supply&nbsp;
                                    <Popup 
                                        trigger={open => (
                                            <span style={{ position: "relative", top: '-1px' }}><BsFillQuestionCircleFill size={12} /></span>
                                        )}
                                        on="hover"
                                        position="right center"
                                        offsetY={-23}
                                        offsetX={5}
                                        contentStyle={{ padding: '3px' }}
                                    >
                                        <span className="textInfo"><small>The amount shown is the Total PURSE Supply on f(x)Core network.</small></span>
                                    </Popup><br />
                                    <b>{parseFloat(window.web3Bsc.utils.fromWei(this.props.purseTotalSupplyOnFXCore, 'Ether')).toLocaleString('en-US', { maximumFractionDigits: 0 })}</b>
                                </span><br /><br /><br />
                                <span>
                                    <small>
                                        <span className="float-left">Total Reward / Week</span>
                                        <span className="float-right">
                                            <span>
                                            {parseFloat(window.web3Bsc.utils.fromWei(this.props.fxRewardPerWeek, 'Ether')).toLocaleString('en-US', { maximumFractionDigits: 2 })}&nbsp;FX
                                            </span>
                                        </span>
                                    </small>
                                </span>
                            </span>
                        </div>
                    </div><li style={{color:'transparent'}}/>
                </div>

                {/*<div className="center textWhite comingSoon" style={{ color: 'white', textAlign: 'center' }}><b><big>Coming Soon!</big></b></div>*/}

                <br />
                <div className="center mb-2" style={{ color: 'white' }}><b><big>Select Your Favourite pool entrees&nbsp;!</big></b></div>
                <div className="center mb-2" style={{ color: 'silver' }}><small><FaExclamationCircle size={13} style={{marginBottom:"3px"}}/>&nbsp;&nbsp;Attention&nbsp;: Be sure to familiar with protocol risks and fees before using the farms&nbsp;!</small></div>
                <div className="center" style={{ color: 'silver' }}><small><FaCheck size={13} style={{marginBottom:"3px"}}/> PURSE has NO BDL on f(x)Core</small></div>
                <br />

                {this.props.farmLoading ?
                    <div className="col">
                        <div className="card mb-4 cardbody card-body text-center" style={{ maxWidth: '230px', color: 'white' }}>
                            <span>
                                <img src={purse} height='30' alt="" /><br />
                                <b className="text">FX-PURSE</b>
                                <div>
                                    <div className=""><small>Deposit<small className="textSmall">FX-PURSE FXSWAP LP</small> to Earn FX</small></div>

                                    <div className="" style={{ color: 'white' }}>
                                        {this.props.aprloading ?
                                            <div className="borderTop" style={{ marginTop: '8px' }}>
                                                <span className=""><small>APR: {parseFloat(this.props.apr).toLocaleString('en-US', {maximumFractionDigits:2})} % &nbsp;</small></span>
                                                <span className="">
                                                    <Popup 
                                                        trigger={open => (
                                                            <span style={{ position: "relative", top: '-1px' }}><BsFillQuestionCircleFill size={10} /></span>
                                                        )}
                                                        on="hover"
                                                        position="right center"
                                                        offsetY={-23}
                                                        offsetX={5}
                                                        contentStyle={{ padding: '3px' }}
                                                    >
                                                        <span className="textInfo"><small>APR is affected by the price of PURSE which is not yet stabilized. </small></span>
                                                        <span className="textInfo mt-2"><small>If it shows 'NaN' or 'Infinity', it means the pool has no LP token staked currently. </small></span>
                                                    </Popup>
                                                </span><br />
                                                <span><small>APY: {parseFloat(this.props.apy).toLocaleString('en-US', {maximumFractionDigits:0})} % &nbsp;</small></span>
                                                <span className="">
                                                    <Popup 
                                                        trigger={open => (
                                                            <span style={{ position: "relative", top: '-1px' }}><BsFillQuestionCircleFill size={10} /></span>
                                                        )}
                                                        on="hover"
                                                        position="right center"
                                                        offsetY={-23}
                                                        offsetX={5}
                                                        contentStyle={{ padding: '3px' }}
                                                    >
                                                        <span className="textInfo"><small>APY is calculated using APR and the compounding period. </small></span>
                                                        <span className="textInfo mt-2"><small>The value shown is based on daily compounding frequency. </small></span>
                                                    </Popup>
                                                </span>
                                            </div>
                                        :
                                            <div className="">
                                                <span><small>APR:</small></span>&nbsp;&nbsp;
                                                <span className="lds-dual-ring"><div></div><div></div><div></div></span><br />
                                                <span><small>APY:</small></span>&nbsp;&nbsp;
                                                <span className="lds-dual-ring"><div></div><div></div><div></div></span>
                                            </div>
                                        } 
                                    </div>

                                    <span className="">
                                        <small>Bonus Multiplier: 1x &nbsp;
                                            <Popup
                                                trigger={open => (
                                                    <span style={{ position: "relative", top: '-0.8px' }}><BsFillQuestionCircleFill size={10} /></span>
                                                )}
                                                on="hover"
                                                position="right center"
                                                offsetY={-23}
                                                offsetX={5}
                                                contentStyle={{ padding: '3px' }}
                                            >
                                                <span className="textInfo"><small>Multiplier represents X times of FX rewards each farm will receive.</small><br /></span>
                                                <span className="textInfo mt-2"><small>For example, a 1x farm receives 1x FX per block while a 40x farm receives 40x FX per block.</small><br /></span>
                                                <span className="textInfo mt-2"><small>This amount is already included in the farm APR calculations. </small></span>
                                            </Popup>&nbsp;
                                        </small>
                                    </span><br />

                                    <span className=" ">
                                        <small>
                                            {this.props.aprloading ? 
                                                <div className="">TVL: $ {parseFloat(this.props.tvl).toLocaleString('en-US', {maximumFractionDigits:0})} </div> 
                                            :
                                                <div className="">
                                                    <span><small>TVL:</small></span>&nbsp;&nbsp;
                                                    <span className="lds-dual-ring"></span>
                                                </div>
                                            }
                                        </small>
                                    </span>
                                    <Buttons 
                                        variant="outline-info"
                                        size="sm"
                                        style={{ minWidth: '80px', marginTop: '10px' }} 
                                        className="mb-2"
                                        onClick={() => {
                                            window.open('https://fx-swap.io/#/farm/FX/0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687', '_blank'); // Or use _self
                                        }}>
                                        Select&nbsp;
                                        <HiExternalLink style={{marginBottom:"3px"}}/>
                                    </Buttons>

                                </div>
                            </span>
                        </div>
                    </div>

                    :
                    <div className="center">
                        <div className="bounceball"></div> &nbsp;
                        <div className="textLoadingSmall">NETWORK IS Loading...</div>
                    </div>
                }




            </div >
        );
    }
}

export default Menu;