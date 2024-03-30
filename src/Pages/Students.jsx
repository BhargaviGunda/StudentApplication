import React from 'react';
import {Link} from 'react-router-dom'
    const studentdata=[
        {
            id:"22b01a1201",
            name:"sailaja"
        },
        {
            id:"22b01a1202",
            name:"priyanka"
        },
        {
            id:"22b01a1203",
            name:"meghana"
        }
    ]
const Students =()=>{
    return(

        <div>
            {studentdata.map((item)=>(
        <li>
        <Link to={`/students/${item.id}/${item.name}`}>{item.id}</Link>
        </li>
          ))
            }
        </div>
    );
};
export default Students;