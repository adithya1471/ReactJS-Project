import {Link} from "react-router-dom";
import './Home.css'

const Home=()=>{
    return(
        <>
           <div>
            <h1>Welcome to Customer Portal</h1>
            <div>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/registration">Registration</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/showAllRecords">Customer List Screen</Link>
            
            
                {/* <Routes>
                    <Route path="/" element={""} />
                    <Route path="/registration" element={""} />
                    <Route path="/" element={""} />
                    <Route path="/" element={""} />
                    <Route path="/" element={""} />
                </Routes> */}
            </div>
           </div>
        </>
    )
}
export default Home;