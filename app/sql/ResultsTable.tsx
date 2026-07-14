export function ResultsTable({ data }: { data: unknown }) {
  if (!data) {
    return null;
  }

  // Handle command responses (INSERT, UPDATE, DELETE)
  if (!Array.isArray(data)) {
    if (typeof data === "object") {
      return (
        <div className="mt-6 rounded-lg border px-4 py-3">
          {Object.entries(data as Record<string, unknown>).map(
            ([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {String(value)}
              </p>
            ),
          )}
        </div>
      );
    }

    return <p>{String(data)}</p>;
  }

  // Handle SELECT results
  if (data.length === 0) {
    return <p>No results</p>;
  }

  const rows = data as Record<string, unknown>[];
  const columns = Object.keys(rows[0]);

  return (
    <table className="w-full border-collapse border mt-6">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} className="border px-4 py-2 text-left">
              {column}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column} className="border px-4 py-2">
                {String(row[column])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
