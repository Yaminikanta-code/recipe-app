import React from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Table({ columns, data, title, showActions = true }) {
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-semibold text-gray-700 mb-2">{title}</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-2 px-4 text-center bg-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700"
              >
                {column.title}
              </th>
            ))}
            {showActions && (
              <th className="py-2 px-4 text-center bg-gray-100 border-b border-gray-300 text-sm font-semibold text-gray-700">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="py-2 px-4 border-b border-gray-300 text-center text-sm text-gray-600"
                >
                  {Array.isArray(row[column.key]) ? (
                    <ul className="list-disc list-inside">
                      {row[column.key].map((item, itemIndex) =>
                        typeof item === "object" ? (
                          <li key={item._id || itemIndex}>{item.name}</li>
                        ) : (
                          <li key={itemIndex}>{item}</li>
                        )
                      )}
                    </ul>
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
              {showActions && (
                <td className="py-2 px-4 border-b border-gray-300 text-center text-sm text-gray-600">
                  <div className="flex justify-around">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      aria-label="Edit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      aria-label="Delete"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

//improvements
