import {useNavigate} from 'react-router-dom';

function Delete(props) {

    let navigate = useNavigate();

    function handleButton(event) {
      //We want to switch pages....to go to the home page..
      //HOW DO WE DO THIS?
      navigate("/delete", { replace:false, state: { login: props.login } });
    }
    return <button className="btn btn-danger" onClick={handleButton}>Delete</button>;
}

export default Delete;

