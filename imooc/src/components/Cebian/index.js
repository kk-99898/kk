import React, { Component } from 'react'
import './index.css'
import list from '../../constants/Cebian';
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            show: false
        })
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop || document.body / scrollTop;
            if (scrollTop > 500) {
                this.setState({
                    show: true
                })
            } else {
                this.setState({
                    show: false
                })
            }
        })
    }
    handleScrollTop() {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }
    render() {
        let { show } = this.state;
        return (
            <div class="elevator" id="J_GotoTop">
                <a href="#" class="elevator-msg">
                    <i class="icon-feedback"></i>
                    <span class="yj">{list.yjfk}</span>
                </a>
                <a href="#" class="elevator-dist">
                    <i class="hb"></i>
                    <span class="yq">{list.yqyj}</span>
                </a>
                <a href="#" class="elevator-faq">
                    <i class="icon-ques"></i>
                    <span class="help">{list.bzzx}</span>
                </a>
                <a href="#" class="elevator-app">
                    <i class="icon-appdownload"></i>
                    <span class="app">{list.xz}</span>
                    <div class="elevator-app-box"></div>
                </a>
                <a href="#" class="elevator-weixin">
                    <i class="icon-wxgzh"></i>
                    <span class="wx">{list.gfwx}</span>
                    <div class="elevator-weixin-box"></div>
                </a>
                <a href="javascript:void(0)" class="elevator-top no-goto" style={this.state.show ? { display: 'block' } : { display: 'none' }} onClick={this.handleScrollTop}>
                    <i class="icon-up2"></i>
                    <span class="top">{list.fhdb}</span>
                </a>
            </div>
        )
    }
}
