import { cartData } from "../../../data";
import { CartItem } from "./CartItem";
import { useState, useEffect } from "react";
import { getOrderTotalPrice } from "../../../utils/OrderUtils";
export function Cart() {
    const [checkBoxIdx, setCheckBoxIdx] = useState(-1);
    const [checkItem, setCheckItem] = useState(null);

    return(
        <div class="container p-3">
            <div class="row mx-auto">
                <h2>Giỏ hàng của tôi</h2>
            </div>
            <div class="row mx-auto my-3">
                <div class="col-8">
                    {cartData.map((cartItem, idx) => {
                        return(
                            <div class="row align-items-center border-bottom p-2">
                                <div class="col-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            checked={idx == checkBoxIdx}
                                            onChange={() => setCheckBoxIdx((prev) => {
                                                if(prev == idx) {
                                                    setCheckItem(null);
                                                    return -1;
                                                }
                                                else {
                                                    setCheckItem(cartData[idx]);
                                                    console.log(cartData[idx]);
                                                    return idx;
                                                }
                                            })}/>
                                    </div>
                                </div>
                                <div class="col">
                                    <CartItem cartItem={cartItem}></CartItem>
                                </div>
                            </div>
                        ) 
                    })}
                </div>
                <div class="col-3">
                    <div class="row border border-secondary pb-3 rounded-3 mb-3">
                        <div class="col-12 bg-secondary text-white p-2">
                            <span>Thông tin khách hàng</span>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Tên khách hàng</label>
                            <input class="form-control" type="text" value={"hihi"} aria-label="readonly input example" readonly/>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Email</label>
                            <input class="form-control" type="text" value={"hihi"} aria-label="readonly input example" readonly/>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Số điện thoại</label>
                            <input class="form-control" type="text" value={"hihi"} aria-label="readonly input example" readonly/>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Ghi chú</label>
                            <textarea class="form-control" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" rows="5"></textarea>
                        </div>
                    </div>
                    <div class="row border border-secondary pb-3 rounded-3 mb-3">
                        <div class="col-12 bg-secondary text-white p-2">
                            <span>Tổng tiền</span>
                        </div>
                        <div class="col-12">
                            <table class="table">
                                <tbody>
                                    <tr>
                                    <th scope="row">Tạm tính</th>
                                    <td class="text-end">{checkItem ? Intl.NumberFormat().format(getOrderTotalPrice(checkItem.vehicles, checkItem.startTime, checkItem.endTime)) : 0}đ</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Khuyến mãi</th>
                                    <td class="text-end">- 0đ</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Tổng cộng</th>
                                    <td class="text-end">{checkItem ? Intl.NumberFormat().format(getOrderTotalPrice(checkItem.vehicles, checkItem.startTime, checkItem.endTime)) : 0}đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <button class="btn btn-primary">Đặt bãi ngay</button>
                    </div>
                </div>

            </div>
        </div>
    )
}