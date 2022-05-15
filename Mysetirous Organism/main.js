// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (_specimenNum, _dna) =>{
    return{
      _specimenNum,
      _dna,
      mutate(){
        let newBase = returnRandBase();
        let newDna = [];
        for(let i = 0; i < this._dna.length; i++){
          if(!this._dna[i].includes(newBase)){
            newDna.push(this._dna[i]);
          };   
        };
        newDna.unshift(newBase);
        return this._dna = newDna;
      },
      compareDNA(otherOrg){
        let count = 0;
        let currentDNA = this._dna;
        let passedDNA = otherOrg._dna;
        for (let i = 0; i > this._dna.length; i++){
          for( let j = 0; j >otherOrg._dna.length; i++){
            if( this._dna[i] === otherOrd._dna[j]){
              return count += 1;
            };
          };
        };
        const percentOfDnaShared = (count / this._dna.length) * 100;
        const roundUp2Deci = percentOfDnaShared .toFixed(2);
        console.log(`${this._specimanNum} and ${otherOrg._specimanNum} have ${roundUp2Deci}% DNA in common.`);
      },
      willLikelySurvive(){
        const sixtyPercent = this._dna.filter(letter => letter === 'C' || letter === 'G');
        return sixtyPercent.length / this._dna.length >= 0.6;
      }
    };
  };
  
  const survivingSpecimen = [];
  let idCounter = 1;
  
  while (survivingSpecimen.length < 30) {
    let newOrg = pAequorFactory(idCounter, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
    }
    idCounter++;
  }
  
  console.log(survivingSpecimen);
  console.log(survivingSpecimen.mutate());
  console.log(survivingSpecimen.compareDNA());
  
  
  
  
  
  
  