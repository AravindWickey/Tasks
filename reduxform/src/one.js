import './App.css'
import { Provider } from 'react-redux';
import store from '../src/store/index'
//import Conatctform from'./component/contact'
import ContactPage from './component/article';
function App() {
  return (
    <div className="App">
       <Provider store={store}>
       {/<Conatctform></Conatctform>/}
       <ContactPage></ContactPage>
      </Provider>

    </div>
  );
}

export default App;