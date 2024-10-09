import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Pagination,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const CollectionsTable = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [collections, setCollections] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCollections, setTotalCollections] = useState(0);
  const itemsPerPage = 5;

  const savedToken = Cookies.get("accessToken");

  // Fetch collection data
  const dataFetch = async () => {
    if (!savedToken) {
      toast.error("Token not provided.");
      return;
    }

    try {
      const response = await axios.get(
        `${BASE_URL}/collection?page=${currentPage}&pageSize=${itemsPerPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${savedToken}`,
          },
        }
      );
      const collectionData = response.data.collections;
      setCollections(collectionData);
      setFilteredCollections(collectionData);
      setTotalCollections(response.data.totalCollections);
    } catch (error) {
      console.error("Error fetching collection data:", error);
      toast.error("Failed to fetch collections. Please try again.");
      if (error.response && error.response.status === 401) {
        toast.error("Session expired.");
      }
    }
  };

  // Filter collections based on search input
  useEffect(() => {
    const filtered = collections.filter(
      (collection) =>
        collection.collection_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        collection.collection_description
          .toLowerCase()
          .includes(search.toLowerCase())
    );
    setFilteredCollections(filtered);
  }, [search, collections]);

  // Fetch data whenever the current page changes
  useEffect(() => {
    dataFetch();
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(totalCollections / itemsPerPage);

  // Handle Add Collection Click
  const handleAddCollectionClick = () => {
    navigate("/collections/create");
  };

  return (
    <div
      className="mt-1 p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <ToastContainer />
      <h4>List View</h4>
      <Card className="mb-4 mt-4">
        <Card.Body>
          <div className="container-fluid mt-4">
            <div className="row mb-3 mt-4 align-items-center">
              <div className="col-md-8 d-flex align-items-center gap-2">
                <div className="position-relative w-100">
                  <Search className="position-absolute top-50 translate-middle-y ms-2" />
                  <FormControl
                    type="search"
                    placeholder="Search for ..."
                    className="ps-5 w-25"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
                <Button variant="primary" onClick={handleAddCollectionClick}>
                  + Add Collection
                </Button>
              </div>
            </div>

            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Collection Title</th>
                  <th>Collection Content</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {filteredCollections.length > 0 ? (
                  filteredCollections.map((collection, index) => (
                    <tr key={index}>
                        <td className="me-2">{index + 1}.</td>
                      <td
                        style={{ color: "#3B82F6", cursor: "pointer" }}
                        onClick={() =>
                          navigate(`/collections/update/${collection._id}`)
                        }
                      >
                        {collection.collection_name}
                      </td>
                      <td>
                        <h6>{collection.collection_description}</h6>
                      </td>
                      <td>
                        {collection.collection_tags.map((tag, tagIndex) => (
                          <Button
                            key={tagIndex}
                            variant="outline-secondary"
                            size="sm"
                            className="me-1"
                          >
                            {tag}
                          </Button>
                        ))}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <p>
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, totalCollections)} of{" "}
                {totalCollections} Results
              </p>
              <Pagination>
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, pageIndex) => (
                  <Pagination.Item
                    key={pageIndex + 1}
                    active={pageIndex + 1 === currentPage}
                    onClick={() => handlePageChange(pageIndex + 1)}
                  >
                    {pageIndex + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CollectionsTable;
