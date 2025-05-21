import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentsWithProps"
import ArrowFunctionComponent from "./components/arrowFunctionalCimponent"
import ClassComponent from "./components/ClassComponent"
import FunctionalComponent from "./components/FunctionalComponent"
import ArrowFunctionalComponentsWithPropsType from "./components/ArrowFunctionalComponentsWithPropsType"

function App() {
   
  return (

    <>

    <ClassComponent />
    <FunctionalComponent />
    <ArrowFunctionComponent />
    <ArrowFunctionalComponentWithProps title={"Is a Arrow Functional Component with Props!"} />
    <ArrowFunctionalComponentsWithPropsType
     title={"Hello"} discription={"World"}/>
    </>
  )
}

export default App
