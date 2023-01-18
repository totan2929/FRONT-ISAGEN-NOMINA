import React from 'react'

export default function Modals({changeOcultar , dataModal , user }) {
    const numberContent = dataModal[0];
    let content = "";
    const fecha = new Date().toLocaleDateString();
    const btnSend = dataModal[2];

    if(numberContent === 1){
        content =
                <>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Fecha de Inicio</span>
                            <input type="date" className="form-control"  aria-label="Username"  />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Fecha Fin</span>
                            <input type="date" className="form-control"  aria-label="Username"  />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Tipo de Solicitud</span>
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option defaultValue>Seleccione Tipo de Solicitud</option>
                                <option value="vacaciones">Vacaciones</option>
                                <option value="permiso">Permiso</option>
                            </select>
                        </div>
                    </div>
                </div>
                </>;
    }
    else if(numberContent === 2){
        content = 
                <>
                <div className="row p-5 row__certificade">
                    <div className="col-sm-12 col-md-6 mb-3">
                        <p>
                            Cartago, <strong>{ fecha }</strong>
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-12">
                        <h3 className="text-center mb-5">Certificado Laboral</h3>
                        <p className="mb-4">
                            Se certifica que {user.sexo === "m" ? " el señor" : "la señora"} <strong>{user.nombres} {user.apellidos}</strong> identificado con la c.c <strong>{user.cc}</strong> trabaja en la Empresa
                            <strong> Isagen</strong> desde { user.dateEntry }, y su cargo actual es <strong>{ user.post }</strong> en el cual devenga un salario integral de 
                            {" $ " + user.salary }.
                        </p>
                        <p>
                            Este documento tienen una validez de 90 días calendario a partir de la fecha de expedición.
                        </p>
                        <p>
                           Cordialmente,
                        </p>
                        <strong><h5>la Gerencia</h5></strong>
                    </div>
                </div>
                </>;
    }

    else if(numberContent === 3){
        content = 
                <>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Fecha Requerida</span>
                            <input type="date" className="form-control"  aria-label="Username"  />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Nombres</span>
                                    <input type="text" className="form-control" placeholder={ user.nombres } aria-label="Username"  />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Apellidos</span>
                                    <input type="text" className="form-control" placeholder={ user.apellidos } aria-label="Username"  />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Cédula</span>
                                    <input type="text" className="form-control" placeholder={ user.cc } aria-label="Username"  />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Teléfono</span>
                                    <input type="text" className="form-control" placeholder={ user.phone } aria-label="Username"  />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Cargo</span>
                                    <input type="text" className="form-control" placeholder={ user.post} aria-label="Username"  />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Salario Base</span>
                                    <input type="text" className="form-control" placeholder={ user.salary } aria-label="Username"  />
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr className="text-center bg__primary">
                                        <th colSpan="4">
                                                <h3>Copia de Nómina</h3>
                                        </th>
                                    </tr>
                                    <tr className="table-dark text-center">
                                        <th scope="col">Tipo</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <th scope="row">Salario Devengado</th>
                                        <td>Salario Integral</td>
                                        <td>{"$ " + user.salary }</td>
                                    </tr>
                                    <tr >
                                        <th scope="row">Deducciones del Mes</th>
                                        <td>
                                            <tr  className="border-1">
                                                <td>Permiso no Remunerado</td>
                                                <td> - $ 300000 </td>
                                            </tr>
                                            <tr  className="border-1">
                                                <td>Permiso no Remunerado</td>
                                                <td> - $ 300000 </td>
                                            </tr>
                                        </td>
                                        <td> $ -600000 </td>
                                    </tr>
                                    <tr >
                                        <th scope="row">total a Cancelado</th>
                                        <td>Salario Devengado menos Deducciones del Mes</td>
                                        <td>$ 2900000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </>;
    }
    else if(numberContent === 4){
        content =
                <>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Nombres</span>
                                <input type="text" className="form-control" placeholder={ user.nombres } aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Apellidos</span>
                                <input type="text" className="form-control" placeholder={ user.apellidos } aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Cédula</span>
                                <input type="text" className="form-control" placeholder={ user.cc } aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Teléfono</span>
                                <input type="text" className="form-control" placeholder={ user.phone } aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Usuario</span>
                                <input type="text" className="form-control" placeholder={ user.username } aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Contraseña</span>
                                <input type="text" className="form-control" placeholder={ user.password } aria-label="Username"  />
                            </div>
                        </div>
                    </div>
                </>;
    }
    else if(numberContent === 5){
        content =
                <>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Nombres</span>
                                <input type="text" className="form-control" aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Apellidos</span>
                                <input type="text" className="form-control"  aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Cédula</span>
                                <input type="text" className="form-control"  aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Teléfono</span>
                                <input type="text" className="form-control"  aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Usuario</span>
                                <input type="text" className="form-control"  aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Contraseña</span>
                                <input type="text" className="form-control" aria-label="Username"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Tipo Usuario</span>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option defaultValue>Seleccione Tipo de Usuario</option>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Usuario-Nomina">Usuario-Nómina</option>
                                    <option value="Usuario-Empleado">Usuario-Empleado</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </>;
    }
    else if(numberContent === 6){
        content =
        <>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Nombres</span>
                        <input type="text" className="form-control" placeholder={ user.nombres } aria-label="Username" disabled  />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Apellidos</span>
                        <input type="text" className="form-control" placeholder={ user.apellidos } aria-label="Username" disabled  />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Cédula</span>
                        <input type="text" className="form-control" placeholder={ user.cc }  aria-label="Username" disabled  />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Teléfono</span>
                        <input type="text" className="form-control" placeholder={ user.phone }  aria-label="Username" disabled  />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Usuario</span>
                        <input type="text" className="form-control" placeholder={ user.username }  aria-label="Username" disabled  />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Contraseña</span>
                        <input type="text" className="form-control" placeholder={ user.password } aria-label="Username" disabled />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Tipo Usuario</span>
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" disabled>
                            <option defaultValue>{ user.post }</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Usuario-Nomina">Usuario-Nómina</option>
                            <option value="Usuario-Empleado">Usuario-Empleado</option>
                        </select>
                    </div>
                </div>
            </div>
        </>;
    }


    return (
        <>
        <div className="modal__sigen">
            <div className="modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content">
                <div className="modal-header bg__success">
                    <h4 className="modal-title">{dataModal[1]}</h4>
                    <button type="button" className="btn-close" onClick={changeOcultar}></button>
                </div>
                <div className="modal-body">
                    <div className="container-fluid">
                        {content}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-dangerP" onClick={changeOcultar}>Cerrar</button>
                    { btnSend && <button type="button" className="btn btn-successP">{ dataModal[2] }</button>}
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
