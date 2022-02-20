import React, { useContext , useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'

export const Login = ()=>  {
    const [inp, setInp] = useState({})
    const {token,setToken} = useContext(AuthContext);
    const handleinp = (e) => {
        const { name, value } = e.target
    
        setInp({
          ...inp,
          [name]: value,
        })
    
      
    }

    async function login(){
     try {
        let req = await fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(inp),   
          })
         let result = await req.json();
         setToken(result)
     }
     catch (e){
         console.log(e);
     }
    }
    
        return (
            <div style={{'display':'grid','gap':'10px','border':'1px solid','padding':'10px','width':'200px','margin':'auto'}}>
                
                    <h3>Login</h3>

                    <input type="text" name="email" placeholder="Username" onClick={handleinp} />
                
                
                    <input type="password" name="password" placeholder="Password" onClick={handleinp} />
                
                <button onClick={login} style={{'width': '25%','margin':'auto'}}>Login</button>
            </div>
        )
   
}
