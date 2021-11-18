export default function PaymentSuccess() {
    return(
        <div class="container mt-5">
            <div class="d-flex justify-content-center h-25">
                <img src="https://icon-library.com/images/successful-icon/successful-icon-10.jpg"></img>
            </div>
            <h2 class="text-center block p-4">THÀNH CÔNG!</h2>
            <h4 class="text-center block pb-4">Đơn đặt hàng của bạn đã được thanh toán qua PayPal</h4>
            <div class="row justify-content-center">
                <button class="btn btn-primary col-auto"
                onClick={() => window.location.href = "/"}>Tiếp tục khám phá</button>
            </div>
        </div>
    )
}