const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

myInstruments.push("tuba")
myInstruments.push("bassoon")
myInstruments.splice(2,1);
myInstruments.unshift("saxophone")



function getFirstInstrument(instruments) {
    return instruments[0];
  }

  const firstIns = getFirstInstrument(myInstruments);
  console.log(firstIns)

// ===============================
  
function getLastInstrument(instruments) {
    return instruments[instruments.length - 1];
  }

  const lastIns = getLastInstrument(myInstruments);
  console.log(lastIns)

// ==============================

function getFirstAndLastInstruments(instruments) {
    const output = [];
    output.push(instruments[0]);
    output.push(instruments[instruments.length - 1]);
    return output;
}

const getFirstAndLastIns = getFirstAndLastInstruments(myInstruments);
console.log(getFirstAndLastIns)

// =============================

function getFirstThreeInstrumentsWithLoop(instruments) {
    const output = [];
    for (let i = 0; i < 3; i++) {
      output.push(instruments[i]);
    }
    return output;
  }

  const getFirstThreeIns = getFirstThreeInstrumentsWithLoop(myInstruments);
  console.log(getFirstThreeIns)

//   =============================

function getTInstruments(instruments) {
    const output = [];
    for (let i = 0; i < instruments.length; i++) {
     const instrument = instruments[i];
      if (instrument[0] === "t") { 
        output.push(instrument);
      }
    }
    return output;
  }

  const getTInst = getTInstruments(myInstruments);
  console.log(getTInst)

//   =============================

function getLongestNamedInstrument(instruments) {
    let longestInstrument = "";
    for (const instrument of instruments) {
      if (instrument.length > longestInstrument.length) {
        longestInstrument = instrument;
      }
    }
    return longestInstrument;
  }

  const getLongestNamedIns = getLongestNamedInstrument(myInstruments);
  console.log(getLongestNamedIns)