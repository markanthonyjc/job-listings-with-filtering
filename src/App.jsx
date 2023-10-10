import Header from './components/Layout/Header'
import './assets/style.scss'
import './App.scss'
import JobMain from './components/Jobs/JobMain'

const App = () => {
  return <>
        <Header></Header>
        <main>
            <JobMain></JobMain>
        </main>
    </>
}

export default App
