import React, { Component } from 'react';
import classNames from 'classnames';
import './App.css';
import PropTypes from 'prop-types'
import loading from './spinner-solid.svg'
import {sortBy} from 'lodash'


// ES5写法获取索引写法
// function isSearched(searchTerm){
//   return function(item){
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   }
// }

// ES6写法
// const isSearched = searchTerm => item =>
//   item.title.toLowerCase().includes(searchTerm)


const DEFAULT_QUERY = '';
const DEFAULT_HPP = '10';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

const SORTS = {
  NONE:list => list,
  TITLE:list => sortBy(list,'title'),
  AUTHOR:list => sortBy(list,'author'),
  COMMENTS:list => sortBy(list,'num_comments').reverse(),
  POINTS:list => sortBy(list,'points').reverse(),  
}

//用模板字符串连接起来
// const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

// console.log(url)

// const oldNames = ['Robin','Andrew']
// const newNames = ['Dan','Jordan']
// const allUsers = [...oldNames,...newNames]
// console.log(allUsers)

// const userNames = {firstName:'Robin',lastName:'Wretch'}
// const age = 28
// const user = {...userNames,age}
// console.log(user)
const updateSearchTopStoriesState = (hits,page) => (prevState) => {
  const { searchKey,results} = prevState;

  const oldHits = results && results[searchKey]
  ? results[searchKey].hits
  : [];
  
  const updatedHits = [
  ...oldHits,
  ...hits
  ];
  return{
    results:{
      ...results,
      [searchKey]:{hits:updatedHits,page}
    },
    isLoading:false
  };
};
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      results: null,
      searchKey:'',
      searchTerm:DEFAULT_QUERY,
      error:null,
      isLoading:false,
      
    }
    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this)
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
  }



  needsToSearchTopStories(searchTerm){
    return !this.state.results[searchTerm]
  }

  componentDidMount(){
    const {searchTerm} = this.state
    this.setState({searchKey:searchTerm})
    this.fetchSearchTopStories(searchTerm)
  }
  onSearchSubmit(event){
    const { searchTerm } = this.state;
    this.setState({searchKey:searchTerm});

    if(this.needsToSearchTopStories(searchTerm)){
      this.fetchSearchTopStories(searchTerm);
    }
    event.preventDefault()
  }


  onDismiss(id){
    const {searchKey,results} = this.state;
    const {hits,page} = results[searchKey]
    
    const isNotId = item => item.objectID !==id;
    const updatedHits = hits.filter(isNotId)
    this.setState({
      results:{...results,[searchKey]:{hits:updatedHits,page}
    }
  })
}
  // onClickMe(){
  //   console.log(this)
  // }
  onSearchChange(event){
    this.setState({searchTerm:event.target.value})
  }

  // setSearchTopStories(result){
  //   const {hits,page} = result
  //   console.log("llll: "+result)
  //   const oldHist = page !== 0
  //   ? this.state.result.hits
  //   :[]
  //   const updatedHits = [
  //     ...oldHist,
  //     ...hits
  //   ]
  //   this.setState({
  //     result:{hist:updatedHits,page}
  //   })
  // }
 
  setSearchTopStories(result) {
    const { hits, page } = result;
    this.setState(updateSearchTopStoriesState(hits,page));
    }

  
  // fetchSearchTopStories(searchTerm,page = 0){
  //   fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
  //   .then(response => response.json())
  //   .then(result => this.setSearchTopStories(result))
  //   .catch(e => e)
  // }
  // fetchSearchTopStories(searchTerm, page = 0) {
  //   fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
  //   .then(response => response.json())
  //   .then(result => this.setSearchTopStories(result))
  //   .catch(e => e);
  //   }
    fetchSearchTopStories(searchTerm, page = 0) {
      this.setState({isLoading:true});

      fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => this.setState({error:e}));
      }

  render() {
    // console.log(this.state)
    const{searchTerm,results,searchKey,error,isLoading,sortKey,isSortReverse} = this.state;
    const page = (results && results[searchKey] && results[searchKey].page) || 0;
    const list = (results && results[searchKey] && results[searchKey].hits) || [];
    // if(!result){return null}
    if(error){
      return (
        <div className='page'>
          <div className='interactions'>
            <p>Something went wrong.</p>
          </div>
          :<Table list={list} onDismiss={this.onDismiss}>
          </Table>
        </div>
      )
    }
    return (
      <div className="page">
        <div className='interactions'>
        <Search value={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit}>
          Search
        </Search>
        <Table list={list} onDismiss={this.onDismiss} isSortReverse={isSortReverse} sortKey={sortKey} onSort={this.onSort}/>
        <div className='interactions'>
          {isLoading ? <Loading /> :<Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>More</Button>}
        </div>
          </div>
          </div>
          )}       
  }

 

  // class Search extends Component{
  //   componentDidMount(){
  //     if(this.input){
  //       this.input.focus();
  //     }
  //   }
  //   render(){
  //     const{
  //     value,
  //     onChange,
  //     onSubmit,
  //     children
  //    }  = this.props;
  //    return(      
  //    <form onSubmit={onSubmit}>
  //     <input
  //     type="text"
  //     value={value}
  //     onChange={onChange}
  //     ref={(node) => {this.input = node;}}
  //     />
  //     <button type="submit">
  //     {children}
  //     </button>
  //     </form>
  //   )
  //   }
  // }

  const Loading = () => 
    <div className='img'>
      <img src={loading} alt="loading...." />
    </div>

  const Search = ({
    value,
    onChange,
    onSubmit,
    children
  }) => {
    let input;
    return(
      <form onSubmit={onSubmit}>
        <input type="text"
        value={value}
        onChange={onChange}
        ref={(node) => input = node}
        />
        <button type='submit'>
          {children}
        </button>
      </form>
    )
  }
   
    
  // class Table extends Component{
  //   render(){
  //     // const {list,onDismiss} = this.props;
  //     // const largeColumn = {width:'40%'}
  //     // const midColumn={width:'30%'}
  //     // const smallColumn={width:'10%'}
  //     // return(
  //       // <div className='table'>
        
  //       //   {list.filter().map(item =>
              
  //       //     )}
  //       // </div>
  //     // )
  //   }
  // }
  
  const largeColumn = {
    width: '40%'
    };
    const midColumn = {
    width: '30%'
    };
    const smallColumn = {
    width: '10%'
    };

  // const Table = ({list,sortKey,isSortReverse,onSort,onDismiss}) => {
  //   const sortedList = SORTS[sortKey](list)
  //   const reverseSortedList = isSortReverse
  //     ? sortedList.reverse()
  //     :sortedList;
  //   return(
  //     <div className='table'>
  //     <div className='table-header'>
  //       <span style={largeColumn}>
  //         <Sort sortKey={'TITLE'} onSort={onSort}>
  //           Title
  //         </Sort>
  //       </span>
  //       <span style={midColumn}>
  //         <Sort sortKey={'AUTHOR'} onSort={onSort}>
  //           Author
  //         </Sort>
  //       </span>
  //       <span style={smallColumn}>
  //         <Sort sortKey={'COMMENTS'} onSort={onSort}>
  //           Comments
  //         </Sort>
  //       </span>
  //       <span style={smallColumn}>
  //         <Sort sortKey={'POINTS'} onSort={onSort}>
  //           Points
  //         </Sort>
  //       </span>
  //       <span style={smallColumn}>
  //         Archive
  //       </span>
  //     </div>
  //       {reverseSortedList.map(item =>{
  //         return(
  //           <div key={item.objectID} className='table-row'>
  //               <span style={largeColumn}>
  //                 <a href={item.url}>{item.title}</a>
  //               </span>
  //               <span style={midColumn}>{item.author}</span>
  //               <span style={smallColumn}>{item.num_comments}</span>
  //               <span style={smallColumn}>{item.points}</span>
  //               <span>
  //                 <Button
  //                   onClick={() => onDismiss(item.objectID)}
  //                   type='button'
  //                   className='button-inline'
  //                 >
  //                   Dismiss
  //                 </Button>
  //               </span>
  //             </div>
  //             )
  //           }
  //           )}
  //   </div>
  //   )
  // }
  
  class Table extends Component {
    constructor(props){
      super(props);
      this.state = {
        sortKey:'NONE',
        isSortReverse:false,
      };
      this.onSort = this.onSort.bind(this)
    }
    onSort(sortKey){
      const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
      this.setState({sortKey,isSortReverse});
    }
    
    render() {
      const{
        list,
        onDismiss,
      }=this.props;
      const{
        sortKey,
        isSortReverse,
      }=this.state;

      const sortedList = SORTS[sortKey](list);
      const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;
      return (
        <div className='page'>
          <div className='table-header'>
            <span style={largeColumn}>
              <Sort sortKey={'TITLE'} onSort={this.onSort} activeSortKey={sortKey}>Title</Sort>
            </span>
            <span style={midColumn}>
              <Sort sortKey={'AUTHOR'} onSort={this.onSort} activeSortKey={sortKey}>Author</Sort>
            </span>
            <span style={smallColumn}>
              <Sort sortKey={'COMMENTS'} onSort={this.onSort} activeSortKey={sortKey}>Comments</Sort>
            </span>
            <span style={smallColumn}>
              <Sort sortKey={'POINTS'} onSort={this.onSort} activeSortKey={sortKey}>Points</Sort>
            </span>
            <span style={smallColumn}>Archive</span>
          </div>
          {reverseSortedList.map((item =>
            <div key={item.objectID} className='table-row'>
                <span style={largeColumn}>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span style={midColumn}>{item.author}</span>
                <span style={smallColumn}>{item.num_comments}</span>
                <span style={smallColumn}>{item.points}</span>
                <span>
                  <Button
                    onClick={() => onDismiss(item.objectID)}
                    type='button'
                    className='button-inline'
                  >
                    Dismiss
                  </Button>
                </span>
              </div>
              )
          )}
       </div>
      )
    }
  }
  
  
  const Sort =({
    sortKey,activeSortKey,onSort,children
  })=> {
    const sortClass = classNames(
      'button-inline',
      {'button-active':sortKey === activeSortKey}
    );
    return(
      <Button 
      onClick={() => onSort(sortKey)}
      className={sortClass}
  >
    {children}
  </Button>
    )
  }
  

  const Button = ({
        onClick,
        className,
        children,
      })=>
        <button 
        onClick={onClick}
        className={className}
        type='button'
        >
          {children}
        </button>
  // Button.propTypes = {
  //   onClick:PropTypes.func.isRequired,
  //   className:PropTypes.string,
  //   children:PropTypes.node.isRequired,
  // }
    
  Button.defaultProps = {
    className:'',
  }

  Table.propTypes = {
    list:PropTypes.array.isRequired,
    onDismiss:PropTypes.func.isRequired,
  };


export default App;

export {
  Button,
  Search,
  Table,
}
