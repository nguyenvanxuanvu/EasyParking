import './OrderCard.css';

export function OrderCard() {
    return (
        <div class="container-fluid order-card m-0 my-3">
            <div class="row justify-content-center">
                <div class="col-0 col-md-2 order-card-img">
                    <img class="img-fluid" src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/6a4b4c54f1d0b43c03955a1c95aea8a1.png"/>
                </div>
                <div class="col">
                    <div class="container">
                        <div class="column">
                            <h3>Bãi đỗ xe Hoa Phượng</h3>
                            <h4 class="status-text">Đang đợi xử lý</h4>
                            <p class="mb-1">1024 An Dương Vương</p>
                            <p class="mb-1">Loại phương tiện: xe máy</p>
                            <p class="mb-1">Số lượng: 1</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end align-items-center">
                <h4 class="col-auto">Tổng tiền</h4>
                <h3 class="col-auto">11,000 VNĐ</h3>
            </div>
        </div>
    )
}