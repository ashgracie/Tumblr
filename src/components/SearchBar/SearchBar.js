

export default function SearchBar () {
  return (
    <form className="search">
      <input className="search-bar" type="text" placeholder="🔍Search Tumblr" />
      <button className="search-submit" type="submit" >Search</button>
    </form>
  )
}