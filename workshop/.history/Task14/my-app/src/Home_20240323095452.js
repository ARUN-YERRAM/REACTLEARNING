import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
    return ( 
        <div className="row">
            {/* <div className="col-sm-12">
              <img className="img-fluid w-100 h-75" src="/imgs/homepage2.jpg"/>
            </div> */}

            {/* <figure class="figure">
                 <img className="img-fluid w-100 h-75" src="/imgs/homepage2.jpg"/>
                 <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
            </figure> */}

{/* 
            <div class="bg-image" className="w-100">
                <img src="/imgs/homepage2.jpg" className="w-100" />
                <div className="mask text-light d-flex justify-content-center flex-column text-center">
                    <h4>Custom heading</h4>
                    <p className="m-0">paragrdsfdsfdsfdsfaph</p>
                </div>
            </div>
 */}
    
    <div className="bg-image">
      
        <img src="/images/homepage2.jpg" className="w-100" />
    </div>
</div>
     );
}
 
export default Home;