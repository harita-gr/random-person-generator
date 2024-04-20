import {
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaLock,
  FaPhone,
  FaEnvelopeOpen,
} from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="block bg-black"></div>
      <div className="block">
        <div className="container">
          <img src="" className="user-img" />
          <p className="user-title">Title</p>
          <p className="user-value">Value</p>
          <div className="values-list">
            <button className="icon">
              <FaUser />
            </button>
            <button className="icon">
              <FaMap />
            </button>
            <button className="icon">
              <FaPhone />
            </button>
            <button className="icon">
              <FaCalendarTimes />
            </button>
            <button className="icon">
              <FaEnvelopeOpen />
            </button>
            <button className="icon">
              <FaLock />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
