import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/DashBoard';
import ProjectDetails from './components/projects/ProjectDetails';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Switch>
    <Route path='/' component={DashBoard} exact/>
    <Route path='/project/:id' component={ProjectDetails} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
