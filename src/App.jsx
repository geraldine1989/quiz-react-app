import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <header className="flex flex-col">
        <Link to="/" className="text-3xl font-bold text-white bg-secondary p-6">Quiz app</Link>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>

  )
}
