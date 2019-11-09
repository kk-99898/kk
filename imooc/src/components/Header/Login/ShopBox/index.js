import React, { Component } from 'react'
import '../index.css'
import list from '../../../../constants/Header/Login'
export default class index extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {show2}=this.props
        return (
            <div className='my-cart' style={{display:show2 ? 'block':'none'}} >
                <div className='cart-title-box' >
                    <h2 className='l'>{list[9]}</h2>
                    <h5 className='r'>
                    {list[10]}
                    <span>{list[11]}</span>
                    {list[12]}
                    </h5>
                </div>
                <div className='cart-wrap'>
                    <div className='clear-cart'>
                        <span className='cartIcon icon-shopping-cart' />
                        <h3>{list[13]}</h3>
                        <div className='text'>{list[14]}</div>
                        <p>
                            <a href="#" className='go-link'>{list[15]}</a>
                        </p>
                        <p>
                            <a href="#" className='go-link'>{list[16]}</a>
                        </p>
                    </div>
                </div>
                <div className='more-box'>
                    <div className='l show-box'>
                        <span className='text'>
                            <a href="#">{list[17]}</a>
                        </span>
                    </div>
                    <a href="#" className='r moco-btn go-cart'>{list[18]}</a>
                </div>
            </div>  
        )
    }
}
