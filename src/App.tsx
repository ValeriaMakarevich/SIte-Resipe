import './App.css'
import CategoriesResipe from './Components/CategoriesResipe/CategoriesResipe'
import Header from './Components/Header/Header'
import ResipeAll from './Components/ResipeAll/ResipeAll'


const App:React.FC = () => {
  
  return (
<>
<Header/>
<CategoriesResipe/>
<ResipeAll/>
</>



  )
}

export default App
