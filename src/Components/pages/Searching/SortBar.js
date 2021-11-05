import "./SortBar.css"
export function SortBar() {
  return (
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-primary shadow-none" for="btnradio1">
        Giá tăng dần
      </label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-primary shadow-none" for="btnradio2">
        Giá giảm dần
      </label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-primary shadow-none" for="btnradio3">
        Hạng sao tăng dần
      </label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio4"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-primary shadow-none" for="btnradio4">
        Hạng sao giảm dần
      </label>
    </div>
  );
}
