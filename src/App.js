import "./styles.css";
import React, {useState} from "react";
import data from './data';
import List from './List'
export default function App() {

  const [people,setPeople]= useState(data);
  const [refresh,setRefresh] = useState(true);

  const handleChange = (e) => {
      setPeople([]);
      setRefresh(false);
      }
  const refreshFunction = e =>{
    setRefresh(true);
    setPeople(data);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} people birthday today</h3>
        <List people={people} />
        {
          refresh 
          ? 
          (<button onClick= {handleChange}>Clear all</button>)
          :
          (<button onClick={refreshFunction}>Refresh</button>)
        }
      </section>
    </main>
  );
}
