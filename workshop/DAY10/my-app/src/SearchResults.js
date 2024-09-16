import { useLocation, useParams } from 'react-router-dom';
import SearchResultRow from './SearchResultRow';
import SearchFilter from './SearchFilter';

const SearchResults = ({allhouses}) => {
    const paramObj = useParams();
    const loca = useLocation();
    if (!loca.state.housesData) {
        return <h1>....loading</h1>
    }
    console.log(paramObj);
    let filteredArr = loca.state.housesData.filter(house => (
        paramObj.locality === house.locality
    ));
    
    console.log(filteredArr);
    if(paramObj.bhk !="0") {
    filteredArr = filteredArr.filter( house => (
        paramObj.bhk == house.bhk
    ));
    }
    console.log(filteredArr);
    

    return (
        <>
        
             <SearchFilter/>
        
        <div>
            <h5>Search Results ({paramObj.locality} and { (paramObj.bhk!="0")? paramObj.bhk : "any " }BHK) </h5>
            <div
                className="table-responsive"
            >
                <table
                    className="table table-primary"
                >
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">BHK</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredArr.map(item => {
                                return (
                                    <SearchResultRow key={item.id} house={item} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
        </>
        );
}

export default SearchResults;

