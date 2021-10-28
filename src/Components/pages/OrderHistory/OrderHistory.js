import './OrderHistory.css';
import { OrderCard } from './OrderCard';
import { Link
 } from 'react-router-dom';
function OrderInfo (id, date, name, sum, status) {
    return {
        "id": id,
        "date": date,
        "name": name,
        "sum": sum,
        "status": status
    }
}
const ORDER_INFO_ARR = [
    OrderInfo(123456, "21/10/2021", "Bãi đỗ xe hoa phượng", 11000, "Đang chờ xác nhận"),
    OrderInfo(123456, "21/10/2021", "Bãi đỗ xe hoa phượng", 11000, "Đang chờ xác nhận"),
];

export function OrderHistory() {
    return(
        <div class="order-history-content container">
            <h2 class="my-3">Lịch sử đặt bãi</h2>
            <div class="order-card-list row">
                <OrderCard/>
                <OrderCard/>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Mã đơn hàng</th>
                    <th scope="col">Ngày đặt đơn</th>
                    <th scope="col">Tên bãi đỗ</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="col">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {ORDER_INFO_ARR.map(order => {
                        return(
                            <tr>
                            <th scope="row">{order.id}</th>
                            <td>{order.date}</td>
                            <td><Link to="/account/user-info">{order.name}</Link></td>
                            <td>{order.sum}</td>
                            <td>{order.status}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}