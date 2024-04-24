import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

// var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
// }

function emojiEntry(emojiGroup) {
  return (
    <Emoji
      key={emojiGroup.id}
      emoji={emojiGroup.emoji}
      name={emojiGroup.name}
      definition={emojiGroup.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">={emojipedia.map(emojiEntry)}</dl>
    </div>
  );
}

export default App;
