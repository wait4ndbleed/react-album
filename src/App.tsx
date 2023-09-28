import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./routes/RouteList";
import "./App.css";

const App = () => {
  return (
    <div className="container max-w-2xl p-2 my-6 bg-orange- rounded-lg">
      <div className="fixed">
        <div className="flex h-screen flex-col items-center mt-[100px] justify-center">
          <div className=" h-[700px] w-[700px] rounded-full bg-blue-900 blur-3xl"></div>
        </div>
      </div>
      <div className="relative">
        <h1 className="my-4 text-center">Galeria de fotos</h1>
        <BrowserRouter>
          <RouteList />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
