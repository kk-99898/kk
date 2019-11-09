import React, { Component } from 'react'
import './index.css'
import list from '../../../constants/Main/Remenkecheng'
import Remenkehcneg from './Remenkecheng'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 1,
            show1:false
        }
    }
    onClick = (num) => {
        this.setState({
            show: num
        })
    }
    onShow = () =>{
        this.setState({
            show1:true
        })
    }
    onHide = () =>{
        this.setState({
            show1:false
        })
    }
    render() {
        return (
            <div className='bg000'>
                <div className='container-types container-rank clearfix'>
                    <h3 className='type-title clearfix' style={{ right: '34px' }}>
                        <span>
                            {list.remenkecheng_title.map(item => item.title)}
                        </span>
                        <div className='l rank-info' onMouseEnter={this.onShow} onMouseLeave={this.onHide}>
                            <i className='imv2-ques' />
                            <dl className={this.state.show1 ? 'info show':'info hide'} >
                                <dt>{list.remenkecheng_title.map(item => item.dt)}</dt>
                                <dd>{list.remenkecheng_title.map(item => item.dd)}</dd>
                                <dt className='free'>{list.remenkecheng_title.map(item => item.dt1)}</dt>
                                <dd>{list.remenkecheng_title.map(item => item.dd1)}</dd>
                            </dl>
                        </div>
                        <ul className='js-rank-tab'>
                            {list.remenkecheng.map(item =>
                                <li onClick={()=> this.onClick(item.id)} className={this.state.show == item.id ? 'curr':'mianfei'}>{item.remenkecheng_title}</li>
                                )}
                        </ul>
                        <a href="#" className='banner_wk r hide'></a>
                    </h3>
                    <Remenkehcneg show={this.state.show}/>
                </div>

            </div>
        )
    }
}
