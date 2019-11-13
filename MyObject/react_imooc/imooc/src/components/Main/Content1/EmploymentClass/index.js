import React, { Component, } from 'react'
import './index.css'
import list from '../../../../constants/Main/bIgTitle'
import list2 from '../../../../constants/Main/main_data'
export default class index extends Component {
    render() {
        
        return (
            <div className="container-types container-recommend clearfix">
                <h3 className='types-title clearfix'>
                    <span>
                        {list.map(item =>
                            item.jiuyeban.title
                        )}
                    </span>
                    <span className='intro'>{list.map(item =>
                        item.jiuyeban.subTitle
                    )}</span>
                </h3>
                <div className='path-list clearfix'>
                    {list2.jiuyeban.map(item => 
                            <a href="#" className={item.className}>
                                <i className={'i-'+item.className} />
                                <p className='tit' >{item.tit}</p>
                                <p className='desc'>{item.desc}</p>
                            </a>
                        )}
                </div>
            </div>
        )
    }
}
