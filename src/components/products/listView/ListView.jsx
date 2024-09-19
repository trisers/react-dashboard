import React from "react";
import {
  Table,
  Button,
  Pagination,
  InputGroup,
  FormControl,
  Card,
  Image,
  Dropdown,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import ListViewData from "../../../../allFakeData/ListViewData";
import { useNavigate } from "react-router-dom";

const ListView = () => {
  const navigate = useNavigate();

  const handleAddProductClick = () => {
    navigate("/ecommerce/products/add");
  };

  return (
    <div
      className="mt-1 p-4"
      style={{ backgroundColor: "#F1F5F9", minHeight: "100%" }}
    >
      <h4>List View</h4>
      <Card className="mb-4 mt-4">
        <Card.Body>
          <div className="container-fluid mt-4">
            <div className="row mb-3 mt-4 align-items-center">
              <div className="col-md-8 d-flex align-items-center gap-2">
                <div className="position-relative w-10">
                  <Search className="position-absolute top-50 translate-middle-y ms-2" />
                  <FormControl
                    type="search"
                    placeholder="Search for ..."
                    className="ps-5"
                    aria-label="Search"
                  />
                </div>
                <InputGroup style={{ width: "240px" }}>
                  <FormControl
                    type="text"
                    placeholder="Select Date"
                    aria-label="Select Date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </InputGroup>
              </div>
              <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
                <Button variant="primary" onClick={handleAddProductClick}>
                  + Add Product
                </Button>
              </div>
            </div>

            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>Product Code</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Revenue</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ListViewData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.productCode}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center gap-1">
                        <Image
                          src={item.image}
                          roundedCircle
                          alt="Product Avatar"
                          style={{ height: "30px", width: "32px" }}
                        />
                        <div>{item.productName}</div>
                      </div>
                    </td>
                    <td>
                      <Button
                        variant="secondary"
                        className="border-0 h-25 w-75 text-center"
                        style={{ color: "#64748B", backgroundColor: "#E2E8F0" }}
                      >
                        {item.category}
                      </Button>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.revenue}</td>
                    <td>
                      <Button
                        variant="secondary"
                        className="border-0 h-25 w-75 text-center"
                        style={{
                          color: item.status.color,
                          backgroundColor: item.status.bgColor,
                        }}
                      >
                        {item.status.label}
                      </Button>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="link"
                          id={`dropdown-${index}`}
                          style={{
                            textDecoration: "none",
                            color: "black",
                            padding: 0,
                          }}
                          className="three-dots-dropdown"
                        >
                          <span style={{ cursor: "pointer" }}>...</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>Show</Dropdown.Item>
                          <Dropdown.Item>Update</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <p>Showing {ListViewData.length} of 19 Results</p>
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListView;
