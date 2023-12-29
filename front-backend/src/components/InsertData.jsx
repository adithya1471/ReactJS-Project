import { useRef, useState } from "react";
import axios from "axios"

const InsertData=()=>{
    const [res, setRes] = useState({});
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const post_data =()=>{
        postEx();
    }
    const postEx = async ()=>{
        const res = await axios.post("http://localhost:2030/save", {"sname":ref1.current.value,
                                                                      "course":ref2.current.value,
                                                                      "sub1":ref3.current.value,
                                                                    "sub2":ref4.current.value,
                                                                    "sub3":ref5.current.value})
                         
            const {data} = res;
            setRes(data);
          alert("data inserted succefully");

    }
    return(
        <>
     
       Student Name : <input type="text" ref={ref1}/><br /><br />
       Course : <input type="text" ref={ref2}/><br /><br />
       Sub 1 : <input type="number" ref={ref3}/><br /><br />
       Sub 2 : <input type="number" ref={ref4} /><br /><br />
       Sub 3 : <input type="number" ref={ref5} /><br /><br />
       <button onClick={post_data}>Post</button>
       {/* <p>{JSON.stringify(res)}</p> */}
        </>
    )
}
export default InsertData;