import {useNavigate} from 'react-router-dom';

function Delete(props) {

    let navigate = useNavigate();

    function handleButton(event) {
      //We want to switch pages....to go to the home page..
      //HOW DO WE DO THIS?
      navigate("/", { replace:false, state: { login: props.login } });
    }
    return <button onClick={handleButton}>Push</button>;
}

export default Delete;