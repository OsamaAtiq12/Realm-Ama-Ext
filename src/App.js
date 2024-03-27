import "./App.css";
import Profile from "./Components/Profile/Profile";
import ChatSection from "./Pages/ChatSection/ChatSection";

import Header from "./Pages/Header/Header";
function App() {
  return (
    <div className="p-[20px]">
      <Header />

      <Profile />
      <ChatSection />
    </div>
  );
}

export default App;
