import { useEffect, useState } from "react";

const Modal = () => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target == document.getElementById("modal")) {
                setShowModal(false)
            }
        }
        window.addEventListener("click", handleClick)
        return function () {
            window.removeEventListener("click", handleClick)
        }
    })

    return (
        <div>
            <input type="button" value="Open Modal" onClick={() => setShowModal(true)} />
            {
                showModal && 
                <div className="modalContainer" id="modal">
                    <div className="modalContent">
                        <div style={{display: "flex"}}>
                            <label>Confirm action</label>
                            <span onClick={() => setShowModal(false)}>Close</span>
                        </div>
                        <div>
                            This is just a sample text to show content in modal
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <input type="button" className="closeBtn" value="Close Modal" onClick={() => setShowModal(false)} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Modal;