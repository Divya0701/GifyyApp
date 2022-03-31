import "./index.css"

const Gifs=props=>{
    const {gif,id,setActiveGifId,isActive} = props;
    const active = isActive?"focused":"notFocused";
    const onClickEvent=()=>{
        setActiveGifId(id)
    }
return(
<li onClick={onClickEvent} className={`gifItem ${active}`}>
    <img src={gif} alt="gifs" id={id} className="card"/>
</li>
)

}

export default Gifs;