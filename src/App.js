import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';

function App() {
  const url ='https://restcountries.com/v3.1/all'
  const [isLoading,setIsLoading]= useState(true)
  const [error,setError]= useState(null)
  const [countries,setCountries]= useState([])
  const [filteredCountries,setFilterdCountries]=useState(countries)
  
  const fetchData = async (url)=>{
    setIsLoading(true);
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterdCountries(data);
      setError(null)
      setIsLoading(false)
      
    }catch(error){
      setError(error);
      setIsLoading(false)
    }
  }
  useEffect(()=>{
    fetchData(url)
  },[])
  const handleRemoveCountry=(name)=>{
    const filter = filteredCountries.filter((country)=>country.name.common !== name)
    setFilterdCountries(filter);
  }
  const handleSearch=(searchValue)=>{
    let value = searchValue.toLowerCase();
    const newCountry = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    })
    setFilterdCountries(newCountry);
  }
  return (
    <div>
      <h1 style={{fontWeight:'bold'}}>Country App</h1>
      <Search onSearch={handleSearch}/>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2> {error}</h2>} 
      { countries && <Countries onRemoveCountry={handleRemoveCountry} countries={filteredCountries}/>}
    </div>
  );
}

export default App;
