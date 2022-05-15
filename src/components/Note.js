import PropTypes from 'prop-types';
import '../css/Note.css';
import Edit from './Edit';
import Delete from './Delete';

function Note(props) {
    return (
        <div className="col-sm-6">
            <div className="card card-view">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p>{props.body}</p>               
                    <Edit/>
                    <Delete/>
                </div>
            </div>
        </div>
    );
}

Note.defaultProps = {
    title: "A cool title",
    body: "A cool body"
}

Note.propTypes = {
    title: PropTypes.string
}

export default Note;