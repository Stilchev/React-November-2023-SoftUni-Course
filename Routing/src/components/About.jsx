import { Link, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Mission from "./Mission";

const About = () => {
    return (
        <>
            <h2>About page</h2>

            <nav>
                <Link to='us'>About Us</Link>
                <Link to='mission'>Our Mission</Link>
            </nav>


            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            <Routes>
                <Route path="/us" element={<AboutUs />}/>
                <Route path="/mission" element={<Mission />}/>
            </Routes>
        </>
    )
}

export default About;