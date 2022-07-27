import AppSecure from "./components/AppSecure";
import { QuoterProvider } from "./context/QuoterProvider";
function App() {
  return (
    <QuoterProvider>
       <AppSecure />
    </QuoterProvider>
  );
}

export default App;
