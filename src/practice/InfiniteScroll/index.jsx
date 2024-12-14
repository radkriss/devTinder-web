import { useEffect, useState } from "react";

const InfiniteScroll = () => {

    const [page, setPage] = useState(1);
    const [results, setResults] = useState([]);
    const [fetchMore, setFetchMore] = useState(false);
    const itemsPerPage = 10;

    const fetchData = async () => {
        const data = await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${page*itemsPerPage - itemsPerPage}`);
        const d = await data.json();
        console.log(d);
        setResults([...results, ...d.products]);
        setFetchMore(false);
    }

    useEffect(() => {
        if (fetchMore) {
            fetchData();
        }
    }, [page])

    useEffect(() => {

        fetchData();

        const handleScroll = () => {
            if (document.body.scrollHeight === (window.scrollY + window.innerHeight)) {
                console.log(document.body.scrollHeight)
                console.log(window.scrollY)
                console.log(window.innerHeight)
                setPage(prevPage => prevPage + 1);
                setFetchMore(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    results && results.length > 0 && 
                    results.map(pr => {
                        return (
                            <div key={pr.title} className="indProd">
                                <img src={pr.thumbnail} alt={pr.title} />
                                {pr.title}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InfiniteScroll;