import React, { Component } from 'react'
import './index.css'
import list from '../../constants/Footer'
export default class index extends Component {
    render() {
        return (
            <div class="footer idx-minwidth">
                <div class="container-footer">
                    <div class="footer-wrap idx-width">
                        <div class="footer-sns clearfix">
                            <div class="l">
                                <a href="#" class="footer-sns-weixin" title={list.title1}>
                                    <i class="footer-sns-weixin-expand"></i>
                                </a>
                                <p>{list.footer_wx}</p>
                            </div>
                            <div class="l">
                                <a href="http://weibo.com/u/3306361973" class="footer-sns-weibo hide-text" target="_blank" title={list.title2}></a>
                                <p>{list.footer_wb}</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-link">
                        {list.footer_title.map(item =>
                            <a href="#" title={item}>{item}</a>
                            )}
                    </div>
                    <div class="footer-copyright">
                        <p>
                            <img class="moco-emoji" src="https://www.imooc.com/static/moco/v1.0/images/face/36x36/a9.png" />
                            {list.footer_gs}
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}
