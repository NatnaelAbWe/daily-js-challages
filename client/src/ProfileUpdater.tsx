import { useState, useEffect } from "react";

export default function ProfileUpdater() {
  const [user, setUser] = useState({
    name: "nati",
    age: "12",
    bio: "",
    role: "user",
    theme: "light",
  });

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(user));
  }, [user]);

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
        id="bio"
        disabled={100 - user.bio.length === 0}
      />
      <p>{100 - user.bio.length} characters remaining</p>

      <button type="button" onClick={toggleTheme}>
        {user.theme}
      </button>
    </div>
  );
}
