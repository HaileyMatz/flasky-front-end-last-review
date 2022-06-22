import './App.css';
import CatList from './components/CatList';

const catData = [
  {
    name: 'Whiskers',
    chipNumber: '13579',
  },
  {
    name: 'Fang',
    chipNumber: '82672',
  },
  {
    name: 'Beetle',
    chipNumber: '02468',
  },
  {
    name: 'Loki',
    chipNumber: '39482',
  },
  {
    name: 'Elvis',
    chipNumber: '',
  },
];

function App() {
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList cats={catData}></CatList>
    </main>
  );
}

export default App;
