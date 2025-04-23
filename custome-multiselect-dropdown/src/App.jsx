import { Dropdown } from "./component/Dropdown/Dropdown"
import { cities } from "./Data/data";

function App() {


  return (
  <div style={{display:"grid",placeContent:'center'}}>
  <Dropdown  data={cities} title='Select Cities' />
  </div>
  )
}

export default App
