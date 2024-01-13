import './App.css'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Header from './components/header'
import { useState } from 'react'
import { db } from './config/database';
import { collection, addDoc } from "firebase/firestore";

function App() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentarios: ""
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  const reservar = async (event) => {
    event.preventDefault();
    console.log(formulario);
    await addDoc(collection(db, "reserva"),formulario);
  }

  return (
    <>
      <Header />
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="col-md-12+">

            <div className="card">
              <img src="https://cdnb.artstation.com/p/assets/images/images/048/445/725/large/sidadi-ratatouille2.jpg?1650043011" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ven a probar nuestros platillos</h5>
                <p className="card-text">Reserva tu cita con nosotros</p>
              </div>
            </div>
          </div>
        </div>


        <div className="row text-center">
          <h2>Sección de reserva</h2>
          <p></p>
          <div className="col-md-6 text-center" style={{ backgroundColor: "black", color: "white" }}>
            <p>Estás a un paso de no perderte de la experiencia más grande en comida</p>
            <p>Deja tus datos y nosotros nos contactamos contigo para reservar fecha, hora y cantidad de lugares.</p>
            <p>Si es una ocasión especial, haznoslo saber.</p>
          </div>

          <div className="col-md-6 text-center" style={{ backgroundColor: "grey", color: "white" }}>

            FORMULARIO
            <p></p>
            <form onSubmit={reservar}>
              <div className="mb-3">
                <label className="form-label">NOMBRE</label>
                <input type="text" className="form-control" name='nombre' onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">EMAIL</label>
                <input type="email" className="form-control" name='email' onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">TELEFONO</label>
                <input type="text" className="form-control" name='telefono' onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">MENSAJES Y COMENTARIOS</label>
                <textarea className="form-control" rows="5" name='comentarios' onChange={handleInputChange}></textarea>
              </div>
              <button className="btn btn-primary">RESERVAR</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default App