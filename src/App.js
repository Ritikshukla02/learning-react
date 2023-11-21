
import './App.css';
import { Navbar } from './components/Navbar';
import {Hero} from './components/Hero';
import { Company } from './components/Company';
function App() {
  return (
   <div className='maincontainer'>

<Navbar/>
<Hero/>
<Company/>


   </div>
  );
}

export default App;
