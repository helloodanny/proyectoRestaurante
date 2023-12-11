import './App.css'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Header from './components/header'
function App() {

  return (
<>
<Header />
<Jumbotron/>
<div classNameName="container">
  <div classNameName="row">
    <div className="col-md-12">
    <div className="card" >
  <img src="https://cdnb.artstation.com/p/assets/images/images/048/445/725/large/sidadi-ratatouille2.jpg?1650043011" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ven a probar nuestro platillos que te harán sentir como en casa </h5>
    <p className="card-text">Reserva tu cita con nosotros</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
<Footer />
</>

  )
}

export default App