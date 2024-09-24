import { useState } from "react";
import "./App.css";
import Header from "./components/common/Header/Header";
import Sidebar from "./components/common/Sidebar/Sidebar";
import AddPartner from "./pages/AddPartner";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarItems = [
    { label: "Dashboard", icon: "bi bi-building-dash", link: "#" },
    { label: "Partners List", icon: "bi bi-person-lines-fill", link: "#" },
    { label: "Tree", icon: "bi bi-person-lines-fill", link: "#" },
    { label: "Add New Partner", icon: "bi bi-person-fill-add", link: "#" },
    { label: "Request E-Money", icon: "bi bi-wallet2", link: "#" },
    { label: "Transfer E-Money", icon: "bi bi-wallet2", link: "#" },
    { label: "Replace E-Money", icon: "bi bi-wallet2", link: "#" },
    { label: "Add New Course", icon: "bi bi-card-list", link: "#" },
    { label: "My Courses", icon: "bi bi-card-list", link: "#" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <div className="d-flex">
        <Sidebar items={sidebarItems} isOpen={isOpen} />
        <div className="p-3 w-100 add-partner">
          <AddPartner />
        </div>
      </div>
    </>
  );
}

export default App;
