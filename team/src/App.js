import Footer from "./components/footer/Footer";
import LoginPage from "../src/components/pages/LoginPage";
import Section from "./components/section/Section";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Footer />
      <Section/>
      <LoginPage/>
      <Login/>
    </div>
  );
}

export default App;
