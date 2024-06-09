


function Card({temp,text, weather, feelsLikeTempint,formattedDateTime}) {

  return (
  
<div className=" w-full max-w-screen-md  bg-white dark:bg-slate-900 dark:text-white px-4 py-2 lg:p-10 rounded-xl ring-8 ring-white ring-opacity-40">
            <h1 className="font-extralight mb-2">{text}</h1>
              <div className="flex justify-between gap-12 lg:gap-36">
            
                <div className="flex flex-col gap-4">
                  <span className="text-2xl lg:text-6xl font-bold">
                    {temp ?temp: 0}°C
                  </span>
                  <span className="font-semibold mt-1 text-sm lg:text-lg">
                    Feels Like:{feelsLikeTempint ? feelsLikeTempint : 0}°C
                  </span>
                  <span className="font-semibold mt-1 text-gray-500 dark:text-gray-300">
                    {weather.name }, {weather.sys && weather.sys.country}
                  </span>
                </div>
              <div className="">
                <p className='mb-4 text-sm lg:text-md font-semibold'>{formattedDateTime}</p>
                <svg
                  className="h-16 w-16 lg:h-24 lg:w-24 fill-current text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  
                  >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
                </svg>
                <span className="flex pt-4 font-semibold ">{weather.weather && weather.weather[0].description}</span>
                  </div>
              </div>
            </div>
  )
}

export default Card