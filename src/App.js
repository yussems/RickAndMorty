import "./App.css";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import {darkmode } from "./store/reducer";

const queryClient = new QueryClient();

function App() {
  const mode = useSelector((state) => state.counter.mode);
  const dispatch = useDispatch();
console.log(mode);
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <button
        aria-label="Increment value"
        onClick={() => dispatch(darkmode())}
      >
        darkmode
      </button>
      <span>{mode}</span>
      
    </QueryClientProvider>
  );
}

function Example() {
  const URL = "https://rickandmortyapi.com/api/character";
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios
      .get(URL)
      .then((res) => res)
      .catch((err) => console.log(err))
  );


  return <div></div>;
}

export default App;
