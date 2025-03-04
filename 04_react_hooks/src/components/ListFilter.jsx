import { useMemo } from "react";

// ListFilter 组件，用于根据给定的查询条件过滤列表项
const ListFilter = ({ items, query }) => {
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ListFilter;
