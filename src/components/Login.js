import logo from '../assent/logo5.svg';
import '../css/login.css';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faUserTie , faKey} from '../../node_modules/@fortawesome/free-solid-svg-icons';
function Login() {
    return (
        <div className="container__form">
            <div className="container__login">
                <img src={logo} className='img__login' alt="logo__isagen" />
                <div className="form-floating mb-3 input__user">
                    <input type="text" className="form-control" id="floatingInput" />
                    <label htmlFor="floatingInput"><FontAwesomeIcon icon={faUserTie} /> Usuario</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"/>
                    <label htmlFor="floatingPassword"><FontAwesomeIcon icon={faKey} /> Contraseña</label>
                </div>
                <div className="d-grid gap-2 container__ingresar">
                    <input type="submit" className="btn text-light" value="Ingresar" />
                </div>
            </div>
        </div>
    );
}

export default Login;
