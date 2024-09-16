function House(props){
    return(
        <>
            <img alt="house" src={/images/${props.himg}}/>
            <p>This is a beautiful house with name {props.hname}</p>
        </>
    )
}

export default House;
