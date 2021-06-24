import React, {useState, useEffect} from 'react';

const api = {
  key: "a34d972c17727b62a1bb4661ad42515a",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt =>{
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      window.location.assign(`https://openweathermap.org/city/${weather.id}`);
    }
  });

  const dataBuilder = (d) =>{

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  function renderImage(param) {
    switch (param){
      case '01d': return [<img src="http://openweathermap.org/img/wn/01d@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#40a3ff')];
      case '01n': return [<img src="http://openweathermap.org/img/wn/01n@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#002c52')];
      case '02d': return [<img src="http://openweathermap.org/img/wn/02d@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#58a3e9')];
      case '02n': return [<img src="http://openweathermap.org/img/wn/02n@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#071d30')];
      case '03d': return [<img src="http://openweathermap.org/img/wn/03d@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#74a2ce')];
      case '03n': return [<img src="http://openweathermap.org/img/wn/03n@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#0c1824')];
      case '04d': return [<img src="http://openweathermap.org/img/wn/04d@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#7d9cb9')];
      case '04n': return [<img src="http://openweathermap.org/img/wn/04n@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#0c1824')];
      case '09d': return [<img src="http://openweathermap.org/img/wn/09d@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#8395a5')];
      case '09n': return [<img src="http://openweathermap.org/img/wn/09n@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#0c1824')];
      case '10d': return [<img src="http://openweathermap.org/img/wn/10d@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#858688')];
      case '10n': return [<img src="http://openweathermap.org/img/wn/10n@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#0c1824')];
      case '11d': return [<img src="http://openweathermap.org/img/wn/11d@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#797979')];
      case '11n': return [<img src="http://openweathermap.org/img/wn/11n@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#0c1824')];
      case '13d': return [<img src="http://openweathermap.org/img/wn/13d@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#8a9299')];
      case '13n': return [<img src="http://openweathermap.org/img/wn/13n@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#0c1824')];
      case '50d': return [<img src="http://openweathermap.org/img/wn/50d@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#8fb1cf')];
      case '50n': return [<img src="http://openweathermap.org/img/wn/50n@2x.png" alt={weather.weather[0].main}/>,
      document.documentElement.style.setProperty('--color-background', '#051c33')];
      default: return [<img src="http://openweathermap.org/img/wn/02d@2x.png" alt='Welcome'/>,
      document.documentElement.style.setProperty('--color-background', '#40a3ff')];
    }
  }

  return (
    <div className='app'>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.name != "undefined") ? (
        <div>
          <div className='location-box'>
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            <div className='date'>{dataBuilder(new Date())}</div>
          </div>
          <div className='weather-box'>
              <div className='icon'>
                {renderImage(weather.weather[0].icon)}
              </div>
            <div className='temp'>
              {Math.round(weather.main.temp)}°C
            </div>
            <div className='weather'>
              {weather.weather[0].main}
            </div>
            <div className='more-info'>
              <button onClick={() => setClicked(true)}>+ More info</button>
            </div>
            
          </div>     
        </div>) : (
          <div>
            <div className='weather-box'>
              <div className='icon'>
                {renderImage('')}
              </div>
            </div>
            <div className='weather-box'>
              <div className='weather'>
                Welcome
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
