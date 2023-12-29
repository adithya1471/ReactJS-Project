import { useRef, useState } from "react";
import axios from "axios";

const Registration=()=>{
    const [res,setRes] = useState({});
    const f_name = useRef(null);
    const l_name = useRef(null);
    const street = useRef(null);
    const address = useRef(null);
    const city = useRef(null);
    const state = useRef(null);
    const phone = useRef(null);
    
    const register=()=>{
        registerEx();
    }
    const registerEx = async()=>{
        const response = await axios.post("http://localhost:2016/register",{
            "f_name":f_name.current.value,
            "l_name":l_name.current.value,
            "street":street.current.value,
            "address":address.current.value,
            "city":city.current.value,
            "state":state.current.value,
            "phone":phone.current.value
         });
         {alert("data inserted successfuly")}
         const {data} = response;
         setRes(data);
    }
    return(
        <>
          <input type="text" ref={f_name} placeholder="First Name" /><br /><br />
          <input type="text" ref={l_name} placeholder="Last Name" /><br /><br />
          <input type="text" ref={street} placeholder="street"/><br /><br />
          <input type="text" ref={address} placeholder="address" /><br /><br />
          <input type="text" ref={city} placeholder="City"/><br /><br />
          <input type="text" ref={state} placeholder="state"/><br /><br />
          <input type="text" ref={phone} placeholder="Phone" /><br /><br />
          <button onClick={register}>Register</button>
          <p>{JSON.stringify(res)}</p>
        </>
    )
}
export default Registration;