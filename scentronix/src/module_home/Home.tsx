import React, { memo } from "react";
import Image from "next/image";

import { Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import AdbIcon from "@mui/icons-material/Adb";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import Divider from "@mui/material/Divider";

import {
  Container,
  Header,
  Category,
  Content,
  Subtitle,
  Description,
  Flex,
  Title,
} from "./Home.styled";
import {
  categoryData,
  headerData,
  itemTitle,
  IMAGE_FAKE,
} from "../utils/mock-data";

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
        <Image
          src={IMAGE_FAKE}
          alt="icon"
          width={80}
          height={80}
          className="image-icon"
        />
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
