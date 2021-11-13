import {AiOutlineShoppingCart} from 'react-icons/ai'

export function TopBar() {
    return(
        <div class="row top-bar bg-primary p-2">
            <h3 class="col-auto">EasyParking</h3>
            <div class="input-group col px-4">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
                <button type="button" class="btn btn-secondary shadow-none">search</button>
            </div>
            <div class="col-auto px-2 border border-secondary">
                <a href="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="100%" fill="currentColor" class="bi bi-cart2 text-secondary" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    <span class="col bg-secondary text-white m-2 px-2 rounded">2</span>
                </a>
            </div>
            <div class="col-auto d-flex align-items-center px-4">
                <a href="/account">
                    <span class="text-secondary fw-bold">Tài khoản</span>
                </a>
            </div>
        </div>
    )
}