


function typere(idx) {
  if (idx === 0) return "Xe máy";
  else if (idx === 1) return " Xe ô tô 4-7 chỗ";
  else if (idx === 2) return "Xe 9-16 chỗ";
  else if (idx === 3) return "Xe 32 chỗ";
}
export function CostTable({param}) {
  var para = []
  for (let each in param){
      para.push(param[each])
  }
  return (
    <table class="table border">
      <thead>
        <tr class="table-dark">
          <th scope="col">Loại xe</th>
          <th scope="col">Giá gửi /12h / VNĐ</th>
        </tr>
      </thead>
      <tbody>
       
      
       {para.map((each, index) => {
        if (each > 0)
        return (
          <tr>
            <td>{typere(index)}</td>
            <td>{each}</td>
          </tr>
        );
      })} 
      </tbody>
    </table>
  );
}
