import { useEffect } from 'react';
import './App.css';
import ScreenRouter from './component/frontend/Router/ScreenRouter';

function App() {
  useEffect(() => {
    // Kode untuk mengubah judul halaman web
    document.title = "Welcome to Alan Resto";
  }, []); 
  return (
    <div className="App">
      <ScreenRouter/>
    </div>
  );
}

export default App;
