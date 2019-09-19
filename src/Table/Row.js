import React from "react";
import styled from 'styled-components';

const Row = ({index, name, classCode, idCode}) => {
  return (
    <div class="row">
      <div class="cell" data-title="STT">
        {index}
      </div>
      <div class="cell" data-title="Họ Và Tên">
        <Name>{name}</Name>
      </div>
      <div class="cell" data-title="Lớp">
        {classCode}
      </div>
      <div class="cell" data-title="Mã Sinh Viên">
        {idCode}
      </div>
    </div>
  );
};

const Name = styled.span`
    font-weight: bold;
    font-size: 120%;
`;

export default Row;
