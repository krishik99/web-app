import './App.css';
import { Home } from './pages/Home';
import { TabContextProvider } from './utility/TabContext'


function App() {

  return (
    <>
        <TabContextProvider>
          <Home/>
        </TabContextProvider>

    </>
  );
}

export default App;
