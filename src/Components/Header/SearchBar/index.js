import React, {useState, Component} from 'react';
import {Search} from "semantic-ui-react";
import {Link} from 'react-router-dom';

/*"Silver cotton-fiber hammock",
      "Influence: Science and Practice",
      "The Intelligent Investor",
      "Poor Charlie's Almanack",
      "Made In America",
      "The Startup Playbook"*/

const products = [
  {id: "111", title:"Silver cotton-fiber hammock", price:"122.37", description:"4", image:"/images/hammock.jpg"},
  {id:"112", title:"Influence: Science and Practice", price:"12.24", description:"5", image:"/images/influence.jpg"},
  {id:"113", title:"The Intelligent Investor", price:"24.35", description:"4", image:"/images/intelligentinvestor.jpg"},
  {id:"114", title:"Poor Charlie's Almanack", price:"32.57", description:"4", image:"/images/almanack.jpeg"},
  {id:"115", title:"Made In America", price:"9.96", description:"4", image:"/images/made-in-america.jpg"},
  {id:"116", title:"The Startup Playbook", price:"14.42", description:"3", image:"/images/startupplaybook.jpg"}]

  class Name extends Component {
    render() {
        return (
            <a href={`#${this.props.name.id}`} key={this.props.name.id} style={{textDecoration: 'none', color: 'rgb(220,220,220)'}}>
            <div style={{border: '1px solid', borderColor: '#a88734 #9c7e31 #846a29', paddingTop: '15px', background: '#cd9042', textShadow: '1px 1px 1px black', height: 130, width: 200, fontSize: '0.8rem', borderRadius: 5}}>
                <img style={{height: 80, width: 80, objectFit: 'contain'}} src={this.props.name.image}/>
                <br></br>
                <div>
                <div style={{paddingBottom: 6, fontWeight: 700}}>{this.props.name.title}</div>
                <div style={{fontWeight: 500}}>${this.props.name.price}</div>
                </div>
            </div>
            </a>
        )
    }
}

class NamesContainer extends Component {
  render() {
      return (
          <div className="SearchBar__NamesContainerWrapper" style={{position: 'absolute', top: 0, left: 0, visibility: 'hidden'}}>
              {this.props.names.map(name => <Name name = {name}/>)}
          </div>
      )
  }
}


class SearchBar extends Component {

  state = {
    names: products,
    searchTerm: ''
  }
  hideSearchBar = () =>{
    document.querySelector('.SearchBar__NamesContainerWrapper').style.visibility = 'hidden'
  }
  displaySearchBar = () => {
    this.state.searchTerm == '' ?
       (
        document.querySelector('.SearchBar__NamesContainerWrapper').style.visibility = 'hidden'
       )
    
    :
      (document.querySelector('.SearchBar__NamesContainerWrapper').style.visibility = 'visible'
      )  
  }

  editSearchTerm = async (e) => {
    await this.setState({searchTerm: e.target.value})
    console.log('state:', this.state.searchTerm)
    //document.querySelector('.SearchBar__NamesContainerWrapper').style.display = 'block !important'
    await this.displaySearchBar()
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
    render(){
      return (
        <div className="SearchBar__wrapper" style = {{textAlign: 'center', zIndex: '100', width: '100%', marginRight: 10}}>
          <input onFocus={this.displaySearchBar} onBlur={this.hideSearchBar} style={{width: '100%', height: 26}} className="SearchBar__input" type= 'text' value = {this.state.searchTerm} onChange = {e => this.editSearchTerm(e)} placeholder = 'Search for a name!'/>
          <br></br>
          <div className="" style={{position: 'relative'}}>
          <NamesContainer names = {this.dynamicSearch()}/>
          </div>
        </div>
      );
    }
}

  /*$('.ui.search')
  .search({
    source: content
  })
;
var content = [
  { title: 'Andorra' },
  { title: 'United Arab Emirates' },
  { title: 'Afghanistan' },
  { title: 'Antigua' },
  { title: 'Anguilla' },
  { title: 'Albania' },
  { title: 'Armenia' },
  { title: 'Netherlands Antilles' },
  { title: 'Angola' },
  { title: 'Argentina' },
  { title: 'American Samoa' },
  { title: 'Austria' },
  { title: 'Australia' },
  { title: 'Aruba' },
  { title: 'Aland Islands' },
  { title: 'Azerbaijan' },
  { title: 'Bosnia' },
  { title: 'Barbados' },
  { title: 'Bangladesh' },
  { title: 'Belgium' },
  { title: 'Burkina Faso' },
  { title: 'Bulgaria' },
  { title: 'Bahrain' },
  { title: 'Burundi' }
  // etc
];*/
/*
  return(
    <div style={{textAlign: 'center', paddingTop: '30vh'}}>
      <input type="text" value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search'/>
      <br></br>
      <h3>search</h3>
      <NamesContainer names={this.dynamicSearch()}/>
    </div>
)}}
//ilter through everything onChange
*/


export default SearchBar;



{/*import _ from 'lodash'
import React, { Component, useState } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import {UseStateValue} from "../../../contextStore"

 const [isLoading, useIsLoading] = useState(false);
  const [value, useValue] = useState('');
  const [results, useResults] = useState([])
const initialState = { isLoading: false, results: [], value: '' }
const cart = () => UseStateValue().cart


export default function SearchExampleStandard () {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);
    const {cart} = UseStateValue();
  const source = () => {
      return(
        _.times(cart.length, () => ({
            title: cart.title,
            id: cart.id,
            price: cart.price,
            image: cart.image
        })))
  }
// change result.title to just result
  const handleResultSelect = (e, { result }) => setValue(result.title)

  const handleSearchChange = (e, { value }) => {
    setIsLoading(true);
    setValue(value)

    setTimeout(() => {
      if (value.length < 1){
          return(
              isLoading
          )
      }

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.source(), isMatch),
      })
    }, 300)
  }

    //const { isLoading, value, results } = this.state

    return (

      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={e => handleResultSelect(e,{results})}
            onSearchChange={_.debounce(handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
              <div onClick={e => console.log(cart)}style={{background: 'red'}}>cart0=</div>
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.source(), null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
          </Grid>
    )
  }
*/}