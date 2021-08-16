import { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "Smiling",
  "😲": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love",
  "😑": "Annoyed"
};
const emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojies we know:</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} id="emoji" key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
