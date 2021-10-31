import './TopBar1.css'
export function TopBar1() {
    return(
        <div class="row top-bar bg-primary p-2">
        <h3 class="col-auto">EasyParking</h3>
        <div class="input-group col px-4">
            <input type="search" class="form-control rounded" placeholder="Tìm kiếm chỗ gửi xe" aria-label="Search"
            aria-describedby="search-addon" />
            <button type="button" class="btn btn-secondary shadow-none">Tìm kiếm</button>
        </div>
        <div class="col-auto px-2">
            <button type="button" class="btn btn-secondary">Đăng nhập</button>
            <button type="button" class="btn btn-secondary btn-space">Đăng ký</button>
        </div>
    </div>
    )
}