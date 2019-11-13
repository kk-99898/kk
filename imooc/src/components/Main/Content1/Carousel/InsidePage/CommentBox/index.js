import React, { Component, Fragment } from 'react'
import '../index.css'
export default class index extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {data} = this.props
        return (
            <Fragment>
                    <div className='recomment-box'>
                        {data.content.bottom_content.map(item =>
                            <div className='l banner-course-card'>
                                <a href="#" title={item.bottom_title}>
                                    <img src={item.img} className='l' />
                                    <div className='l course-card'>
                                        <h3 className='course-card-name'>
                                            {item.name}
                                        </h3>
                                        {item.price ?
                                            <div>
                                                <div className='course-card-price l'>
                                                    {item.price}
                                                </div>
                                                <div className='course-card-dot l'>
                                                    <i className='imv2-dot_samll' />
                                                </div>
                                            </div>
                                            :
                                            ''
                                        }
                                        <div className='course-card-info l'>
                                            {item.info}
                                        </div>
                                        <div className='course-card-dot l'>
                                            <i className='imv2-dot_samll' />
                                        </div>
                                        <div className='course-card-info l'>
                                            <i className='icon-set_sns'></i>
                                            {item.number}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
            </Fragment>
        )
    }
}
