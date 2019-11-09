import React, { Component, Fragment } from 'react'
import './index.css'
import list from '../../../../../constants/Main/MenuContent'
import CommentBox from './CommentBox'
import InnerBox from './InnerBox'
export default class index extends Component {
    
    render() {
        const {show1} = this.props
        return (
            <Fragment>
                {list.map(item =>
                    <div className='submenu' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} 
                    style={{display:show1===item.content.id  ? 'block':'none' }}
                    >
                        <InnerBox data={item}/>
                        <CommentBox data={item}/>
                    </div>
                )}
            </Fragment>
        )
    }
}
