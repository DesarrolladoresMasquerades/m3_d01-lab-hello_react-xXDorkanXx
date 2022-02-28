export default function Article(props){
    console.log(props)
    return (
        <div>
          <img src={props.url} alt={props.text}></img>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
    )
}