import {
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaLock,
  FaPhone,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState(null);
  const [value, setValue] = useState(null);

  const getUser = async () => {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    console.log("data", data);
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };

    setUser(newPerson);
    setTitle("name");
    setTitle(newPerson.name);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(user[newValue]);
    }
  };

  return (
    <div>
      <div className="block bg-black"></div>
      <div className="block">
        <div className="container">
          <img src={user && user.image} className="user-img" />
          <p className="user-title">My {title} is:</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label="name"
            >
              <FaUser />
            </button>
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label="street"
            >
              <FaMap />
            </button>
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label="phone"
            >
              <FaPhone />
            </button>
            <button className="icon" onMouseOver={handleValue} data-label="age">
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label="email"
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              onMouseOver={handleValue}
              data-label="password"
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="submit" onClick={getUser}>
            GENERATE NEW USER
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
