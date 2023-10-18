import {
  ArrowDownOutlined,
  ArrowUpOutlined,
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
  } from "@ant-design/icons";
import { logo } from "../../assets/images";
import "./Cards.css";
import { Card, Space, Statistic } from "antd";
import { useState } from "react";

const Cards = () => {
    const [orders] = useState(19);
    const [earning] = useState(2.4);
    const [balance] = useState(2.4);
    const [revenue] = useState(89);
  return (
  
      <>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                justifyContent:'center',
                width: "5rem",
                height: "5rem",
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: '50%',
                fontSize: '3rem',
                padding: 8,
              }}
            />
          }
          title={"Earning"}
          value={`$${earning}k`}
          per={37}
          up={true}

        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                justifyContent:'center',
                width: "5rem",
                height: "5rem",
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: '50%',
                fontSize: '3rem',
                padding: 8,
              }}
              
            />
          }
          per={2}
          up={false}
          title={"Orders"}
          value={`$${orders}k`}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                justifyContent:'center',
                width: "5rem",
                height: "5rem",
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: '50%',
                fontSize: '3rem',
                padding: 8,
              }}
              

            />
          }
          per ={2}
          up={false}
          title={"Balance"}
          value={`$${balance}k`}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                justifyContent:'center',
                width: "5rem",
                height: "5rem",
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: "50%",
                fontSize: '3rem',
                padding: 8,
              }}
              

            />
          }
          per={11}
          up={true}
          title={"Total Sales"}
          value={`$${revenue}k`}
        />
        </>
  );
}

function DashboardCard({ title, value, icon, up, per }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <div>
        <Statistic title={title} value={value} />
      <p><span style={{color:up?"green":"red", fontSize:"10px"}}>{up?<ArrowUpOutlined />:<ArrowDownOutlined />}{per}%</span> this month</p>
        </div>
      </Space>
    </Card>
  );
}

export default Cards
