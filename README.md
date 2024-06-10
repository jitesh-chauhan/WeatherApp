
# WeatherApp


This Weather App is a simple web application built using ReactJS and the OpenWeather API. It allows users to check the current weather conditions of any location worldwide.

# Instructions

   Prerequisites
    
   Before running the application, ensure you have Node.js and npm installed on your local machine.


## Steps to Run Locally

 1. Clone this repository to your local machine.
  
 2. Navigate to the project directory in your terminal.
  
 3. Install dependencies by running:
  
        npm install

 4. Get an API key from OpenWeather and replace the placeholder with your API key in the App.jsx file.
  
 5. Start the development server by running:
  
        npm run dev
  
 6. Open your web browser and navigate to http://localhost:3000 to view the application.





# Approach and Technologies Used

## Approach
The application is built using ReactJS, a popular JavaScript library for building user interfaces. It utilizes the OpenWeather API to fetch real-time weather data based on user input.



## Technologies Used

- #### ReactJS:
  Frontend library for building user interfaces.

- #### OpenWeather API: 
  Provides access to real-time weather data.

- #### HTML/CSS: 
  For structuring and styling the web application.

- #### JavaScript (ES6+):
  Programming language for implementing application logic.



# Error Handling
### Search Functionality Errors: 
The application provides error handling for search functionality to handle scenarios such as empty search queries or invalid locations. Users will be notified with appropriate messages if their search queries cannot be processed.
    
### Fetch Errors: 
Error handling is implemented for API fetch requests to handle situations like network errors, server errors, or invalid API responses. Users will be informed if there are issues with fetching weather data from the OpenWeather API.

# Known Issues or Limitations

The application relies on the availability and accuracy of data provided by the OpenWeather API. In case of API downtime or inaccuracies in data, the application's functionality may be affected.

Limited error handling: The application currently has basic error handling for API requests. Enhancements can be made to provide more robust error handling and user feedback.



