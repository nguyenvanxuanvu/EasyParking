import { SideBarSearch } from './SideBarSearch';
//import { TopBar } from "../../TopBar";
import { SearchingPage } from './SearchingPage';

function AllSearchingPage() {
    
    return (
        
        // <div class="h-100">
        // <div class="row px-2">
        //     <TopBar />
        // </div>
        <div class="row h-100">
            <div class="col-auto">
                <SideBarSearch/>
            </div>
            <div class="col">
               
                    <SearchingPage/>
                
            </div>
        </div>
    //</div>
    )
}

export default AllSearchingPage;
