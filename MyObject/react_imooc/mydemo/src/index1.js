import React from 'react'
import ReactDom from 'react-dom'


//这种方式可以理解为创建了一个简单React元素
// const app = <h1>Welcome to React World</h1>

//箭头函数是创建组件的第一种方式
// const createApp  = (props) =>{
//     return(
//         <div>
//             {/*  只要在jsx里面插入js的代码就要加一对花括号，注释也是js，也要加一成花括号 */}
//             <h1>Welcome to React World{props.title}</h1>
//             <p></p>
//         </div>
//     )
// }

// const app = createApp(
//     {
//         title:'React 16.8'
//     }
// ); 


//创建组件的第一种方式：使用箭头函数，但是这个名字要大写开始。
// const App = (props) =>{
//     return(
//         <div>
//             <h1>Welcome to React{props.title}</h1>
//             <p>优秀的{props.title}</p>
//         </div>
//     )
// }
 

// ReactDom.render(
//     <App title="1901" /> ,
//     document.getElementById('root')
// )
if(module.hot){
    module.hot.accept();
}