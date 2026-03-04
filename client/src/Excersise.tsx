import React, { useEffect, useState, type JSX } from "react";

interface Props {
  count: number;
  increment(): void;
}
export default function Excersise({ count, increment }: Props): JSX.Element {
  const arr: string[] = ["apple", "banana", "strawberry"];
  const [fruit, setFruit] = useState("");

  useEffect(() => {
    const selectedFruit = arr[count % arr.length];
    console.log(count % arr.length);
    setFruit(selectedFruit);
    return () => {
      console.log("cleanning up from previous effect");
    };
  }, [count]);

  return (
    <div>
      <p>{fruit}</p>
      <button onClick={increment}>count: {count}</button>;
    </div>
  );
}
