import React, {useState} from 'react';

function Cars(props) {

  const [cars, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carModel, setCarModel] = useState('');
  const [carMake, setCarMake] = useState('');


  const handleAddCar = () =>{
    
    const newCar = {year: carYear, model: carModel, make: carMake};
    setCar(c => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarModel('');
    setCarMake('');
  }

  const handleRemoveCar = () =>{
    
  }

  const handleChangeYear = (e) =>{
    setCarYear(e.target.value);
  }

  const handleChangeModel = (e) =>{
    setCarModel(e.target.value);
  }

  const handleChangeMake = (e) =>{
    setCarMake(e.target.value);
  }



  return(
    <>
      <h2>List of Car Object</h2>

      <ul>
        {cars.map((car,index) =>
                <li key ={index}>
                  {car.year} {car.model} {car.make}
                </li>)}
      </ul>

      <br/>
      <input type="number" value={carYear} onChange={handleChangeYear}></input>
      <input type="text" value={carModel} onChange={handleChangeModel} placeholder='Enter Car Model'></input>
      <input type="text" value={carMake} onChange={handleChangeMake} placeholder='Enter carMake'></input>
      <br/>
      <button onClick={handleAddCar}>Add Car</button>
    </>
  );
}

export default Cars