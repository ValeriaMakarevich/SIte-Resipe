import './App.css'
import CategoriesResipe from './Components/CategoriesResipe/CategoriesResipe'
import Header from './Components/Header/Header'
import ResipeAll from './Components/ResipeAll/ResipeAll'
import SearchResipe from './Components/SearchResipe/SearchResipe'

const App:React.FC = () => {
  
  return (
<>
<Header/>
<SearchResipe/>
<CategoriesResipe/>
<ResipeAll/>
</>



  )
}

export default App
