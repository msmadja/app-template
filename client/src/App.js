import './App.css';
import Error from './Shared/Error/Error';
import Products from './Products/Products';

function App() {
  return (
    <div  data-testid="main" className="App">
       <Error />
       <Products />
    </div>
  );
}

export default App;
