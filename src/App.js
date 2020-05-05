import React from "react";
// import Cards from "./components/Cards";
// import Chart from "./components/Chart";
// import CountryPicker from "./components/CountryPicker";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api"; // usually when you have index files, dont need to specify the filename 'index.js'. Just the file path to index.js will do

class App extends React.Component {
  // constructor is immediately declared when writing a state
  state = {
    data: {}, // at first it's an empty object, waiting to be populated later below
    country: "",
  };

  //componentDidMount() If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);

    //fetch the data
    fetchData(country);

    //set the data
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <header>
          <h1>Covid-19 App</h1>
          <p>
            A Covid-19 Tracker built with ReactJS with data fetched from{" "}
            <a href="https://covid19.mathdro.id/api">Mathroid</a> API
            <br />
            <span>Author: Melvyn Koh</span>
          </p>
        </header>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
