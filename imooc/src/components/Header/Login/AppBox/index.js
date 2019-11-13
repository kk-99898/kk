import React, { Component } from 'react'
import '../index.css'
import list from '../../../../constants/Header/Login'
export default class index extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {show} = this.props
        return (
            <div className='app-load-box' style={{ display: show ? 'block' : 'none' }}>
                <div className='mobile-load-box' >
                    <h4>{list[4]}</h4>
                    <img alt='下载' src={require('../../../../img/header/appload.png')} className='l' />
                    <div className='r'>
                        <a href="#" className='app-load-btn'>
                            <i className='icon-apple'>
                            </i>{list[5]}
                        </a>
                        <a href="#" className='app-load-btn'>
                            <i className='icon-android'>
                            </i>{list[6]}
                        </a>
                        <p>{list[7]}</p>
                    </div>
                </div>
            </div>
        )
    }
}
