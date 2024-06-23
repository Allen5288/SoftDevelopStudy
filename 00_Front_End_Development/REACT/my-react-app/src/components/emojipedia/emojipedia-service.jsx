import PropTypes from "prop-types"; // 导入 PropTypes 库
import "./emoji.css";

function BasicEmojiFunc(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        {props.description}
      </dd>
    </div>
  );
}

// 添加 props 类型验证
BasicEmojiFunc.propTypes = {
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BasicEmojiFunc;
