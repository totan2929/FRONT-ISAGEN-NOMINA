import Login  from "../components/Login";
import Home  from "../components/Home";
import Nomina  from "../components/Nomina";
import Permisos  from "../components/Permisos";
import Vacaciones  from "../components/Vacaciones";
import User  from "../components/User";
import Reporte  from "../components/Reporte";
import NoFount  from "../components/NoFount";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";






  export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/permisos" element={<Permisos/>}/>
                <Route exact path="/vacaciones" element={<Vacaciones/>}/>
                <Route exact path="/user" element={<User/>}/>
                <Route exact path="/reporte" element={<Reporte/>}/>
                <Route exact path="/nomina" element={<Nomina/>}/>

                <Route path="*" element={<NoFount/>}/>
            </Routes>
        </Router>

    );
  }
