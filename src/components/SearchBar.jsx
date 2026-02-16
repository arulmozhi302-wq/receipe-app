const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 border rounded"
    />
  );
};

export default SearchBar;
