import { QueryClient, QueryClientProvider } from "react-query";
//react Query

import { Routes, Route, Link, BrowserRouter, Outlet } from "react-router-dom";
// react Router v6

//component
import Index from "./component/Index";

import Header from "./component/Header";
import Content from "./component/Content";
import Error from "./component/Error-loading/Error";

//img
import errorImage from "./assets/error.jpg";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/index" element={<Indexes />}>
            <Route path=":id" element={<Index />} />
          </Route>

          <Route
            path="*"
            element={<Error image={errorImage} text={"404 Hatası aldım"} />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

function Indexes() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
