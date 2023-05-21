import React, { useState } from 'react'
import MKBox from 'components/MKBox'
import MKButton from 'components/MKButton'
import MKAlert from 'components/MKAlert'
import MKTypography from 'components/MKTypography'
import MKInput from 'components/MKInput'
import Modal from '@mui/material/Modal'
import axios from 'axios'


const CrearAdmin = () => {

    const [showmodalexito, setShowModalExito] = useState(false);
    const [showmodalerror, setShowModalError] = useState(false);
    const [admin, setAdmin] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [showmodal, setShowModal] = useState(false);





    return (
        <div>
            <Modal open={showmodalexito} onClose={() => setShowModalExito(false)}>
                <MKAlert severity="success">
                    <MKTypography variant="h6" component="h2" gutterBottom>
                        ¡El administrador se ha creado con éxito!
                    </MKTypography>
                </MKAlert>
            </Modal>
            <Modal open={showmodalerror} onClose={() => setShowModalError(false)}>
                <MKAlert severity="error">
                    <MKTypography variant="h6" component="h2" gutterBottom>
                        ¡El administrador no se ha creado!
                    </MKTypography>
                </MKAlert>
            </Modal>
            <Modal open={showmodal} onClose={() => setShowModal(false)}>
              
                <MKBox sx={{ width: 400, height: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, }}>
                    <MKTypography variant="h6" component="h2" gutterBottom>
                        Crear administrador
                    </MKTypography>
                    <MKInput
                        id="outlined-basic"
                        label="Nombre"
                        variant="outlined"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <br />
                    <br />
                    <MKInput
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    <MKInput

                        id="outlined-basic"
                        label="Contraseña"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <MKInput
                        id="outlined-basic"
                        label="Confirmar contraseña"
                        variant="outlined"
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <br />
                    <br />
                    <MKButton
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            axios.post("http://172.16.238.10:8000/api/admins", {
                                name: nombre,
                                email: email,
                                password: password,
                                password_confirmation: password_confirmation
                            }).then((response) => {
                                console.log(response);
                                setShowModalExito(true);
                                setShowModal(false);
                            }).catch((error) => {
                                console.log(error);
                                setShowModalError(true);
                                setShowModal(false);
                            })
                        }}
                    >
                        Crear
                    </MKButton>
                </MKBox>
            </Modal>
            <MKButton
                color="primary"
                size="large"
                className="btn"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Crear Administrador
            </MKButton>


        </div>
    )
}

export default CrearAdmin

