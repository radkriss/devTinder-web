import { useEffect, useState } from "react"
import "./Pagination.css"


const Pagination = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    let itemsPerPage = 10;

    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/products?limit=100');
        const data = await res.json();
        setProducts(data.products);
    }

    const handlePageClick = (page) => {
        if (page >= 1 && page <= [...Array(products.length/itemsPerPage)].length) {
            setPage(page);
        }
    }

    useEffect(() => {
        console.log(page);
        console.log("Page change useeffect")
    },[page])

    useEffect(() => {
        fetchData();
    },[])
    return (
        <div>
            <div>Pagination</div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    products && products.length > 0 && 
                    products.slice(page * 10 - 10, page * itemsPerPage).map(pr => {
                        return (
                            <div key={pr.title} className="indProd">
                                <img src={pr.thumbnail} alt={pr.title} />
                                {pr.title}
                            </div>
                        )
                    })
                }
            </div>
            <div style={{display: "flex", margin: "10px 0px"}}>
                <div onClick={() => handlePageClick(page-1)} style={{padding: "10px", border: "1px solid", cursor: "pointer"}}>Prev</div>
                {
                    [...Array(products.length/itemsPerPage)].map((_, i) => {
                        return <div onClick={() => handlePageClick(i+1)} style={{padding: "10px", border: "1px solid", cursor: "pointer"}}>{i+1}</div>
                    })
                }
                <div onClick={() => handlePageClick(page+1)} style={{padding: "10px", border: "1px solid", cursor: "pointer"}}>Next</div>
            </div>
        </div>
    )
}

export default Pagination;