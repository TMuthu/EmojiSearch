import React, { Component} from "react";
import './App.css'

class ListLayout extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    async componentDidMount(){
        console.log(this.props.Url);
        console.log(this.props.Url);
        await fetch(this.props.Url).then(
            (response)=>{return response.json()}
        ).then(
            (apidata)=>{ 
                // console.log(apidata);
                this.setState({data:apidata})
                // console.log(this.state.data)
            }
        )
    }
    async componentDidUpdate(prevProps, prevState){

        if(prevProps.Url !== this.props.Url){
            console.log(this.props.Url);
            console.log(this.props.Url);
            await fetch(this.props.Url).then(
            (response)=>{return response.json()}
            ).then(
            (apidata)=>{ 
                // console.log(apidata);
                this.setState({data:apidata})
                // console.log(this.state.data)
            }
        )
        }
        
    }
    emojiclicker = (e)=>{
        alert(e);
    }
    render(){
        return(
            <div className='ListLayout1'>
                {/* {this.props.Url}   */}
                {this.state.data ? this.state.data.map((d)=><div key={d.slug} className='EmojiContainer' onClick={()=>{this.emojiclicker(d.character)}}>{d.character}</div>) : <div className='ErrorMsg'>{"Sorry, No Emojis Found"}</div>}       
            </div>
        )
    }
    

}

export default ListLayout;