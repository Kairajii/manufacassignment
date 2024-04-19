import './App.css';
import data from './DummyData/wine-data';
import FlavanoidsTable from './Components/FlavanoidsTable';
import GammaTable from './Components/GammaTable';
import { calculateMean,calculateMedian,calculateMode } from './utils/calculate';



// Calculate class-wise mean, median, and mode of Flavanoids
 function calculateFlavanoidsStats(data) {
  const stats = {};
  data.forEach(item => {
    if (!stats[item.Alcohol]) {
      stats[item.Alcohol] = [];
    }
    stats[item.Alcohol].push(item.Flavanoids);
  });

  const result = {};
  Object.keys(stats).forEach(alcoholClass => {
    result[alcoholClass] = {
      mean: calculateMean(stats[alcoholClass]),
      median: calculateMedian(stats[alcoholClass]),
      mode: calculateMode(stats[alcoholClass]),
    };
  });

  return result;
}

// Calculate Gamma for each point in the data
data.forEach(item => {
  item.Gamma = (item.Ash * item.Hue) / item.Magnesium;
});


// Calculate class-wise mean, median, and mode of Gamma
function calculateGammaStats(data) {
  const stats = {};
  data.forEach(item => {
    if (!stats[item.Alcohol]) {
      stats[item.Alcohol] = [];
    }
    stats[item.Alcohol].push(item.Gamma);
  });

  const result = {};
  Object.keys(stats).forEach(alcoholClass => {
    result[alcoholClass] = {
      mean: calculateMean(stats[alcoholClass]),
      median: calculateMedian(stats[alcoholClass]),
      mode: calculateMode(stats[alcoholClass]),
    };
  });

  return result;
}

function App() {
  const flavanoidsStats = calculateFlavanoidsStats(data);
  const gammaStats = calculateGammaStats(data);
  return (
    <div className="w-screen h-screen p-4">
      <div className='w-full h-full flex flex-col gap-y-10 justify-center items-center'>
        <FlavanoidsTable stats={flavanoidsStats}/>
        <GammaTable stats={gammaStats} />
      </div>
    </div>
  );
}

export default App;
