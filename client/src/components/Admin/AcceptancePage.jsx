import { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { TeamData as initialTeamData } from "./utils/data/Data";
import { FiUsers, FiCheckCircle, FiClock, FiXCircle } from "react-icons/fi";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function AdminPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [teamData, setTeamData] = useState(initialTeamData);

  const filteredCandidates = teamData.filter((item) => {
    const matchesSearchTerm =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Username.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || filterStatus === item.status;

    return matchesSearchTerm && matchesStatus;
  });

  const handleStatusChange = (id, newStatus) => {
    const updatedTeamData = teamData.map((item) =>
      item._id === id
        ? { ...item, status: newStatus }
        : { ...item, status: item.status === 'accepted' || item.status === 'declined' ? item.status : 'pending' }
    );
    setTeamData(updatedTeamData);
  };

  // Chart Data
  const statusCounts = {
    accepted: teamData.filter(item => item.status === 'accepted').length,
    pending: teamData.filter(item => item.status === 'pending').length,
    declined: teamData.filter(item => item.status === 'declined').length,
  };

  const pieData = {
    labels: ['Accepted', 'Pending', 'Declined'],
    datasets: [
      {
        data: [statusCounts.accepted, statusCounts.pending, statusCounts.declined],
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
        hoverBackgroundColor: ['#45A049', '#FFB300', '#E53935'],
      },
    ],
  };

  const barData = {
    labels: ['Accepted', 'Pending', 'Declined'],
    datasets: [
      {
        label: 'Number of Candidates',
        data: [statusCounts.accepted, statusCounts.pending, statusCounts.declined],
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-6">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
            <p className="text-gray-600 mt-2 text-xl">Manage candidate approvals and view statistics.</p>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by name or username"
            className="mt-3 w-full md:w-80 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg flex items-center">
            <FiUsers className="text-blue-500 text-3xl sm:text-4xl mr-4" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-5 cursor-pointer">Total Candidates</h3>
              <p className="text-gray-600">{teamData.length}</p>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg flex items-center">
            <FiCheckCircle className="text-green-500 text-3xl sm:text-4xl mr-4" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-5 cursor-pointer">Accepted</h3>
              <p className="text-gray-600">{statusCounts.accepted}</p>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg flex items-center">
            <FiClock className="text-yellow-500 text-3xl sm:text-4xl mr-4" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-5 cursor-pointer">Pending</h3>
              <p className="text-gray-600">{statusCounts.pending}</p>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg flex items-center">
            <FiXCircle className="text-red-500 text-3xl sm:text-4xl mr-4" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-5 cursor-pointer">Declined</h3>
              <p className="text-gray-600">{statusCounts.declined}</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Status Distribution</h3>
            <div className="h-64">
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Status Overview</h3>
            <div className="h-64">
              <Bar data={barData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Filter Options */}
        <div className="mb-6 flex space-x-4 overflow-auto">
          <button
            className={`px-4 py-2 rounded-lg ${
              filterStatus === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilterStatus("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              filterStatus === "accepted"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilterStatus("accepted")}
          >
            Accepted
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              filterStatus === "pending"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilterStatus("pending")}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              filterStatus === "declined"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilterStatus("declined")}
          >
            Declined
          </button>
        </div>

        {/* Candidates List */}
        <div className="grid gap-8">
          {filteredCandidates.length > 0 ? (
            filteredCandidates.map((item) => (
              <div
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between"
                key={item._id}
              >
                {/* Candidate Info */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.Username}</p>
                    <p className="text-sm text-gray-500">Status: {item.status}</p>
                    <p className="text-sm text-gray-500">Applied On: {item.appliedDate}</p>
                    <p className="text-sm text-gray-500">ID: {item._id}</p>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="mt-4 md:mt-0 flex space-x-4">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleStatusChange(item._id, 'accepted')}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleStatusChange(item._id, 'declined')}
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No candidates found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;

