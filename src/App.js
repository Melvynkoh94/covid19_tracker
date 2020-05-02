import React from "react";
// import Cards from "./components/Cards";
// import Chart from "./components/Chart";
// import CountryPicker from "./components/CountryPicker";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api"; // usually when you have index files, dont need to specify the filename 'index.js'. Just the file path to index.js will do

class App extends React.Component {
  //componentDidMount() If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Covid-19 App</h1>
        <Cards />
        <CountryPicker />
        <Chart />
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
