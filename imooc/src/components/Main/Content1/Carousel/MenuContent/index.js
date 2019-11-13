import React, { Component,Fragment } from 'react'
import './index.css'
import list from '../../../../../constants/Main/MenuContent'
import InsidePage from '../InsidePage'
export default class index extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {show,show1} = this.props
        const {onMouseEnter} = this.props

        return (
            <Fragment>
            <div className='menuContent'>
                {list.map(item =>
                    <div key={item.id} id={item.id} onMouseEnter={()=>onMouseEnter(item.id)} 
                        className={show === item.id ? 'item js-menu-item-on':'item'}>
                        <a href="#">
                            <span className='group'>{item.group}</span>
                            <i className='imv2-arrow1_r' />
                        </a>
                    </div>
                )}
            </div>
            <InsidePage show1={show1}/>
            </Fragment>
        )
    }
}
