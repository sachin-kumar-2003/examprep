import ChatWindow from "./components/ChatWindow.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
    <NavBar />
    <hr className="h-px border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    <div className="h-[80vh] bg-white-100 flex ">
      <ChatWindow />
    </div>
    </>
   
  );
}

export default App;
