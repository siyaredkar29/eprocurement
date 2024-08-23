import { useState, useEffect } from "react";
import { Form, Radio } from "antd";
import { fetchTendersByCancelStatus } from "../../../Authentication";
import "./Tender.css"

const CancelledRetenderedTenders = () => {

  const handleHomeClick = () => {
    window.location.href = '/';
  };
  const [tenders, setTenders] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTenders = async () => {
      const data = await fetchTendersByCancelStatus(filter);
      setTenders(data);
    };

    fetchTenders();
  }, [filter]);

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="backimg">
      <button className="homebutton" onClick={handleHomeClick}>BACK</button>
        <Form
        name="tender_search"
        layout="vertical"
        className="tender-search-form"
      >
        <h1>Filter Tenders by Cancelled/ Re-tendered Status</h1>
        <br />
        <p className="ptext">
          Please select an option, the search will give a list of tenders
          and related information based on the selected option.
        </p>
        <br />
      <Radio.Group onChange={onChange} value={filter}><br/>
        <Radio value="all">All</Radio><br/>
        <Radio value="cancelled">Cancelled</Radio><br/>
        <Radio value="rerendered">Re-tendered</Radio><br/>
      </Radio.Group>
      </Form>
      <div className="tender-results-container">
        <h2>Tenders: {filter === "all" ? "All" : filter}</h2>
        <div className="tender-results">
          <ul>
            {tenders.length > 0 ? (
              tenders.map((tender) => (
                <p key={tender._id}>
                  <strong>Name:</strong> {tender.name}
                  <br />
                  <strong>Location:</strong> {tender.location}
                  <br />
                  <strong>Organization:</strong> {tender.organisation}
                  <br />
                  <strong>Classification:</strong> {tender.classification}
                  <br />
                  <strong>Status:</strong> {tender.status}
                  <br />
                  <strong>Cancelled:</strong> {tender.cancelled ? "Yes" : "No"}
                  <br />
                  <strong>Re-tendered:</strong> {tender.rerendered ? "Yes" : "No"}
                  <br /><br/>
                  <hr /><br/>
                </p>
              ))
            ) : (
              <p>No tenders found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CancelledRetenderedTenders;