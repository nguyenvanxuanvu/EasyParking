import Button from './Button'
const SearchBar = () => {
    return (
        <form>
            <div className='search-control'>
                <input
                    type='text'
                    placeholder="Tìm kiếm chỗ giữ xe"
                    className='searchBarCo'
                   
                />
                <Button  
                type = 'submit' 
                text = 'Tìm kiếm' 
                TColor='white' 
                BGColor='rgba(33, 25, 49, 1)'
                className='btn searchBut' />
            </div>
        </form>
    )
}

export default SearchBar
