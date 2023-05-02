import React from 'react'
import confirmation from './confirmations';
import { useState } from "react";


const course = [
  { id: 1, name: "Design" },
  { id: 2, name: "Web " },
  { id: 3, name: "Dev" },
  { id: 4, name: "3D " },
];
    


function Courses(){

    const [courses] = useState(course);
   
  return (
    <div>
         <form>
        <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <label>
              <input
                type="checkbox"
              />
              {course.name}
            </label>
          </li>
        ))}
      </ul>

  <button type="button" >
        Back
      </button>
      <button type="submit">Next</button>       

   </form>
</div>

  )
}

export default Courses
