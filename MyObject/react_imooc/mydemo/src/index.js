import React, {Component} from 'react'
import {render} from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'
import './index.css'


//定义组件的第二种方式，使用类继承React.Component
// Component 组件
// class App extends Component{
//     render(){
//         console.log(this.props.desc)
//         return(
//             <div>
//                 <h1>类组件！！</h1>
//                 <p>{this.props.desc}</p>
//             </div>
//         )
//     }
// }

// 类组件渲染的原理
// const app = new App({
//     desc: '类组件是继承React.Component的'
// }).render()

const Title = styled.h1`
    color:#F00
    opacity:0.5
    border:2px #F00 solid
`

class App extends Component{
    render(){
        // 使用style内联创建样式
        const style = {color:'red'}
        return( 
            <div>
                <Title>元素中的样式</Title>
                <h1 style={style}>类组件！！</h1>
                <ol>
                    <li style={style}>使用内联创建样式</li>
                    <li className="has-text-color">使用class创建,在React里class要写成className</li>
                    <li className={classNames('a',{'b':true,'c':false})}>有a,b类没有c，使用class创建,在React里class要写成className</li>
                    <li></li>
                </ol>
            </div>
        )
    }

}


// render是react dom 提供的一个方法,这个方法通常只会用一次
render(
    <App />,
    document.getElementById('root')
)


if(module.hot){
    module.hot.accept();
}