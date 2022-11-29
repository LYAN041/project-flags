import '../style.css'
import { useEffect, useState } from 'react';
import CardInfo from '../card-edit';
import Header from '../header';

const url = "https://restcountries.com/v3.1/all";

const Card = () => {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      console.log(data);

      setCountries(data);

      setIsLoading(false);
      setError(false)
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const [countrie, setCountrie] = useState([])

  const getCountrie = async (countrie) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countrie}`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      console.log(data);

      setCountrie(data);

    } catch (error) {
      console.log(error)
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

      if (!res.ok) throw new Error("Not found any country!");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
      setError(false)
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${regionName}`);

      if (!res.ok) throw new Error("Failed..........");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
      setError(false)
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };


  return (
    <>
      <Header onSearch={getCountryByName} onSelect={getCountryByRegion} />
      <div className='container d-flex flex-wrap mt-5' id='container'>

        {isLoading && !error && <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>}
        {error && !isLoading && window.alert("Nenhum país encontrado! Digite o nome em inglês")}


        {countries?.map((country) => (
          <div class="card" id="card">
            <img src={country.flags.png} class="card-img-top w-100 h-50" />
            <div class="card-body mt-2">
              <h5 class="card-title mb-3">{country.name.common}</h5>
              <p class="card-text">
                {" "}
                <span id='strong'>Population:</span>{" "}
                {new Intl.NumberFormat().format(country.population)}
              </p>
              <p className="card-text"><span id='strong'>Region:</span> {country.region}</p>
              <p className="card-text"><span id='strong'>Capital:</span> {country.capital}</p>
              <button type="button" class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => getCountrie(country.name.common)}>
                Info +
              </button>
            </div>
          </div>
        ))}
        <CardInfo countrie={countrie} />
      </div>
    </>
  )
}

export default Card;