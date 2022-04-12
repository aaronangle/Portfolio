import { Header } from 'components/Header';
import { Portfolio } from 'components/Portfolio';
import { Resume } from 'components/Resume';
import { Contact } from 'components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
