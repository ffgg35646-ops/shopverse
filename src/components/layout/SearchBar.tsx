import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Search } from "lucide-react";


const SearchBar = () => {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();



  const handleSearch = (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    if (!search.trim()) {
      return;
    }


    navigate(
      `/shop?search=${search}`
    );


    setSearch("");

  };



  return (

    <form
      onSubmit={handleSearch}
      className="relative w-64"
    >

      <input

        type="text"

        value={search}

        onChange={(e) =>
          setSearch(e.target.value)
        }

        placeholder="Search products..."

        className="
          w-full
          rounded-full
          border
          px-4
          py-2
          pr-10
          text-sm
          outline-none
          focus:border-black
        "

      />


      <button

        type="submit"

        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
        "

      >

        <Search
          size={18}
        />

      </button>


    </form>

  );

};


export default SearchBar;
