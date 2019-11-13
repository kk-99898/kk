import React, { Component } from 'react'
import './index.css'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'
import Login from './Login'

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div className='page-container navbar-fixed-top'>
                    {/* Logo部分 */}
                    <Logo />
                    {/* 导航栏部分 */}
                    <Nav />
                    {/* 搜索框部分 */}
                    <Search />
                    {/* 登录部分 */}
                    <Login />
                </div>
            </div>
        )
    }
}
