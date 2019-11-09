import React, { Component } from 'react'
import list from '../../../constants/Header/Login'
import './index.css'
import ShopBox from './ShopBox'
import AppBox from './AppBox'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            show2: false,
        }
    }
    show = () => {
        this.setState({
            show:true,
        })
    }
    hide = () => {
        this.setState({
            show:false,
        })
    }
    onMouseEnter = () => {
        this.setState({
            show2: true,
        })
    }
    onMouseLeave = () => {
        this.setState({
            show2: false,
        })
    }
    render() {
        const { show2 } = this.state;
        const { show } = this.state;
        return (
            <div id='login-area'>
                <ul className='header-unlogin'>
                    <li className='app-download' onMouseOver={this.show} onMouseOut={this.hide}>
                        <a href="#" style={{ width: 60 }}>{list[0]}</a>
                        <AppBox  show={show}/>
                    </li>
                    <li className='shop-cart' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                        <a href="#" className='shop-cart-icon' >
                            <span className='icon-shopping-cart'>
                            </span>
                            <span>{list[8]}</span>
                        </a>
                        <ShopBox show2={show2} />
                    </li>
                    <li className='header-signin'>
                        <a href="#">{list[19]}</a>
                        {list[20]}
                        <a href="#">{list[21]}</a>
                    </li>
                </ul>
            </div>
        )
    }
}
