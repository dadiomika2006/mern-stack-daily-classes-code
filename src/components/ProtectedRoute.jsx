import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({children,authenticated}) => {
const navigate=useNavigate()
    if(authenticated==" "&&authenticated==null){
        navigate("/login");

    }

  return children;
}

export default ProtectedRoute