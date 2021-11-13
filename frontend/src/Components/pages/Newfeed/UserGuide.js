import './UserGuide.css';
const UserGuide = (props) => {
    return (
        // <div class="card mb-3 bg-secondary" style={{width: '302px', height: '186px'}}>
        //     <div class="row g-0 align-items-center">
        //         <div class="col-md-4 ps-2 pt-3">
        //             <img src={props.img} class="img-fluid rounded-start" alt="..."/>
        //         </div>
        //         <div class="col-md-8">
        //             <h5 class="card-text text-center text-primary">{props.text}</h5>
        //         {/* <div class="card-body text-primary">
                    
        //         </div> */}
        //         </div>
        //     </div>
        // </div>
        <div class="card mb-3 bg-secondary border-0 shadow" style={{height: '275px'}}>
            <img src={props.img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-text text-center text-primary">{props.text}</h5>
            </div>
        </div>
    );
}
export default UserGuide;