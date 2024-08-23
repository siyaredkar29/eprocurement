import { useState, useEffect } from "react";
import { Button, Spin, message, Table, Modal } from "antd";
import { fetchAllTender } from "../../../Authentication"; // Function to fetch the latest tender
import "./Approve.css";
import Cards from "./Cards";

const Approve = () => {
  const [latestTender, setLatestTender] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tablecol, setTablecol] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [selectedTender, setSelectedTender] = useState(null);  // State for selected tender

  // Function to fetch the latest tender
  const fetchTender = async () => {
    setLoading(true);
    try {
      const data = await fetchAllTender(); // Fetch the latest tender from the server
      setLatestTender(data);
console.log(data);

      const dataSource = data.map((tender, index) => ({
        key: tender.tenderId,
        serialNo: index + 1,
        tenderId: tender.tenderId,
        name: tender.name,
        tenderDetails: tender, // Store the full tender details for later use
      }));

      // Define the columns for the table
      const columns = [
        {
          title: 'Serial No.',
          dataIndex: 'serialNo',
          key: 'serialNo',
        },
        {
          title: 'Tender ID',
          dataIndex: 'tenderId',
          key: 'tenderId',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Actions',
          key: 'actions',
          render: (text, record) => (
            <div className="approval-buttons">
              <Button
                className="approve-button"
                type="primary"
                onClick={() => handleApprove(record)}
              >
                Approve
              </Button>
              <Button
                className="modification-button"
                type="danger"
                onClick={() => handleSendForModification(record)}
              >
                Send for Modification
              </Button>
            </div>
          ),
        },
      ];

      setTableData(dataSource);
      setTablecol(columns);
    } catch (error) {
      console.error("Error fetching the latest tender", error);
      message.error("Failed to fetch latest tender.");
    }
    setLoading(false);
  };

  // Function to handle row click and show modal with tender details
  const handleRowClick = (record) => {
    setSelectedTender(record.tenderDetails); // Set the selected tender
    setIsModalVisible(true); // Show the modal
  };

  const handleApprove = (record) => {
    console.log("Tender approved:", record.tenderDetails);
    message.success("Tender approved successfully.");
  };

  const handleSendForModification = (record) => {
    console.log("Tender sent for modification:", record.tenderDetails);
    message.info("Tender sent for modification.");
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedTender(null);
  };

  // Use effect to fetch the tender when the component mounts
  useEffect(() => {
    fetchTender();
  }, []);

  return (
    <div className="approval-container">
      <h1 className="approval-heading">Latest Tender</h1>
      <p className="approval-description">
        Below are the details of the most recently created tenders in the system.
      </p>
      <br />

      <Button className="refresh-button" type="primary" onClick={fetchTender} disabled={loading}>
        {loading ? <Spin /> : "Refresh Latest Tender"}
      </Button>

      {latestTender ? (
        <Table 
          dataSource={tableData} 
          columns={tablecol} 
          pagination={false}
          onRow={(record) => ({
            onClick: () => handleRowClick(record), // Row click event
          })}
        />
      ) : (
        <p>No latest tender found.</p>
      )}

      {/* Modal to display the card */}
      <Modal
        title="Tender Details"
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        {selectedTender && <Cards latestTender={selectedTender} />}
      </Modal>
    </div>
  );
};

export default Approve;