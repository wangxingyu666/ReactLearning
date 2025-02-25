import { Card, Avatar } from "antd";
import "./style.css";

const MyCard = ({ coverImage, avatar, title, content }) => {
  return (
    <Card
      hoverable
      cover={<img alt="cover" src={coverImage} className="card-cover" />}
      className="myCard"
    >
      <Card.Meta
        avatar={<Avatar src={avatar} />}
        title={<span className="card-title">{title}</span>}
        description={<p className="card-content">{content}</p>}
      />
    </Card>
  );
};

export default MyCard;
