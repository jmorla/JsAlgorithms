# Algorithms Implemented in Javascript

All the algorithms I have been solved in Javascript will be here
# Algorithms

So far solved
- AngryProfessor
- BeautifulDaysAtTheMovies
- CatAndAMouse
- DesignerPDFViewer
- ElectronicsShop
- PickingNumbers
- SaveThePrisioner
- TheHurdleRace
- TwoDArray
- UsingPromises
- UtopianTree
- ViralAdvertising

## Algo.sh
Is a script to autogenerate js && test.js

I was tired to create those file manually and instead of doing a research to see if there a CLI tool or editor pluging for it, I asked to my little brother to help me to create this bash script. Basically it takes to parameters

```$ ./algo.sh AlgorithmName funtionName ```

the AlgorithmName is used to name the subdir created under ./src directory also add that name to the test suit
the functionName it's for the function name :D

so executing the script in this way will give us the result we see below

```$ ./algo.sh SaveThePrisioner saveThePrisoner ```


```
WorkSpace/
  /src
    /SaveThePrisioner
      -SaveThePrisioner.js
      -SaveThePrisioner.test.js
```

SaveThePrisioner.js

```javascript
exports.saveThePrisoner = () => {

};

```


SaveThePrisioner.test.js

```javascript
const { saveThePrisoner } = require("./SaveThePrisioner");

describe("SaveThePrisioner", () => {
    test("Should return undefined", () => {
        expect(saveThePrisoner()).toBe(undefined);
    });
});


```

disclaimer!

if the current directory does not have a src directory the command won't create it for you (we are bad guys)






## Run test

```
npm install
npm run test
```
