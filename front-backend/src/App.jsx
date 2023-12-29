import { useEffect, useState } from "react";
import axios from "axios"

const App=()=>{
  const [arr,setArr] = useState([]);
  const getData = async ()=>{
    const res = await axios.get("http://localhost:2030/getAll");
    const {data} = res;
    setArr(data);
  }
  useEffect(()=>{
    getData();
  },[]);
  return(
    <>
    <table border={1}>
      <tbody>
          <tr>
            <th>Studet Id</th>
            <th>Course </th>
            <th>Subject Name</th>
            <th>Sub1</th>
            <th>Sub2</th>
            <th>Sub3</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Grade</th>  
            <th>Result</th>
          </tr>
          {
            arr.map((element,index)=>{
              return(
                <tr key={index}>
                  <td>{element.sid}</td>
                  <td>{element.sname}</td>
                  <td>{element.course}</td>
                  <td>{element.sub1}</td>
                  <td>{element.sub2}</td>
                  <td>{element.sub3}</td>
                  <td>{element.total}</td>
                  <td>{element.percentage}</td>
                  <td>{element.grade}</td>
                  <td>{element.result}</td>
                </tr>
              )
            })
          }
      </tbody>
    </table>
    </>
  )
}
export default App;