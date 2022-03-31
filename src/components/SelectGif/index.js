import { Component } from "react";
import Gif from "../Gif";

import "./index.css"

const initialGif=[
    "https://media0.giphy.com/media/TdfyKrN7HGTIY/giphy.gif?cid=d1049e90ypv7npzvnbcf825azwu39lcc7r71wl48fvgx5xko&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/MeIucAjPKoA120R7sN/giphy.gif?cid=d1049e90ypv7npzvnbcf825azwu39lcc7r71wl48fvgx5xko&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/4qx6IRdg26uZ3MTtRn/giphy-downsized.gif?cid=d1049e90b3h4fsqpmc66e6pyiugepca3u8vv1e4rnrbhhgjt&rid=giphy-downsized.gif&ct=g",
    "https://media0.giphy.com/media/SwIMZUJE3ZPpHAfTC4/giphy.gif?cid=d1049e90eb0xsfzgbsggcmgevxqmfn68c3rn1udud8ai2rtd&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/g5R9dok94mrIvplmZd/giphy-downsized.gif?cid=d1049e90eb0xsfzgbsggcmgevxqmfn68c3rn1udud8ai2rtd&rid=giphy-downsized.gif&ct=g"

]
class SelectGif extends Component{
    
    state = {input:"",gifs:initialGif,activeGifID:-1,isLoading:false}

    changeState=event=>{
     this.setState({input:event.target.value})
    }

    getData=async()=>{
        let APIKEY = "5K3jmR1vWW4YS5GTVxqusPRtGkK4gtki";
        let {input} = this.state;
        console.log(input);
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=5&q=${input}`;
        this.setState({isLoading:true})
        const response = await fetch(url);
        const datas = await response.json();
        this.setState({isLoading:false})
        const data =datas.data;
        const filterdData = data.map((eachItem)=>eachItem.images.downsized.url);
        this.setState({gifs:filterdData});
    }

    setActiveGifId=id=>{
        const post = this.props.post
        const gifs=this.state.gifs
        let selectedGifFiltered=null;
        if(id!==-1){
         selectedGifFiltered = gifs.find((eachItem,index)=>index===id)
        }
        post(selectedGifFiltered)
        this.setState({activeGifID:id})
    }

  

    render(){
        const input = this.state.input
        const gifs = this.state.gifs
        const isLoading=this.state.isLoading
        const activeGifID = this.state.activeGifID
        const visibility = isLoading?"visible":null;
      return(
      
        <div className="gifSearch">
            <div className="controlSection">
            <input type = "text" value={input} onChange={this.changeState} placeholder="Search" className="input"></input>
            <button type="submit" onClick={this.getData} className="go">Go</button>
            </div>
            <ul className="listOfGifs">
            <p className={`loading ${visibility}`}>
                Loading....
            </p>
                {gifs.map((eachItem,index)=><Gif gif={eachItem} key={index} id={index} setActiveGifId={this.setActiveGifId} isActive={index===activeGifID}/>)}
            </ul>
        </div>
      
    )
    }
}
export default SelectGif;