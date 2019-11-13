import React, { Component } from 'react'
import './index.css'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'
import Content5 from './Content5'
export default class index extends Component {
    render() {
        return (
            <div id='main'>
                <Content1 />
                <Content2 />
                <Content3 />
                <Content4 />
                <Content5 />
            </div>
        )
    }
}
