import styled, { css } from "styled-components";

interface InputProps {
  width?: string;
  size?: string;
  layout?: string;
  themeType?: string;
}

export const InputCommon = styled.div<InputProps>`
  display: flex;
  label {
    display: flex;
    width: ${(props) => (props.width ? props.width : "initial")};
    color: ${(props) =>
      props.themeType === "admin" ? props.theme.colors.adminLabelTxt : "white"};
    font-size: 1.2rem;
    align-items: center;
    gap: 6px 10px;

    .displayValue {
      font-size: 1.1rem;
      cursor: pointer;
    }
  }

  input,
  select,
  textarea {
    background-color: #f8f8f8;
    width: ${(props) => (props.width ? props.width : "initial")};
    font-size: ${(props) => props.size || "1.0rem;"};
    border: 1px solid ${(props) => props.theme.colors.adminInputBorder};
    border-radius: 4px;
  }

  textarea {
    height: 120px;
    padding: 10px;
    font-size: 1.3rem;
  }
`;
