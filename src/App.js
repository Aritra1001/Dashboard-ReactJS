import './App.css';
import Sidebar from './Components/Sidebar';
import RouterCompo from './Routes';

function App() {
  return (
    <>
        <Sidebar/>
        <main>
          <RouterCompo/>
        </main>
    </>
  );
}

export default App;
