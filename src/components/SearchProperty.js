import Link from "next/link";

const SearchProperty = () => {
  return (
    <>
      <Link href="/listing">
        <button className="btn text-white btn_purple">Search Property</button>
      </Link>
    </>
  );
};

export default SearchProperty;
