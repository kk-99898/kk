import React, { Component } from 'react'
import list from '../../../constants/Header/Nav'
import './index.css'
export default class Nav extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <ul className='nav-item'>
                {list.map(item =>
                <li key={item}>
                    <a href="#">{item[0]} 
                        {
                            item[1]?<i className='icn-new'></i>:""
                        }
                    </a>
                </li>
                )}
            </ul>
        )
    }
}

