import { accordionData } from "./constants";
import AccItem from "./AccItem";

const Accordion = () => {
    
    return (
        <div>
            <div>Accordion</div>
            {
                accordionData.map(ac => {
                    return <AccItem ac={ac} />
                })
            }
        </div>
    )
}

export default Accordion;