import React, { Component } from 'react'
import './index.css'
import Carousel from './Carousel'
import EmploymentClass from './EmploymentClass'
import Career from './Career'
export default class index extends Component {
    render() {
        return (
            <div className='bgfff banner-box'>
                <Carousel />
                <EmploymentClass />
                <Career />
            </div>
        )
    }
}
