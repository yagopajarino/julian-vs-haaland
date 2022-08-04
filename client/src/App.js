import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer";
import "./style/index.css";

function App() {
  return (
    <div className=" bg-gray-50 flex flex-col items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
