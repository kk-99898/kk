import React, { Component } from 'react'
import '../index.css'
export default class index extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {data} = this.props
        return (
            <div className='innerBox'>
                <div className='subinnerBox'>
                    <div className='cates-box'>
                        <div className='fe-base-box'>
                            <div className='banner-line'>
                                <span className='bold mr10 small-title'>
                                    {data.content.title[0]}
                                </span>
                            </div>
                            <div className='tag-box l'>
                                {data.content.tag1.map(item =>
                                    <a href="#">{item}</a>
                                )}
                            </div>
                        </div>
                        {data.content.title[1] ?
                            <div className='fe-base-box'>
                                <div className='banner-line'>
                                    <span className='bold mr10 small-title'>
                                        {data.content.title[1]}
                                    </span>
                                </div>
                                <div className='tag-box l'>
                                    {data.content.tag2.map(item =>
                                        <a href="#">{item}</a>
                                    )}
                                </div>
                            </div>
                            : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}
