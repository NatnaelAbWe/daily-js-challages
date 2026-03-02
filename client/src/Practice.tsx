import { useState } from "react";

export const Practice = () => {
  // simple challange for react usestate hook
  const shopingList: string[] = ["banana", "apple", "orange"];
  const [list, setList] = useState(shopingList);
  const [addToList, setaAddToList] = useState("");
  const [itemAdded, setItemAdded] = useState(false);

  const addItem = () => {
    if (!addToList.trim()) return;

    setList((prev) => [...prev, addToList]);
    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 1000);
    setaAddToList("");
  };

  const removeFromList = (index: number) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          name="item"
          value={addToList}
          placeholder="enter item"
          onChange={(e) => setaAddToList(e.target.value)}
        />
        <button onClick={addItem}>{itemAdded ? "complete" : "add"}</button>
      </div>
      <div>
        <h1>your items</h1>
        <hr />
        {list.map((val, i) => {
          return (
            <div className="item" key={i}>
              <p>{val}</p>
              <button
                onClick={() => {
                  removeFromList(i);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
