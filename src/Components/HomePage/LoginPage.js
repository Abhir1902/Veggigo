import React from 'react'
import '../../style/HomePage/LoginPage.css'
function LoginPage() {
  return (
    <div>
        <form action="/">
            <div className="username">
                UserName : 
                <input type="text" className = "uname"/>
            </div>
            
        </form>
    </div>
  )
}

export default LoginPage