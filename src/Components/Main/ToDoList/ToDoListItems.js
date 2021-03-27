import React, { Fragment } from "react"
import '../../../index.css';
import { connect } from "react-redux";
// import { deleteToDo } from "../../../Actions/ToDoListActions";
// import { saveData } from "../../../Services/api-service"


class ToDoListItem extends React.Component {

    // Delete = () => {
    // 	const { List } = this.props;		
    // 	const index = List.findIndex((elem) => elem.Id === this.props.Id);
    //     const { deleteToDo } = this.props;
    // 	List.splice(index, 1);		
    // 	deleteToDo(List);
    // 	saveData(List);
    // }


    render() {
        const { Task, Time, Priority } = this.props;

        return (
            <div className="page">
                <div className="card">
                    <div className="card-body">
                        <p><input style={{ marginRight: "1%" }} type="checkbox" id="huey" name="drone" value="huey"></input><span className="task">{Task}</span><span className="float-right"><span>{Time}</span><span>{Priority}</span><i className="fa fa-trash ml-4" aria-hidden="true" onClick={this.Delete}></i><i className="fa fa-pencil ml-4" aria-hidden="true"></i><i className="fa fa-calendar ml-4" aria-hidden="true"></i></span> </p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ ToDoListReducer }) => {
    const { List } = ToDoListReducer
    return { List }
}
// const mapDispatchToProps = {
//     deleteToDo,
// }
export default connect(mapStateToProps, null)(ToDoListItem);
