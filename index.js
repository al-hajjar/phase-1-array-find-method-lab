// code your solution here
const record = [
    { year: "2018", result: "N/A" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "L" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "W" },
    { year: "2012", result: "W" },
    { year: "2011", result: "N/A" },
    { year: "2010", result: "N/A" },
    { year: "2009", result: "L" },
    { year: "2008", result: "N/A" },
    { year: "2007", result: "L" },
    { year: "2006", result: "L" },
    { year: "2005", result: "N/A" },
    { year: "2004", result: "L" },
    { year: "2003", result: "N/A" },
    
  ];
  


const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
function superbowlWin(record) {
  const returnedItem = record.find((item) => {
    return item.result === "W"
  });
  if(returnedItem){
    return returnedItem.year
  }else{
    return returnedItem
  }  
  }
console.log(superbowlWin(record));