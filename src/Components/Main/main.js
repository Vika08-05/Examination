import React, { Fragment, useEffect } from "react"
import { connect } from "react-redux"
import { updateDatabase } from "../../Services/api-service"
import { getAllToDoS } from "../../Actions/ToDoListActions"



const Main = ({ getAllToDoS }) => {

    useEffect(() => {
        updateDatabase().then(data => {
           getAllToDoS(data)
        })
    },[])

    return (
        <div className="page">
            <div className="card">
                <div className="card-body">
                    <p className="heading1"> <span className="today">Today</span><span className="float-right headingright"></span></p>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ ToDoListReducer }) => {
    const { List } = ToDoListReducer;
    return { List }
}
const mapDispatchToProps = {
    getAllToDoS,
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
