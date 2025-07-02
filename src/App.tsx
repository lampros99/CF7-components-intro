// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentsWithProps"
// import ArrowFunctionComponent from "./components/arrowFunctionalCimponent"
// import ClassComponent from "./components/ClassComponent"
// // import FunctionalComponent from "./components/FunctionalComponent"
// import ArrowFunctionalComponentsWithPropsType from "./components/ArrowFunctionalComponentsWithPropsType"
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Layout from "./components/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
// import CounterAdvanded from "./components/CounterAdvanced.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";

// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import CounterWithMoreState from "./components/counterWithMoreState.tsx";
// import Todo from "./components/Todo/Todo.tsx";

function App() {
   
  return (

    <> 
    <Layout>

    {/* <ClassComponent />
    <FunctionalComponent />
    <ArrowFunctionComponent />
    <ArrowFunctionalComponentWithProps title={"Is a Arrow Functional Component with Props!"} />
    <ArrowFunctionalComponentsWithPropsType
     title={"Hello"} discription={"World"}/> */}

     {/* <FunctionalComponentWithState /> */}

     {/* <ClassComponentWithState/> */}
     {/* <h1 className="text-center text-2xl font-bold">this is a heading 1</h1> */}
      {/* <FunctionalComponent/>  */}
      {/* <NameChanger></NameChanger> */}
      {/* <CounterAdvanded/> */}
      {/* <CounterWithCustomHook/> */}
      {/* <CounterWithReducer/>
      <Counter/> */}
      {/* <CounterWithMoreState></CounterWithMoreState> */}
      
      {/* <Todo/> */}

      {/* <OnlineStatus></OnlineStatus> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
          <Route path="name-changer" element={<NameChangerPage/>}/>
      </Routes>
      </BrowserRouter>
      
     </Layout>
    </>
  )
}

export default App
