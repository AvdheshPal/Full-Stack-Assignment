import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Classes = () => {
    let { id } = useParams();
    const [classData, setClassData] = useState()

    async function getClassData() {
        try {
            let res = await fetch(`http://localhost:2345/teacher/${id}`)

            let result = await res.json();

            setClassData(result);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getClassData();
        console.log(classData);
    }, [])

    // function show(){
    //     // console.log();
    //     getClassData()
    // }
    // console.log(classData);

    return (<>
        {(classData) ? <div>
            <h3>{classData.Name}</h3>
         <div style={{"display":"flex",'justifyContent':'space-between'}} >
                
            <div>
                <h3>Subject</h3>
            {classData.class.map((e) => (
                    <div>{e.Subject}</div>
                ))}
            </div>
            <div>
                <h3>Grade</h3>
                {classData.class.map((e) => (
                    <div>{e.Grade}</div>
                ))}
            </div>
            <div>
                <h3>Section</h3>
            {classData.class.map((e) => (
                    <div>{e.Section}</div>
                ))}
            </div>
            <div></div>
        </div>
        </div> : <h2>...Loading</h2>}

    </>)
}
