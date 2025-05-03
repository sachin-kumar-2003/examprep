import ChatWindow from "./components/ChatWindow.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
    <NavBar />
     <div className="min-h-[90vh] bg-white-100 flex ">
      <ChatWindow />
    </div>
    </>
   
  );
}

export default App;
