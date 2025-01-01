import { useEffect } from "react"
import { binarySearchRecursive, binarysearchIterative, bubbleSort, insertionSort, quickSort, myLogic } from "./logics"

const Logics = () => {

    useEffect(() => {
        // console.log(binarysearchIterative([1,2,3,4,5], 2))
        // console.log(binarysearchIterative([1,2,3,4,5], 20))
        // console.log(binarysearchIterative([1,2,3,4,5], 4))
        console.log(myLogic("|**|*|*", [1,1],[5,6]));
    }, [])
    return (
        <div>
            Logics
        </div>
    )
}

export default Logics;