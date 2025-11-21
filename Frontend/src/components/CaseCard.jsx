function CaseCard({ result, index }) {
  return (
    <div
      key={index}
      className="bg-[#0F0F0F] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#BC2222]/40 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-1">
            {result.caseNumber}
          </h3>
          <p className="text-[#BC2222] text-sm font-medium">
            {result.caseType}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
          Court
        </p>
        <p className="text-gray-200 text-sm">{result.court}</p>
      </div>

      <div className="mb-4 space-y-3">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
            Filed By
          </p>
          <p className="text-gray-200 text-sm">{result.filedBy}</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
            Filed Against
          </p>
          <p className="text-gray-200 text-sm">{result.filedAgainst}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
          Judge
        </p>
        <p className="text-gray-200 text-sm">{result.judge}</p>
      </div>

      <div className="pt-4 border-t border-gray-700">
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">
          Summary
        </p>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {result.summary}
        </p>
      </div>
    </div>
  );
}

export default CaseCard;
