function SearchBar({ search, setSearch }) {

    return (

        <div className="search-bar">

            <input
                type="text"
                placeholder="Pretraži po imenu ili profesiji..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        </div>

    );

}

export default SearchBar;
