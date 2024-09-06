import React from "react";

const Details = ({ logs }) => {
  return (
    <div className="mb-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 mt-4 text-center">Logs</h2>
      <div className="bg-white shadow-md rounded p-4">
        {logs.length === 0 ? (
          <p className="text-gray-500">No logs yet.</p>
        ) : (
          <ul>
            {logs.map((log, index) => (
              <li key={index} className="p-2 border-b">
                <span className="font-semibold">{log.type}:</span> {log.student} - {log.phone} - "
                {log.content}"
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Details;
