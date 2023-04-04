import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  const handleClick = async () => {
    const response = await window.versions.ping();
    console.log(response); // 打印 'pong'
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
