import React from 'react'
import Row from './Row'

const showData = trainingList => {
  return trainingList.map(({ A, B, C, D }) => (
    <Row index={A} name={B} classCode={C} idCode={D} />
  ))
}

const Table = props => {
  return (
    <div class='table'>
      <div class='row header'>
        <div class='cell'>#</div>
        <div class='cell'>Họ Và Tên</div>
        <div class='cell'>Lớp</div>
        <div class='cell'>Mã Sinh Viên</div>
      </div>
      {showData(props.trainingList)}
    </div>
  )
}
export default Table
