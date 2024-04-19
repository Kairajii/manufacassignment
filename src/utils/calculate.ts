function calculateMean(data:any) {
    const sum = data.reduce((acc:any, item:any) => acc + item, 0);
    return sum / data.length;
  }
  
  function calculateMedian(data:any) {
    const sortedData = data.slice().sort((a:any, b:any) => a - b);
    const mid = Math.floor(data.length / 2);
    return data.length % 2 === 0 ? (sortedData[mid - 1] + sortedData[mid]) / 2 : sortedData[mid];
  }
  
  function calculateMode(data:any) {
    const frequencyMap:any = {};
    data.forEach((value:any )=> {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });
    const mode = Object.keys(frequencyMap).reduce((a, b) => frequencyMap[a] > frequencyMap[b] ? a : b);
    return parseFloat(mode);
  }

  export {
    calculateMean,
    calculateMode,
    calculateMedian
  }