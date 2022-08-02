
import { useState } from "react";

function App() {

  const [value, setValue] = useState("")
  const [result, setResult] = useState([])

  //fetching API

  function search() {

    fetch(`https://restcountries.com/v3.1/name/${value}`)
      .then(res => res.json())
      .then(data => {
        setResult(data)

      })
  }

  function handleChange(e) {
    setValue(e.target.value)
  }


  return (

    <section>
      <h1 className="title-style">Country Info App</h1>
      <div className="container d-flex justify-content-center py-5 align-items-center">
        <div className="col-lg-4 col-md-8 col-10">

          <div className="d-flex mb-3"><input onChange={handleChange} onKeyUp={search} value={value} type="text" placeholder="Enter country name..." className="form-control" />
            <button onClick={search} className="btn btn-success ms-2">Search</button></div>

          {(typeof result[0] != "undefined") ? (


            <div class="card">
              <img class="card-img-top" src={result[0].flags.svg} alt="Card image cap" />
              <div class="card-body">
                <h3 class="card-title">{result[0].name.common}</h3>
                <p class="card-text"><span>Capital City:</span> {result[0].capital}</p>
                <p class="card-text"><span>Population:</span> {result[0].population}</p>
                <p class="card-text"><span>TimeZone:</span> {Object.values(result[0].timezones)
                  .toString()
                  .split(",")
                  .join(", ")}</p>
                <p class="card-text"><span>Common Languages:</span> {Object.values(result[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</p>
                <p class="card-text"><span>Currencies:</span> {result[0].currencies[Object.keys(result[0].currencies)].name} - {result[0].currencies[Object.keys(result[0].currencies)].symbol}</p>
              </div>
            </div>
          ) : ('')}
        </div>


      </div >
    </section>

  )

}

export default App;
