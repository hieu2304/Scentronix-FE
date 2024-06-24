import React, { memo } from "react";
import Image from "next/image";
import styled from "styled-components";

import { Button, colors } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import AdbIcon from "@mui/icons-material/Adb";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import Divider from "@mui/material/Divider";

import { categoryData, headerData, itemTitle } from "../utils/mock-data";

const IMAGE_FAKE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrgq-QHs0a4IyD3iRUzGt_U2UYWsHECl5lg&s";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  .header-section {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .image-icon {
    position: absolute;
    left: 180px;
    top: 3px;
  }

  .sl-content {
    gap: 4px;
    padding: 0 160px;
  }

  .column {
    flex-direction: column;
  }

  .gap-4pixel {
    gap: 4px;
  }

  .gap-8pixel {
    gap: 8px;
  }

  .padding-16pixel {
    padding: 16px 0px;
  }

  .sl-acces-icon {
    font-size: 40px;
    padding: 0 4px;
  }

  .btn-error {
    padding: 4px 8px;
    margin: 0;
    color: #13324b;
    font-size: 13px;
    font-weight: 600;
  }
`;

const Flex = styled.div`
  display: flex;

  .center {
    justify-content: center;
    align-items: center;
  }

  .image {
    padding: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 46px;
  padding: 16px 160px;
  margin-left: 120px;

  .header-item {
    font-size: 20px;
    font-weight: 600;
  }
`;

const Category = styled.div`
  display: flex;
  gap: 36px;
  width: 100%;
  padding: 16px 160px;
  margin-left: 120px;
  background-color: #fce7f2;

  .category-item {
    font-size: 16px;
    font-weight: 400;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 600px;
  margin: 0;
  padding: 0;
`;

const Content = styled.h3`
  font-weight: 400;
  color: #4f6679;
  padding: 0;
  margin: 40px 0 0 0;
`;

const Subtitle = styled.h3`
  font-weight: 600;
  color: #4f6679;
  padding: 0;
  margin: 0;
`;

const Home = () => {
  return (
    <Container>
      <div className="header-section">
        <Header>
          {headerData.map((item) => {
            return (
              <div className="header-item" key={item.id}>
                {item.name}
              </div>
            );
          })}
        </Header>
        <Category>
          {categoryData.map((item) => {
            return (
              <div className="category-item " key={item.id}>
                {item.name}
              </div>
            );
          })}
        </Category>
        <Image src={IMAGE_FAKE} alt="icon" width={80} height={80} className="image-icon"/>
      </div>
      <Flex className="sl-content">
        <Description>
          <Flex>
            {itemTitle.map((item) => {
              return (
                <Flex key={item.id} className="center">
                  <p>{item.name}</p>
                  <ArrowForwardIosIcon
                    fontSize="inherit"
                    color="error"
                    style={{ padding: "0 4px" }}
                  />
                </Flex>
              );
            })}
          </Flex>
          <Title>Whole-Gain Banana Bread</Title>
          <Content>
            For new applications, we recommend using the App Router. This router
            allows you to use Reacts latest features and is an evolution of the
            Pages Router based on community feedback. Create an app/ folder,
            then add a layout.tsx and page.tsx file. These will be rendered when
            the user visits the root of your application (/). Everything is done
            through git, so to share this project we would like you to send us a
            git repo on for example like Github/Gitlab etc. We would like you to
            use Next.js as a start for this assignment, and in our apps we use
            Material-UI as a base for our components. Create a few pages like
            this with different kind of text and link them together in the menu.
            Have a dynamic way of providing data into the components using the
            best NextJS practices. Images and icons you can use either random
            from the internet or other packages.
          </Content>
          <Flex className="gap-8pixel padding-16pixel">
            <Flex style={{ marginRight: "24px" }}>
              <AccessTimeIcon className="sl-acces-icon" />
              <Flex className="column gap-4pixel">
                <Subtitle>Prep</Subtitle>
                <Subtitle>10 Mins</Subtitle>
              </Flex>
            </Flex>
            <Flex className="column gap-4pixel">
              <Subtitle>Bake</Subtitle>
              <Subtitle>1hr to 1hr 15 mins</Subtitle>
            </Flex>
            <Flex className="column gap-4pixel">
              <Subtitle>Total</Subtitle>
              <Subtitle>1hr 10 mins</Subtitle>
            </Flex>
          </Flex>
          <Divider />
          <Flex className="gap-8pixel padding-16pixel">
            <Flex style={{ marginRight: "24px" }}>
              <AdbIcon className="sl-acces-icon" />
              <Flex className="column gap-4pixel">
                <Subtitle>Yeild</Subtitle>
                <Subtitle>1 loafs, 12 generous servings</Subtitle>
              </Flex>
            </Flex>
            <Flex className="gap-8pixel">
              <Button
                variant="outlined"
                color="error"
                className="btn-error"
                startIcon={<AddIcon />}
              >
                Save Recipe
              </Button>
              <Button
                variant="outlined"
                color="error"
                className="btn-error"
                startIcon={<LocalPrintshopIcon />}
              >
                Print
              </Button>
            </Flex>
          </Flex>
        </Description>
        <div className="image">
          <Image
            src={IMAGE_FAKE}
            alt="Italian Trulli"
            width={600}
            height={400}
          />
        </div>
      </Flex>
    </Container>
  );
};

export default memo(Home);
