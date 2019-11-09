import React, { Component } from 'react'
import './index.css'
import list from '../../../../constants/Main/bIgTitle'
export default class index extends Component {
    render() {
        return (
            <div className="container-types container-recommend clearfix">
                <h3 className='types-title clearfix'>
                    <span>
                        {list.map(item =>
                            item.zhiyejinjie.title
                        )}
                    </span>
                    <span className='intro1'>{list.map(item =>
                        item.zhiyejinjie.subTitle
                    )}</span>
                </h3>
                {list.map(item =>
                    <div className='recommend-box'>
                        {item.item1.map(item =>
                            <a href="#">
                                <div key={item.id} className='recommend l' style={{ backgroundImage: 'url(' + item.lb1.img + ')' }} />
                            </a>
                        )}
                    </div>
                )}
            </div>
        )
    }
}
