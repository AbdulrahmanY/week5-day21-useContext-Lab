import { useContext } from "react";
import { UserContext } from "../App";
function Header(){
    const userContext = useContext(UserContext)
    return(
        <>
        <h2>{userContext.header}</h2>
        {console.log(userContext.header)}
        </>
    )
}
export default Header;
