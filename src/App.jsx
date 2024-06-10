import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Card from "./components/Card";
import Dark from "./components/Dark";

function App() {
 
  const api = {
    key: "9d7c4fc60fe5042ce2deafa96271c8fc",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [weather, setWeather] = useState({});
  // const [weather2, setWeather2] = useState({})
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();


  // search functionality and error handeling

  const [search, setSearch] = useState("")
  const [error, setError] = useState(null)


  const [temperatureInteger, seTemperatureInteger] = useState(0);
  const [feelsLikeTempint, setFeelsLikeTempint] = useState(0);
  const tempint = parseInt(weather.main && weather.main.temp);
  const feelsLike = parseInt(weather.main && weather.main.feels_like);

  useEffect(()=>
  {
    seTemperatureInteger(tempint);
    setFeelsLikeTempint(feelsLike);
  })

  

  const searchBtn =  useCallback(()=>{
    if (search.trim() === '') {
      setError('Please enter a city name');
      return null;
    }
    
    //api fetching and error handeling
    fetch(` ${api.base}weather?q=${search}&units=metric&APPID=${api.key} `)
    .then((res) => {
      if(!res.ok){
      setError('City not found!')
      }
      else{
        setError(null)
      }
      return res.json()
    })
    .then((results) => {
      setWeather(results)
     })
    .catch((error)=>{
      setError('Connection failed!.. Try again', error)
    })
  })




  // Fetch user's location weather data

  const [Usertemperature, setUserTemperature] = useState(0);
  const [UserWeather, setUserWeather] = useState({})
  const [UserFeelstemperature, setUserFeelsTemperature] = useState(0);
  const [LocationError, setLocationError] = useState(null)
 
  useEffect(() => {
        navigator.geolocation.getCurrentPosition(
        async (position) => {
        const { latitude, longitude } = position.coords;
               const apiKey = '9d7c4fc60fe5042ce2deafa96271c8fc'; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setUserWeather(data)
        const currentTemperature = data.main.temp;
        setUserTemperature(parseInt(currentTemperature));
        const feelsTemperature = data.main.feels_like;
        setUserFeelsTemperature(parseInt(feelsTemperature));
      },
      (error) => {
      setLocationError('Error getting user location', error);
      }
    );
  }, []);

 

  return (
    <>
      

       
<div className=" flex flex-col items-center  w-screen min-h-screen  text-gray-700 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 dark:from-pink-600 dark:via-purple-600 dark:to-indigo-600 ">
    <div className="">

       <Dark />
    </div>

    
    <div className="conatiner mt-7  lg:mt-28 w-auto  lg:w-full gap-10 lg:gap-20 h-full flex flex-col  justify-around">


        <div className="flex flex-col lg:flex-row gap-10  justify-center lg:order-1" >
           

             <Card temp={temperatureInteger} feelsLikeTempint={feelsLikeTempint}  weather={weather} formattedDateTime={formattedDateTime} />
             <Card temp={Usertemperature} feelsLikeTempint={UserFeelstemperature} LocationError={LocationError}  weather={UserWeather} formattedDateTime={formattedDateTime} text="Your Location" />
        
        </div>



        <div className=" lg:mt-10 flex justify-center  lg:order-2" >
          
        <Search setSearch={setSearch} searchBtn={searchBtn} errormsg={error}/>
              
        </div>  


           
    </div>
</div>

     
       





      {/* <Search/> */}
    </>
  );
}

export default App;
