import styled from "styled-components/native";

export const Item = styled.View`
  background-color: ${(props) => props.theme.secondaryBackground};
  padding: 16px 24px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const Circle = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 10px;
  margin-right: 16px;
  border: 2px solid #00aaff;
`;


export const ItemText = styled.Text`
  color: ${(props) => props.theme.secondaryText};
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;
