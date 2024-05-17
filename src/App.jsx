import { Routes, Route } from "react-router-dom";
import EventBoard from "./pages/EventsBoard/EventsBoard";
import EventRegistration from "./pages/EventRegistration/EventRegistration";
import EventParticipants from "./pages/EventParticipants/EventParticipants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventBoard />}></Route>
      <Route path="/register" element={<EventRegistration />}></Route>
      <Route path="/participants" element={<EventParticipants />}></Route>
      <Route path="*" element={<EventBoard />}></Route>
    </Routes>
  );
}

export default App;
