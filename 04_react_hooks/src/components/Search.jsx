import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

// Search 组件，用于创建一个搜索输入框，并将输入值传递给父组件处理
const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const debouncedInput = useDebounce(input, 300);

  useEffect(() => {
    if (debouncedInput) {
      onSearch(debouncedInput);
    }
  }, [debouncedInput, onSearch]);

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default Search;
