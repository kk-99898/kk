import React, { Component } from 'react'
import './index.css'
import MenuContent from './MenuContent'
import Carousels from './Carousels'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            show:0,
            show1:0
        }
    }
    onMouseEnter = (num) => {
        this.setState({
            show:num,
            show1:num
        })
    }
    onMouseLeave = () => {
        this.setState({
            show:false,
            show1:false
        })
    }

    render() {
        const {show,show1} = this.state
        const onMouseEnter = this.onMouseEnter
        return (
            <div className='g-banner' >
                <div style={{width:'984px',height:'382px'}} onMouseLeave={this.onMouseLeave}>
                <div className='menuwrap'></div>
                <MenuContent show={show} show1={show1} onMouseEnter={onMouseEnter}/>
                </div>
                <Carousels />
            </div>
        )
    }
}
