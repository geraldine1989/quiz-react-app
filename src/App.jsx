import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <header className="flex flex-col">
        <Link to="/" className="text-3xl font-bold bg-primary text-light p-6">React Tailwind Starter</Link>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>

  )
}
