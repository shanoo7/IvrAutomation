import React from "react";

const Info = () => {
  return (
    <div className="container h-screen mt-20 p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">User Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-500">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-500">Header 1</th>
              <th className="px-4 py-2 border border-gray-500">Header 2</th>
              <th className="px-4 py-2 border border-gray-500">Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-500">Data 1</td>
              <td className="px-4 py-2 border border-gray-500">Data 2</td>
              <td className="px-4 py-2 border border-gray-500">Data 3</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-500">Data 4</td>
              <td className="px-4 py-2 border border-gray-500">Data 5</td>
              <td className="px-4 py-2 border border-gray-500">Data 6</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-500">Data 7</td>
              <td className="px-4 py-2 border border-gray-500">Data 8</td>
              <td className="px-4 py-2 border border-gray-500">Data 9</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Info;
