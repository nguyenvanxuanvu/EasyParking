import { TopBar } from "../../TopBar";
import  { InforPage }  from './InforPage';

 function  AllInfoPage() {
    
    return (
        
        <div class="h-100">
        <div class="row px-2">
            <TopBar />
        </div>
        <div class="row h-100">
            
               
                <InforPage/>
                
            
        </div>
    </div>
    )
}

export default AllInfoPage;