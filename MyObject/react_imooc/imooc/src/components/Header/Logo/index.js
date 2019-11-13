import React, { Component } from 'react'
import './index.css'
import list from './../../../constants/Header/Logo/index'
export default class Logo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='logo'>
                <a href="#" title={list.title1}>
                    <img src={require('./../../../img/header/logo.png')} alt={list.title1} />
                </a>
            </div>
        )
    }
}
