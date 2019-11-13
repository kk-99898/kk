import React, { Component } from 'react'
import search from '../../../constants/Header/Search'
import './index.css'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            input:true,
            display:'block'
        }
    }
    hideClick = () =>{
        this.setState(prevState =>({
            input:!prevState.input,
            display:prevState.input ? 'none':'block',
        }))
    }
    showClick = () =>{
        this.Input.focus()
    }
    render() {
        return (
            <div className='search-warp' style={{minWidth:32,height:72}}>
                <div className='search-area'>
                    <input type="text" onFocus={this.hideClick} onBlur={this.hideClick} placeholder={search.text} className='search-input' 
                    ref={(input) => { this.Input = input;}}
                    ></input>
                    <input type="hidden" className='btn_search'/>
                    <div className='hotTags' style={{display:this.state.display}}>
                        <a href="#" >{search.text_vue}</a>
                        <a href="#" className='last' >{search.text_python}</a>
                    </div>
                </div>
                <div className='showhide-search' >
                    <i className="icon-search" onClick={this.showClick}></i>
                </div>
            </div>
        )
    }   
}
