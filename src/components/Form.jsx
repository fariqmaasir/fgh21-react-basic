import React from "react";

function Form(){
   return(
<div className="content">
    <div className="left">
    <div className="top">
        Untilted UI
    </div>
    <form action="">
        <div>
            <div>Welcome back</div>
            <div>Welcome back! please enter your details</div>
        </div>
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="enter your email!"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
            </div>
            <div>
                <div>
                    <input type="checkbox" name="" id="save" />
                    <label htmlFor="save">Remember for 30 days</label>
                </div>
                <div>
                    <a href="#">Forgot password</a>
                </div>
            </div>
        </div>
        <div>
            <div>
                <button type="submit">Sign In</button>
            </div>
            <div>
                <button type="click">Sign In with Google</button>
            </div>
        </div>  
    </form>
    <div className="top">
        <div>&copy; UNTILTED UI 2024</div>
    </div>
    </div>
    <div className="right">
        <div>
             <img src={asset_login} alt="" />
        </div>
    </div>
</div> 
)
}

export default Form