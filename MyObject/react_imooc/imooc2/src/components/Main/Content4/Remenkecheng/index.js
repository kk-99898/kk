import React, { Component,Fragment } from 'react'
import list from '../../../../constants/Main/Remenkecheng';
export default class index extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const {show} = this.props
        return (
            <Fragment>
                {list.remenkecheng.map(item =>
                        <div className={show == item.id ? 'clearfix type-content js-rank-content':'clearfix type-content js-rank-content hide'}>
                            {item.remengkecheng_content.map(item =>
                                <div className='index-card-container course-card-container container'>
                                    <a href="#">
                                        <div className={item.phb_biaoqian ? 'course-stat upgrade':''}>{item.phb_biaoqian}</div>
                                        <div className='course-card-top hashadow'>
                                            <img src={item.phb_imgsrc} className='course-banner'/>
                                            <div className='course-label'>
                                                <label>{item.phb_label}</label>
                                                {item.phb_label2=='' ? '':<label>{item.phb_label2}</label>}
                                            </div>
                                        </div>
                                        <div className='course-card-content'>
                                            <h3 className='course-card-name'>{item.phb_title}</h3>
                                            <div className='course-card-bottom'>
                                                <div className='course-card-info'>
                                                    <span>{item.phb_info1}</span>
                                                    <span>
                                                        <i className='imv2-set-sns' />
                                                        {item.phb_info2}
                                                    </span>
                                                    <p className='desc'>{item.phb_desc}</p>
                                                    <span className='r text-top'>{item.phb_info3}
                                                        <div
                                                        className='evaluation-desc-box clearfix'>
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
                                                    {item.phb_price}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )} 
                        </div>
                    )}
            </Fragment>
        )
    }
}
