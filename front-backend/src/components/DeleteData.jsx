import { useRef, useState } from "react";


const DeleteData=()=>{
    const [res, setRes] = useState();
    const ref1 = useRef(null);
    const deleteRecord=()=>{
        
    }
    return(
        <>
           <input type="text" ref={ref1} placeholder="delete your id"/><br /><br />
            <button onClick={deleteRecord}> Delete</button>
        </>
    )
}
export default DeleteData;