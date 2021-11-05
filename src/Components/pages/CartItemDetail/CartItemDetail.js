export function CartItemDetail() {
    return(
        <div class="container">
            <div class="row">
                <h3>Chỉnh sửa đơn đặt hàng</h3>
            </div>
            <div class="row mt-4">
                <div class="col-1">
                    <img class="img-fluid" src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/6a4b4c54f1d0b43c03955a1c95aea8a1.png"/>
                </div>
                <div class="col row">
                    <span class="col-6 fs-4">Bãi đỗ xe Hoa Phượng</span>
                    <span class="col-6 fs-6">Địa chỉ</span>
                    <div class="col-6">
                        <label class="form-label fw-bold">Gửi vào lúc</label>
                        <input type="datetime-local" class="form-control"/>
                        </div>
                    <div class="col-6">
                        <label type="text" class="form-label fw-bold">Lấy vào lúc</label>
                        <input type="datetime-local" class="form-control"/>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <h4>Điều chỉnh số lượng xe</h4>
            </div>
            <div class="row">
                <table class="table w-75">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Loại xe</th>
                        <th scope="col">Số giờ thuê</th>
                        <th scope="col">Đơn giá/12h</th>
                        <th class="col-1" scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Xe máy</td>
                        <td>19h</td>
                        <td>19,000đ</td>
                        <td><input type="text" class="form-control" value="1" aria-describedby="addon-wrapping"/></td>
                        <td>19,000đ</td>
                        </tr>
                        <tr>
                        <th scope="row">1</th>
                        <td>Xe máy</td>
                        <td>19h</td>
                        <td>19,000đ</td>
                        <td><input type="text" class="form-control" value="1" aria-describedby="addon-wrapping"/></td>
                        <td>19,000đ</td>
                        </tr>
                        <tr>
                        <th scope="row">1</th>
                        <td>Xe máy</td>
                        <td>19h</td>
                        <td>19,000đ</td>
                        <td><input type="text" class="form-control" value="1" aria-describedby="addon-wrapping"/></td>
                        <td>19,000đ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}