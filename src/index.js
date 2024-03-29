import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from "@apollo/client";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import AddCourse from "./pages/AddCourse";
import Courses from "./pages/Courses";
import { setContext } from "@apollo/client/link/context";

//const root = ReactDOM.createRoot(document.getElementById("root"));
/*const client = new ApolloClient({
  uri: "http://155.248.246.152:8081/graphql",
  cache: new InMemoryCache(),
});*/

const client = new ApolloClient({
  link: setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: sessionStorage.getItem("AccessToken")
      },
    }
  }).concat(createHttpLink({
    uri: "http://155.248.246.152:8081/graphql",
  })),
  cache: new InMemoryCache(),
});

const routes =[
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Students",
    element: <Students/>,
  },
  {
    path: "/AddStudent",
    element: <AddStudent />,
  },
  {
    path: "/Courses",
    element: <Courses />,
  },
  {
    path: "/AddCourse",
    element: <AddCourse />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
