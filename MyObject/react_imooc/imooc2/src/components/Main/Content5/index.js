import React, { Component } from 'react'
import './index.css'
import list from '../../../constants/Main/Mukezhuanlan'
export default class index extends Component {
    render() {
        return (
            <div className='bgfff'>
                <div className='container-types container-read clearfix'>
                    <h3 className='type-title clearfix'>
                        <span>{list.zhuanlan.title}</span>
                        <a href="#" className='more-2'>{list.zhuanlan.footer}
                            <i className='imv2-right2'></i>
                        </a>
                    </h3>
                    <div className='clearfix types-content'>
                        {list.mukezhuanlan.map(item =>
                            <div className='course-read-container'>
                                <div className='course-banner'>
                                    <a href="#">
                                        <img src={item.mkzl_imgsrc} />
                                        <div className='try-read-img'></div>
                                    </a>
                                </div>
                                <h4>
                                    <a href="#">{item.mkzl_title}</a>
                                </h4>
                                <div className='course-read-info'>
                                    <span>{item.mkzl_info1}</span>
                                </div>
                                <div className='course-read-teacher'>
                                    <a href="#">
                                        <span>{item.mkzl_teacher}</span>{item.mkzl_info2}
                                    </a>
                                </div>
                                <div className='course-read-price'>
                                    <a href="#" className='course-card-price'>
                                        <span className='sale'>{item.mkzl_price}</span>
                                        <span className='ori'>{item.mkzl_yuanjia}</span>
                                        <div className='countdown r'>
                                            {item.mkzl_xianshiyouhui ? <span className='name'>{item.mkzl_xianshiyouhui}</span>:''}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
