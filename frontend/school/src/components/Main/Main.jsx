import React, { useState, useEffect } from 'react';
import { Link ,useParams,Navigate} from 'react-router-dom'


export const Main = () => {
    const [data, setData] = useState()

    // const page = useParams();

    async function getData(p) {
        try {
            let res = await fetch(`http://localhost:2345/teacher?page=${p}`)

            let result = await res.json();

            setData(result.output);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData(1);
    }, [])

    // console.log(page);
    function Pages(n){
        getData(n);
        return <Navigate to={`/page=${n}`} />        
    }
    return <>
        <h1>Main</h1>
        {(data) ? <div>
             <div style={{ "border": "1px solid", 'margin':'auto','width':"50%" }}>
            <div style={{"display":"flex",'justifyContent':'space-between', "border": "1px solid" }} >

                <h3>Instructor</h3>
                <h3>Total Classes</h3>

            </div>

            {data.map((e) => (
                <>
                    <div style={{"display":"flex",'justifyContent':'space-between','margin':'10px 20px 10px 10px' }}>
                        <Link to={`/Classes/${e._id}`} >{e.Name}</Link>
                        <div  >{e.class.length}</div>
                    </div>
                </>
            ))}
        </div>

        <div>
        {/* <Link to={`/page=2`} >2</Link> */}
        <button onClick={()=>{Pages(1)}}>
        <Link to={`/page=1`} >1</Link>
        </button>
        <button onClick={()=>{Pages(2)}}>
        <Link to={`/page=2`} >2</Link>
        </button>
        <button onClick={()=>{Pages(3)}}>
        <Link to={`/page=3`} >3</Link>
        </button>
            
        </div>
        </div> : <div>...Loading</div>}
    </>
}