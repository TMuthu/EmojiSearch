import React , {Component} from "react";
import './App.css';
import ListLayout from "./ListLayout";



class SearchBox extends Component{

    constructor(){
        super();
        this.state = {
            searchText : '' ,
            Url : 'https://emoji-api.com/emojis?access_key=1957b0d3e5252138d6ebeb09af9766f3953b3f41'
        }
    }

    setSearchText= (e)=>{
        this.setState({
          searchText : e.target.value ,
          Url : `https://emoji-api.com/emojis?search=${e.target.value}&access_key=1957b0d3e5252138d6ebeb09af9766f3953b3f41`
        })
    }

    formsubmission = (e)=>{
        e.preventDefault();
    }

    render(){
      return (
        <div className='SearchLayout'>
          <form onSubmit={this.formsubmission}>
            <input type='text' id='emojiname' value={this.state.searchText} placeholder='Emoji Name' autocomplete='off' onChange={this.setSearchText}>
            </input>
            {/* <button type='submit' id='searchbutton'>Search</button> */}
          </form>
          <ListLayout Url={this.state.Url}/>
        </div>
      )
    }
}

export default SearchBox;