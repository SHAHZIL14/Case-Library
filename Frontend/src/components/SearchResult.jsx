import CaseCard from "../components/CaseCard";

function SearchResults(props) {
  const { results } = props;

  if (!results || results.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-400 text-lg">
          No results found. Try a different search.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <p className="text-gray-300 text-sm">
          Found{" "}
          <span className="text-[#BC2222] font-semibold">{results.length}</span>{" "}
          results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(function(result, index) {
          return <CaseCard key={index} result={result} index={index} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
