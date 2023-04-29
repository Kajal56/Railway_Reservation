import { AuthProvider } from "./contexts/AuthContext";
import Base from "./components/Base";
import Navbar from "./components/NavBar";
function App() {
  return (
    <AuthProvider>
      <div className="grid grid-flow-row gap-4">
      <Navbar ></Navbar>
      <div className="mt-20">
        <Base></Base>
      </div>
      </div>
    </AuthProvider>
  );
}

export default App;
