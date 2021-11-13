import "./SideBarSearch.css";

export function SideBarSearch() {
  return (
    <div className="sidebar bg-secondary p-4 h-100">
      <h5 class="card-title">Chọn lọc theo</h5>
      <h6 class="card-title pt-4">Loại xe</h6>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          check
        />
        <label class="form-check-label" for="flexCheckDefault">
          Xe máy
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          check
        />
        <label class="form-check-label" for="flexCheckChecked">
          Xe 4 - 7 chỗ
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          check
        />
        <label class="form-check-label" for="flexCheckChecked">
          Xe 9 - 16 chỗ
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          check
        />
        <label class="form-check-label" for="flexCheckChecked">
          Xe container
        </label>
      </div>

      <h6 class="card-title pt-3">Giá</h6>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          check
        />
        <label class="form-check-label" for="flexCheckDefault">
          10,000 - 20,000 VNĐ
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          check
        />
        <label class="form-check-label" for="flexCheckChecked">
          20,000 - 30,000 VNĐ
        </label>
      </div>
    </div>
  );
}
