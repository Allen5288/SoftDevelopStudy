import "./emoji.css";
import BasicEmojiFunc from "./emojipedia-service";
import emojipedia from "./emojipedia-data";

function EmojiPedia() {
  return (
    <div>
      <h1>
        <span>emojiPedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => (
          <BasicEmojiFunc
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default EmojiPedia;
