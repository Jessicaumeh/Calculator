import React from 'react'; // Importing the React library
import './App.css'; // Importing CSS styles
import Layout from './components/layout'; // Importing the Layout component

function App() { // Defining the main App component
  return (
    <div className="App"> {/* Wrapping the Layout component with a div and setting its class */}
      <Layout> </Layout> {/* Rendering the Layout component */}
    </div>
  );
}

export default App; // Exporting the App component as the default export
