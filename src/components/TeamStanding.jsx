import { useState, useEffect } from "react";
import { getPointsTable } from "../services/api";
import LoadingSpinner from "./ui/Loer";
export default function TeamStanding() {
  const [PointsTable, setPointsTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPOintsTable = async () => {
      try {
        const data = await getPointsTable();
        setPointsTable(data);
      } catch (err) {
        setError("We are unable to load the data");
      } finally {
        setLoading(false);
      }
    };
    fetchPOintsTable();
  }, []);

  if (loading) {
    return (
      <div className="flex item-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }
  if (error) {
    return <div className="text-center text-red-500 p-4">(error)</div>;
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl text-bold mb-6">Points Table</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-400">
              <th className="px-4 py-3 text-centertext-sm text-semibold text-gray-600">
                Team
              </th>
              <th className="px-4 py-3 text-centertext-sm text-semibold text-gray-600">
                P
              </th>
              <th className="px-4 py-3 text-centertext-sm text-semibold text-gray-600">
                W
              </th>
              <th className="px-4 py-3 text-centertext-sm text-semibold text-gray-600">
                L
              </th>
              <th className="px-4 py-3 text-centertext-sm text-semibold text-gray-600">
                Points
              </th>
              <th className="px-4 py-3 text-centertext-sm text-semibold text-gray-600">
                NRR
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-6 devude-gray-100"></tbody>
          {pointsTable.map((iteam, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-50 trtansition-color`}
            >
              <td className="px-4 py3">
                <div className="flex items-centerspac-x-3">
                  <img
                    src={iteam.flag}
                    alt={iteam.team}
                    className="w-8 h-8 rounded-full object-contains"
                  />
                </div>
              </td>
              <td className="px-4 py-3 text-center text-gray-600">
                {iteam.played}
              </td>
              <td className="px-4 py-3 text-center text-gray-600">
                {iteam.won}
              </td>
              <td className="px-4 py-3 text-center text-gray-600">
                {iteam.loss}
              </td>
              <td className="px-4 py-3 text-center text-gray-600">
                {iteam.points}
              </td>
              <td className="px-4 py-3 text-center text-gray-600">
                {iteam.nrr}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
