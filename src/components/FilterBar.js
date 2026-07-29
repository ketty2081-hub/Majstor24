function FilterBar({

    city,
    setCity,

    rating,
    setRating

}) {

    return (

        <div className="filter-bar">

            <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >

                <option value="">
                    Svi gradovi
                </option>

                <option value="Zagreb">
                    Zagreb
                </option>

                <option value="Split">
                    Split
                </option>

                <option value="Rijeka">
                    Rijeka
                </option>

                <option value="Osijek">
                    Osijek
                </option>

            </select>

            <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            >

                <option value="">
                    Sve ocjene
                </option>

                <option value="5">
                    ⭐ 5
                </option>

                <option value="4">
                    ⭐ 4+
                </option>

                <option value="3">
                    ⭐ 3+
                </option>

            </select>

        </div>

    );

}

export default FilterBar;