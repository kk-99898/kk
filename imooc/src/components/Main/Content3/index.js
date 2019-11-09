import React, { Component } from 'react'
import './index.css'
import list from '../../../constants/Main/Xuexiluxian';
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state={
            show:1
        }
    }
    onClick = (num) =>{
        this.setState({
            show:num
        })
    }
    render() {
        return (
            <div className='bgfff'>
                <div className='container-types container-path clearfix'>
                    <h3 className='type-title clearfix'>
                        <span>{list.xuexiluxiang_title.map(item => item.title)}</span>
                        <ul className='js-path-tab'>
                            {list.xuexiluxian.map(item=>
                                <li className={this.state.show==item.id ? 'curr':''} onClick={()=>this.onClick(item.id)}>
                                    {item.xuexiluxian_title}
                                </li>
                            )}
                        </ul>
                        <a href="#" className='more'>
                            {list.xuexiluxiang_title.map(item => item.a)}
                            <i className='imv2-right2'/>
                        </a>
                    </h3>
                    {list.xuexiluxian.map(item =>
                        <div className={this.state.show==item.id ? 'clearfix types-content js-path-content':'clearfix types-content js-path-content hide'}>
                            {item.xuexiluxian_content.map(item =>
                                <div className='course-path-container'>
                                    <a href="#">
                                        <div className='course-banner'>
                                            <div className='img-up' style={{backgroundImage:'url('+item.img_src+')'}}></div>
                                            <div className='img-mid' style={{backgroundImage:'url('+item.img_src+')'}}></div>
                                            <div className='img-down' style={{backgroundImage:'url('+item.img_src+')'}}></div>
                                        </div>
                                        <h4>{item.img_h4}</h4>
                                        <p>{item.img_p}</p>
                                        <div className='course-path-info'>
                                            <span>{item.img_info1}</span>
                                            <span>
                                                <i className='imv2-star2' />
                                                {item.img_info2}
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
