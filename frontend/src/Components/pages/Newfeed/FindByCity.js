import MiniCard from "./MiniCard";
const MINI_CARD = [
    ["Huế", "Có 32 bãi đỗ xe"],
    ["Cà Mau", "Có 32 bãi đỗ xe"],
    ["Tiền Giang", "Có 32 bãi đỗ xe"],
    ["An Giang", "Có 32 bãi đỗ xe"],
    ["Cần Thơ", "Có 32 bãi đỗ xe"],
    ["Hà Nội", "Có 32 bãi đỗ xe"],
    ["Đà Nẵng", "Có 32 bãi đỗ xe"],
    ["Hội An", "Có 32 bãi đỗ xe"],
    ["Thành Phố Hồ Chí Minh", "Có 32 bãi đỗ xe"],
    ["Quảng Bình", "Có 32 bãi đỗ xe"],
    ["Vũng Tàu", "Có 32 bãi đỗ xe"],
    ["Sa Pa", "Có 32 bãi đỗ xe"]
  ];

export function FindByCity(){
    return(
        <div class="pt-0">
            <div class="row row-cols-auto">
              {MINI_CARD.map((mini) => {
              return (
                <div class="col">
                  <div class="pt-3">
                    <MiniCard
                      name={mini[0]}
                      number={mini[1]}
                    ></MiniCard>
                  </div>
                </div>
              );
            })}
            </div>
        </div>
    )
}