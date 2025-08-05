// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentsWithProps"
// import ArrowFunctionComponent from "./components/arrowFunctionalCimponent"
// import ClassComponent from "./components/ClassComponent"
// // import FunctionalComponent from "./components/FunctionalComponent"
// import ArrowFunctionalComponentsWithPropsType from "./components/ArrowFunctionalComponentsWithPropsType"
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Layout from "./components/Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage.tsx";
// import NameChangerPage from "./pages/NameChangerPage.tsx";
// import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
// import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
// import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
// import AutoRedirect from "./components/AutoRedirect.tsx";
// import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
// import NotFoundPage from "./pages/NotFoundPage.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import UncontrollerInput from "./components/UncontrollerInput.tsx";
// import MultiFieldForm from "./components/MultiFieldForm.tsx";
// import MultiFieldFormWithValidation from "./components/MultiFieldFormWithValidation.tsx";
// import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation.tsx";
// import MultiFieldFormWithReactHook from "./components/MultiFieldFormWithReactHook.tsx";
import ProductList from "./pages/ProductList.tsx";

// import CounterAdvanded from "./components/CounterAdvanced.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";

// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import CounterWithMoreState from "./components/counterWithMoreState.tsx";
// import Todo from "./components/Todo/Todo.tsx";


function App() {


//   const url: string = "/api/v1/products";

//   fetch(url, {
//     method: "POST",
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(payload),
//   }
// )
// .then(res => {
//   if (!res.ok) throw new Error(res.statusText);
//   return res.json();
// } 
// )
// .then(data => {})
// .catch(err => {});


// async function fetchData(url, method = "GET", payload = null) {
//   try {
//     const options = {
//       method,
//       headers: { 'Content-Type': 'application/json' },
//     }

//       if (payload) options.body = JSON.stringify(payload);
//       const res = await fetch(url, options)
//       if (!res.ok) throw new Error(res.statusText);
 

  
// }catch (err){
//     console.error("Error fetching data:", err); 
// }
  


  return (
    <BrowserRouter>
      <Routes>

         {/* <Route element={<RouterLayout />}>
        <Route index element={<MultiFieldFormWithReactHook />} /> */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route index element={<FocusInput/>}/> */}
          {/* <Route index element={<UncontrollerInput/>}/>
        <Route/>

         <Route path="examples?">
          <Route path="examples" element={<RouterExamplesLayout />}>
          <Route index element={<ExamplesPage />}/>
            <Route path="name-changer" element={<NameChangerPage />} />
            <Route path="online-status" element={<OnlineStatusPage />} />
            <Route path="auto-redirect" element={<AutoRedirectPage />} />
          </Route>
          </Route>

          <Route path="users/:usersId" element={<UserPage />}>
            <Route path="users" element={<UserPage />} />
        </Route>
        </Route>
        
          <Route path="*" element={<NotFoundPage />} />  */}

       <Route path="products" element={<RouterLayout />}>
              <Route index element={<ProductList />}/>
              {/* <Route path="new" element={<Product/>}/>
              <Route path=":productId" element={<Product/>}/> */}
            </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
