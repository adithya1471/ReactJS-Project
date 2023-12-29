import { Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registraton";


const App=()=>{
  return(
    <>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/registration" element={<Registration/>} />
         <Route path="/login" element={""} />
         <Route path="/" element={""} />
          <Route path="/" element={""} />
      </Routes>
    </>
  )
}
export default App;