import React, { Component } from 'react'
import list from '../../../../constants/Main/Xingshanghaoke'
import list1 from '../../../../constants/Main/bIgTitle'

import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className='container-types1 clearfix'>
                <h3 className='type-title clearfix'>
                    <span>{list1.map(item => item.xinshanghaoke.title)}</span>
                </h3>

                <div className='clearfix types-content'>
                    {list.xingshanghaoke.map((item, i) =>
                        <div className='index-card-container course-card-container container'>
                            <a href="#" className='course-card'>
                                {item.course_stat ?
                                    <div className='course-stat new'>
                                        {item.course_stat}
                                    </div> : ''
                                }
                                <div className='course-card-top hashadow'>
                                    <img className='course-banner' src={item.img_src} />
                                    <div className='course-label'>
                                        <label>{item.course_label}</label>
                                        <label>{item.course_label2}</label>
                                    </div>
                                </div>
                                <div className='course-card-content'>
                                    <h3 className='course-card-name'>{item.course_name}</h3>
                                    <div className='course-card-bottom'>
                                        <div className='course-card-info'>
                                            <span>{item.course_jibie}</span>
                                            <span>
                                                <i className='imv2-set-sns' />{item.course_shuliang}
                                            </span>
                                            <span className='r'>{item.course_pingjia}
                                                <div className='evaluation-desc-box clearfix'>
                                                    <i className='trangle'></i>
                                                    <div className='left-box l'>
                                                        <p>{item.phb_zhpf}</p>
                                                        <p className='big-text'>{item.phb_pf}</p>
                                                        <p>{item.phb_pj}</p>
                                                    </div>
                                                    <div className='rightcourse-card-container-box right-box l'>
                                                        <p>{item.phb_info4}
                                                            <span>{item.phb_info_1}</span>
                                                        </p>
                                                        <p>{item.phb_info5}
                                                            <span>{item.phb_info_2}</span>
                                                        </p>
                                                        <p>{item.phb_info6}
                                                            <span>{item.phb_info_3}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                        <div className='course-card-price'>
                                            {item.course_card_info_price}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
