import { QueryClient, QueryClientProvider } from "react-query";
//react Query

import { Routes, Route, BrowserRouter } from "react-router-dom";
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

          <Route path=":id" element={<Index />} />

          <Route
            path="*"
            element={<Error image={errorImage} text={"404 Hatası aldım"} />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
