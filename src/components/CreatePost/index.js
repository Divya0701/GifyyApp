import {Component} from "react"
import SelectGif from "../SelectGif/"
import FeedItem  from "../FeedItem"

import "./index.css"


class CreatePost extends Component{

    state={isGifSelectionIsActive:false,postData:"",postGif:null,feed:[]}

    activeSelectGif=()=>{
         this.setState({isGifSelectionIsActive:true})
    }
    close=()=>{
        this.setState({isGifSelectionIsActive:false})
    }

    setPostData=event=>{
        this.setState({postData:event.target.value})
    }

    
    post=(gif)=>{
        this.setState({postGif:gif})
    }

    sendPost=()=>{
        const {postData,postGif}=this.state
        const newData = {postData,postGif}
        
        this.setState(prevState=>({feed:[...prevState.feed,newData]}))
        this.setState({postData:"",postGif:null})

    }
    render(){
        const {isGifSelectionIsActive,postData,postGif,feed}=this.state
        
       return(
           <div className="bgContainer">
               <h1 className="heading">Compose Post</h1>
           <div className="composeArea">
               <div className="textContainer">
               <textarea type="text" className="text" value={postData} placeholder="write something" onChange={this.setPostData}></textarea>
               </div>
               <div className="gifContainer">
                  <img src={postGif} className="gifImage" alt=""/>
               </div>
           </div>
           <div className="buttonsSection">
           <button type="button" onClick={this.activeSelectGif} className="button">Select Gif</button>
           <button type="button" onClick={this.close} className="button">Your Feed</button>
           <button type="submit" onClick={this.sendPost} className="button">Post</button>
           </div>
          <div className="div">
          {isGifSelectionIsActive && <SelectGif post={this.post}/>}
          {!isGifSelectionIsActive && (
                        <div className="feed">
                        <ul>
                            {feed.map((eachItem,index)=><FeedItem data={eachItem.postData} gif={eachItem.postGif} key={index}/>)}
                        </ul>
                        </div>)
            }
          </div>
          
           </div>
       )
    }
}

export default CreatePost;