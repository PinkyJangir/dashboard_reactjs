import "./ContentMain.css";
import Cards from "../Cards/Cards";
import { Input, Select, Table } from "antd";
import Report from "../Report/Report";
import Loans from "../Loans/Loans";
import { logo } from "../../assets/images";
const { Search } = Input;

const ContentMain = () => {
  const dataSource = [
    {
      key: "1",
      ProductName: "Abstract 3D",
      Stock: "32 Stock",
      price: "$45.99",
      TotalSale: 20,
    },
    {
      key: "2",
      ProductName: "Sarphens Illustration",
      Stock: "32 Stock",
      price: "$45.99",
      TotalSale: 20,
    },
  ];

  const columns = [
    {
      title: "Product Name",
      dataIndex: "ProductName",
      key: "ProductName",
      render: (rec, index) => (
        <>
          <div style={{ display: "flex" }}>
            <img src={logo} />
            <div>
              <h3>{rec}</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Stock",
      dataIndex: "Stock",
      key: "Stock",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "Price",
    },
    {
      title: "Total Sale",
      dataIndex: "TotalSale",
      key: "TotalSale",
    },
  ];

  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
      </div>
      <br />
      <div className="content-grid-two">
        <Report />
        <Loans />
      </div>
      <br />
      <div>
        <div
          
        >
          <span
            style={{
              fontSize: "25px",
              "font-weight": "bold",
              justifyContent: "end",
            }}
          >
            Product
          </span>
          <span style={{float: "right"}}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={() => {
              console.log("gghghghghghg");
            }}
          />
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            disabled
            options={[{ value: "lucy", label: "Lucy" }]}
          />
          </span>
        </div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default ContentMain;
