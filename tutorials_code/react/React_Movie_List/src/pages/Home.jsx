import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // intial value ""
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // هنا سيتم تنفيذ الدالة مرة واحدة فقط عند تحميل الصفحة
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        // بعد ما نخلص العملية خليها فولس يعني خلصنا عشان نستخدمها تحت
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault(); // to not reload the page
    if (!searchQuery.trim()) return; // تجاهل البحث إذا كان فارغًا
    if (loading) return; // إذا كان التحميل جارٍ، لا تبدأ عملية بحث جديدة

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      // بعد انتهاء البحث، يتم ضبط `loading` إلى `false` للسماح ببحث جديد
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // e.targetتعني العنصر الذي تسبب بالحدث (input)
        ></input>
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (
              movie // conditional rendering
            ) => (
              <MovieCard movie={movie} key={movie.id} />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
