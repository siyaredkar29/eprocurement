import { useState, useEffect } from "react";
import { fetchTendersByName } from "../../../Authentication"; // Replace with your actual fetch function
import "../../../Components/Search/Search.css";

const TenderByName = ({ searchTerm }) => {
  const [tenders, setTenders] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm]);

  const handleSearch = async (name) => {
    try {
      const data = await fetchTendersByName(name);
      console.log('Fetched data:', data);
      setTenders(data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error fetching tenders:', error);
    }
  };

  return (
    <div className="tender-container">
      <h1 className="tender-title">Tender Search Results</h1>
      <p className="tender-summary">
        Showing results for: <strong>{searchTerm}</strong>
      </p>

      {submitted && (
        <div className="tender-results-wrapper">
          <h2 className="tender-results-heading">Tenders: {searchTerm}</h2>
          <table className="tender-results-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {tenders.length > 0 ? (
                tenders.map((tender) => (
                  <tr key={tender._id} className="tender-item">
                    <td className="tender-cell">{tender.tenderId}</td>
                    <td className="tender-cell">{tender.name}</td>
                    <td className="tender-cell">
                      <p><strong>Location:</strong> {tender.location}</p>
                      <p><strong>Organization:</strong> {tender.organisation}</p>
                      <p><strong>Classification:</strong> {tender.classification}</p>
                      <p><strong>Status:</strong> {tender.status}</p>
                      <p><strong>Category:</strong> {tender.category}</p>
                      <p><strong>Product Category:</strong> {tender.productCategory}</p>
                      <p><strong>Expire:</strong> {tender.expire}</p>
                      <p><strong>Cancelled or Re-rendered:</strong> {tender.cancelled ? "Cancelled" : "Re-rendered"}</p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="no-tenders-found">No tenders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TenderByName;