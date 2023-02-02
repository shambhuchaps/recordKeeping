
import { useState } from 'react';
import './App.css';
import Fields from './components/Fields';
import Header from './components/Header';

function App() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [data, setdata] = useState([]);
  console.log(name,email);

  const addData = () => {
    setdata([...data, { name, email }]); 
    setname('');
    setemail('');
  }
  return (
    <div className="App">
      <Header />
      <div className="container mt-5">
        <div className="row">
          <form action='' className="row gy-2 justify-content-center align-items-center">
            <div className="col-sm-5">
              <label className="visually-hidden" htmlFor="autoSizingInput">Name</label>
              <input type="text" className="form-control" id="autoSizingInput" value={name} onChange={(e) => setname(e.target.value)}
                placeholder="Jane Doe" />
            </div>
            <div className="col-sm-5">
              <label className="visually-hidden" htmlFor="autoSizingInput">Email</label>
              <input type="email" className="form-control" id="autoSizingInput"
                value={email}
                onChange={(e) => setemail(e.target.value)} placeholder="Email" />
            </div>
            <div className="col-sm-1">
              <button type="submit" onClick={addData} className="btn btn-danger"><i className="bi bi-plus-lg"></i></button>
            </div>
          </form>
        </div>
        <div className="container d-flex justify-content-center align-items-center mt-5">
          <div className='row justify-content-between data'>
            <h4 className='col-sm-4'>Name</h4>
            <h4 className='col-sm-4'>Email</h4>
            <h4 className='col-sm-4'>Remove</h4>
          </div>
          {
            data.map((element, index) =>{
              return(
                <Fields key={index} name={element.name} email={element.email} index={index}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
