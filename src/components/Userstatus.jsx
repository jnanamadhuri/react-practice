const Admin = () => <h1>Welcome Admin💌</h1>
const User =() => <h1>Welcome User💌</h1>

const Userstatus = (islogin,isadmin) => {
    if (islogin=="true" && isadmin=="true") {
        return <Admin/>
    }
    else {
        return <User/>
    }

}

export default Userstatus;