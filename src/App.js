import './App.css';
import { Routes, Route } from 'react-router-dom'
import {Home} from './pages/home'
import { SignIn } from './pages/signIn';
import { CreatePosts } from './pages/createPosts'
import { Navbar } from './components/navbar'

function App() {


  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/createPosts' element={<CreatePosts />}/>
        <Route path='/signIn' element={<SignIn />}/>
      </Routes>
    </div>
  );
}

export default App;
