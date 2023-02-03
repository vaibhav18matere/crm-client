import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/login/Homepage";
import Dashboard from "./pages/dashboard/Dashboard";
import NewTicket from "./pages/tickets/NewTicket";
import TicketList from "./pages/tickets-list/TicketList";
import TicketDetails from "./pages/tickets//TicketDetails";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./components/page-not-found/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-tickets" element={<NewTicket />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/tickets/:tId" element={<TicketDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
