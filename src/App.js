import './App.css';
import TitleH1 from './components/Titles/TitleH1/TitleH1';
import Books from './containers/Books/Books';

function App() {
  return (
    <div className='container'>
      <TitleH1>Ma liste de livres</TitleH1>
      <Books />
    </div>
  );
}

export default App;
