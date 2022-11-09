import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsList from './components/NewsList/NewsList';

//import SingleNews from './components/SingleNews';
import Navbar from './components/NavBar';


import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import SingleNews from './components/SingleNews';
import { Provider } from 'react-redux';
import  store  from './redux/store';
function App() {
/*
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        let res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=515ad7e06f6c4bcc881536282ccc66cc")
        setNewsList(res.data.articles)
      } catch (error) {
        console.error(error)
      }
    }
    fetchNews()
  }, [])
*/
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<NewsList/>} />
          <Route path='/news/:id' element={<SingleNews/>} />
          
          
        </Routes>
        
      </BrowserRouter>
    </Provider>


  );
}

export default App;
