import {useNavigate} from 'react-router-dom';

function Edit(props) {

    let navigate = useNavigate();

    function handleButton(event) {
      //We want to switch pages....to go to the home page..
      //HOW DO WE DO THIS?
      navigate("/edit", { replace:false, state: { login: props.login } });
    }
    return <button className="btn btn-info" onClick={handleButton}>Edit</button>;
}

export default Edit;

