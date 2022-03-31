import "./index.css"

const FeedItem=props=>{
  const {data,gif}=props
 

  return(
      <li className="feedItem">
       <p className="FeedText">{data}</p>
       <img src={gif} alt="" className="gif"/>
      </li>
  )
}

export default FeedItem