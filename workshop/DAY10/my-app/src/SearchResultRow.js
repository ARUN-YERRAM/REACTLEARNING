import { useNavigate } from "react-router-dom";

const SearchResultsRow = ({house}) => {
    let navigate = useNavigate();
    let clickHandler = () =>{
        console.log(house);
        navigate('/house/'+house.id)
    }

    return ( 
       <tr key={house.id} onClick={clickHandler}>
       <td scope="row">{house.address}</td>
                            <td scope="row">{house.bhk}</td>
                            <td>INR {house.price}</td>
        </tr>
    );
}
 
export default SearchResultsRow;