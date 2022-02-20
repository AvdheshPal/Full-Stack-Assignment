import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div style={{'display':'grid','gap':'10px','border':'1px solid','padding':'10px','width':'200px','margin':'auto'}}>
                
                    <h3>Login</h3>

                    <input type="text" name="username" placeholder="Username" />
                
                
                    <input type="password" name="Password" placeholder="Password" />
                
                <button style={{'width': '25%','margin':'auto'}}>Login</button>
            </div>
        )
    }
}

export default Login