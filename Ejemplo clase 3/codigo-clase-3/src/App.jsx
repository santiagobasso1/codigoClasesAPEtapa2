import './App.css'
import Example from './components/ExampleComp/Example'
import ClassComp from './components/ExampleClassComp/ClassComp'
function App() {

  return (
    //Los Fragments son para introducir elementos sin necesidad de crearles un padre más a estos
    <>
    <Example/>
    {/* <ClassComp /> */}
    </>
  )
}

export default App
