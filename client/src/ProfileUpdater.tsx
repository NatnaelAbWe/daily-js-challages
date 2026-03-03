import { useState } from "react";

export default function ProfileUpdater() {
  const [user, setUser] = useState({
    name: "nati",
    age: "12",
    bio: "",
    role: "user",
    theme: "light",
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleTheme = () => {
    setUser((prev) => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  return (
    <div className={user.theme === "dark" ? "dark-mode" : "light-mode"}>
      <h1>profile Updater</h1>
      <form action="#"></form>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={user.name}
        onChange={updateField}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={updateField}
      />
      <input
        type="text"
        name="bio"
        placeholder="bio"
        value={user.bio}
        onChange={updateField}
      />
      <p>{100 - user.bio.length} characters remaining</p>

      <button type="button" onClick={toggleTheme}>
        {user.theme}
      </button>
    </div>
  );
}
