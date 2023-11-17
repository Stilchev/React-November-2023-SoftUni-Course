import Movie from "./Movie"
import Heading from "./Heading"

export default function MovieList(props) {
    return (

        <div className="movie-list">
            <Heading>Some heading</Heading>
            <h2>Movie List</h2>
            <ul>
                <li><Movie data={props.movies[0]} /></li>
                <li><Movie data={props.movies[1]} /></li>
                <li><Movie data={props.movies[2]} /></li>
                
                
            </ul>
        </div>
    )
};