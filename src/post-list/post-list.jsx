import { Pagination } from 'antd';
import { Post } from '../post/post';
import "./styles.css";

export function CardList({ goods }) {
    return (
      <div className="cards content__cards">
        {goods.map((dataItem, index) => (
          <Post key={index} {...dataItem} />
        ))}
      </div>
    );
  }
