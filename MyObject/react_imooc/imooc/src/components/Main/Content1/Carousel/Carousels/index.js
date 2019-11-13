import React, { Component } from 'react'
import './index.css'
import list from '../../../../../constants/Main/Carousel'
export default class index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='g-banner-content'>
                <div className='g-banner-box'>
                    <div id="demo" className="carousel slide carousel-fade" data-ride="carousel" data-interval="2500">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to={list.item.id} className ="active"></li>
                            {list.item1.map(item =>
                                <li data-target='#demo' data-slide-to={item.id}></li>
                                )}
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={list.item.lb1.img} />
                            </div>
                            {list.item1.map(item =>
                                <div className="carousel-item">
                                    <img key={item.id} id={item.id} src={item.lb1.img} />
                                </div>
                            )}
                        </div>
                        <div className='bk' style={{backgroundImage:'url('+list.item.lb1.img+')'}} />
                        <a className="carousel-control-prev banner-anchor prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon  icon-left2"></span>
                        </a>
                        <a className="carousel-control-next banner-anchor next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon  icon-right2"></span>
                        </a>

                    </div>
                </div>
            </div>
        )
    }
}
