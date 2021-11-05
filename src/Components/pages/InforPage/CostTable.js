const ARR_COST = [
  ['Xe máy', '5,000', '10,000'],
  ['Ô tô 4-7 chỗ', '10,000','20,000'],
  ['Ô tô 16 chỗ', '20,000', '50,000']
]
export function CostTable(){
    return (
        <table class="table border">
        <thead>
    
    <tr class="table-dark">
      <th scope="col">Loại phương tiện</th>
      <th scope="col">Giá gửi ngày</th>
      <th scope="col">Giá gửi đêm</th>
    </tr>
  </thead>
  <tbody>
  {ARR_COST.map((each) => {

return (
   
  <tr>
      
  <td>{each[0]}</td>
  <td>{each[1]}</td>
  <td>{each[2]}</td>
</tr>
  
);
})}
    
  </tbody>
</table>
    );
}