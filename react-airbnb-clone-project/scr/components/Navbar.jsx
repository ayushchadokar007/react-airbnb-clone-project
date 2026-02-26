import { useState } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Homes");

  const tabs = [
    { name: "Homes", icon: "🏠" },
    { name: "Experiences", icon: "✨" },
    { name: "Services", icon: "🔧" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <svg viewBox="0 0 32 32" width="30" height="30" fill="#FF385C">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.907 6.478-6.353 6.478-2.025 0-4.078-.643-5.794-2.153l-.475-.447-.312-.31a10 10 0 0 1-.268-.283l-.298.3-.481.45C13.92 30.357 11.867 31 9.847 31c-3.446 0-6.353-2.416-6.353-6.478l.001-.228.01-.415c.05-.924.293-1.805.96-3.396l.145-.353c.986-2.296 5.146-11.005 7.1-14.836l.533-1.025C13.537 1.963 14.992 1 17 1h-1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206c0 2.817 1.948 4.478 4.353 4.478 1.583 0 3.235-.546 4.666-1.894l.436-.42.318-.324.379-.405.466.473.399.396.318.31c1.382 1.3 3.013 1.864 4.614 1.864 2.405 0 4.353-1.661 4.353-4.478v-.206l-.009-.33c-.032-.585-.178-1.169-.605-2.24l-.345-.836c-.971-2.262-5.105-10.916-7.031-14.692l-.523-1.008C18.053 3.539 17.239 3 16 3z" />
          </svg>
          <span className="logo-text">airbnb</span>
        </div>
        <div className="navbar-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`navbar-tab ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {/* <span className="tab-icon">{tab.icon}</span> */}
              <span className="tab-label">{tab.name}</span>
            </button>
          ))}
        </div>
      </div> 
    </nav>
  );
}

export default Navbar;
