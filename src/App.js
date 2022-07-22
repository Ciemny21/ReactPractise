
import { Layout } from './Layout';
import './App.css';
import Dane from "./StuffData"
import {Card} from "./Card"
import {Label} from "./Label"
function App() {
  const elem=Dane.map(stuff=>{return <Card  {...stuff}/>});
console.log(Dane);

  return (
    <div className="App">
      <Label/>
      <Layout />
      <section className="List">
        {elem}
      </section>
    </div>
  );
}

export default App;
