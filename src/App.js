import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./component/Header";
import Content from "./component/Content";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Content />
    </QueryClientProvider>
  );
}

export default App;
