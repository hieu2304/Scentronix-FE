import styled from "styled-components";

export const Container = styled.div`
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

export const Flex = styled.div`
  display: flex;

  .center {
    justify-content: center;
    align-items: center;
  }

  .image {
    padding: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 46px;
  padding: 16px 160px;
  margin-left: 120px;

  .header-item {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Category = styled.div`
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

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 600px;
  margin: 0;
  padding: 0;
`;

export const Content = styled.h3`
  font-weight: 400;
  color: #4f6679;
  padding: 0;
  margin: 40px 0 0 0;
`;

export const Subtitle = styled.h3`
  font-weight: 600;
  color: #4f6679;
  padding: 0;
  margin: 0;
`;