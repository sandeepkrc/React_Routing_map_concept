
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div style={{ maxWidth : "30rem",margin : "4rem auto"}}>
       <GlobalProvider>
       
         <Router>
           <Switch>
              <Route path="/add" component={AddUser} />
              <Route path="/crud" component={Crud} />
              <Route path="/edit/:id" component={EditUser} />
              <Route exact path="/" component={Home} />
            
           
           </Switch>
         </Router>
       </GlobalProvider>
       
    </div>
  );
}

export default App;
