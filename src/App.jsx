import Header from './components/layout/Header'
import './assets/style.scss'
import './App.scss'
import JobMain from './components/jobs/JobMain'

const App = () => {
  return <>
        <Header></Header>
        <main>
            <JobMain/>
        </main>
    </>
}

export default App
