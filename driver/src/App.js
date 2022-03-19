import './App.css';
import {PieChart} from "./piechart/PieChart"

function App() {

  const cats = [
    {
      name: "Test",
      size: 10,
      color: [128, 128, 0],
    },
    {
      name: "Game",
      size: 30,
      color: [0, 128, 128],
    },
    {
      name: "Day Job",
      size: 60,
      color: [128, 0, 128],
    },
    {
      name: "Blockz",
      size: 180,
      color: [128, 128, 128],
    },
  ];

  return (
    <div className="App" style={{width: "1000px", height: "800px"}}>
      <PieChart categories={cats}/>
    </div>
  );
}

export default App;
