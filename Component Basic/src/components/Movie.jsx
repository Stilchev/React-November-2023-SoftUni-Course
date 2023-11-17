export default function Movie(props) {
    return(
        <article>
            <h2>{props.data.title}</h2>
            <p>Year: {props.data.year}</p>
            <p>Cast: {props.data.actors}</p>
        </article>
    )
}