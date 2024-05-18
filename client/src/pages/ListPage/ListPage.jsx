import Filter from "../../components/Filter/Filter";
import { listData } from "../../lib/dummydata";
import "./listpage.scss";

function ListPage(){

    const data = listData;

    return(
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                </div>
            </div>
            <div className="mapContainer">Map</div>
        </div>
    )
}

export default ListPage;