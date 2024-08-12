import { useEffect, useState } from "react";
import { Button, Carousel, Layout, Typography } from "antd";
import { Menu } from "antd";
import "../Hero/Hero.css";

import cashew from "../../assets/OIG3.jpg";
import beach from "../../assets/Goa, India.jpg";
import church from "../../assets/white and blue.jpg";
import sadolxem from "../../assets/Sadolxem.jpg";

import {
  FileSearchOutlined,
  FormOutlined,
  CalendarOutlined,
  FileExcelOutlined,
  FileDoneOutlined,
  EditOutlined,
  UnlockOutlined,
  UserOutlined,
  RightOutlined,
  StarOutlined,
  MenuOutlined,
  CloseCircleOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../Authentication";

const { Header, Content, Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = (val) => navigate(val);

  const [AUTH, SETAUTH] = useState(false);
  useEffect(() => {
    const f = async () => {
      SETAUTH(await isAuth());
    };
    f();
  });

  const func1 = (info, Icons) => {
    return (
      <>
        <Menu.Item className="menu-item" icon={<Icons />}>
          {info}
        </Menu.Item>
      </>
    );
  };

  const func2 = (info) => {
    return (
      <>
        <Menu.Item className="menu-item1">{info}</Menu.Item>
        <hr className="line" />
      </>
    );
  };

  const func3 = (info) => {
    return (
      <>
        <Menu.Item className="submenu-item" icon={<RightOutlined />}>
          {info}
        </Menu.Item>
      </>
    );
  };

  const carouselItems = [
    { src: sadolxem, alt: "Image 1" },
    { src: beach, alt: "Image 2" },
    { src: cashew, alt: "Image 3" },
    { src: church, alt: "Image 4" },
  ];

  return (
    <>
      <Layout style={{ position: "relative" }}>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          className="side"
        >
          <Menu className="menu" mode="inline">
            <Button
              type="text"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuOutlined /> : <CloseCircleOutlined />}
            ></Button>

            {func1("Search", FileSearchOutlined)}
            {func1("Active Tenders", FormOutlined)}
            {func1("Tenders by closing date", CalendarOutlined)}
            {func1("Corrigendum", FileExcelOutlined)}
            {func1("Results of Tenders", FileDoneOutlined)}
            {func1("Online Bidder enrollment", EditOutlined)}
            {func1("Generate/Forgot Password", UnlockOutlined)}
            {func1("Find my Nodal Officer", UserOutlined)}

            <Menu.SubMenu
              className="menu-item"
              icon={<StarOutlined />}
              title="Quick Access"
            >
              {func3("Help for Contractors", RightOutlined)}
              <Menu.Item className="submenu-item" icon={<RightOutlined />}>
                Guidelines for Hassle
                <div>Free Bid Submissions</div>
              </Menu.Item>
              {func3("Information about DSC")}
              {func3("FAQ")}
              {func3("Feedback")}
              {func3("Builders Manual kit")}
            </Menu.SubMenu>
          </Menu>
        </Sider>

        <Layout></Layout>

        <Layout className="layout">
          <Content style={{ padding: "24px", minHeight: "280px" }}>
            <div className="title-cont">
              <Typography.Title level={2}>
                Welcome to eProcurement System
              </Typography.Title>
              <div className="title-text">
                The eProcurement System enables the Tenderers to download the
                Tender Schedule free of cost and then submit the bids online
                through this portal.
              </div>
            </div>
            <Carousel className="carousel-container" arrows infinite={false}>
              {carouselItems.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="carousel-content"
                  />
                </div>
              ))}
            </Carousel>
          </Content>
        </Layout>

        <Menu className="menu1" mode="inline">
          <Header className="head">
            <b>MENU</b>
          </Header>
          {AUTH ? (
            <Menu.Item
              className="menu-item1"
              icon={<LoginOutlined />}
              onClick={() => {
                SETAUTH(false);
                localStorage.removeItem("token");
              }}
            >
              SIGNOUT
            </Menu.Item>
          ) : (
            <Menu.Item
              className="menu-item1"
              icon={<LoginOutlined />}
              onClick={() => {
                handleClick("/login");
              }}
            >
              LOGIN
            </Menu.Item>
          )}
          
          <hr className="line" />
          {func2("Tenders by location")}
          {func2("Tenders by Organisation")}
          {func2("Tenders by Classification")}
          {func2("Tenders in Archive")}
          {func2("Tenders Status")}
          {func2("Cancelled/Retendered")}
          {func2("Downloads")}
          {func2("Announcements")}
          {func2("Debartment List")}
          {func2("Awards")}
          {func2("Site Compatability")}
        </Menu>
      </Layout>
    </>
  );
};

export default Sidebar;
