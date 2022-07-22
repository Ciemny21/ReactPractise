
import './App.css';
import Dane from "./Data"
import {Card} from "./Card"
import {Label} from "./Label"
function App() {
const place=Dane.map(element=>{return <Card element={element} />});
console.log(Dane);

  return (
    <div className="App">
      <Label/>
      <section className="List">
        {place}
      </section>
    </div>
  );
}

export default App;
