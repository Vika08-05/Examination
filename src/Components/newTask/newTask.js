import React from "react"
import ReactDOM from "react-dom"
import './newTask.css';



class newTask extends React.Component {
    state = {
        Task: "Task",
        Where: "Where",
        Time: "Time",
    }

    getTask = (event) => {
        this.setState = ({
            Task: event.target.value
        })
    }
    getWhere = (event) => {
        this.setState = ({
            Where: event.target.value
        })
    }
    getTime = (event) => {
        this.setState = ({
            Time: event.target.value
        })
    }

    render() {


        return (
            < form className="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Task:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="text" placeholder="Enter New Task" />
                    </div>
                </div>
                <div class="form-group col-sm-5">
                    <label class="control-label col-sm-2" style={{ marginLeft: "-16px" }} for="pwd">Date:</label>
                    <div >
                        <input type="date" name="calendar" className="callist" value="2021-07-22" min="2021-01-01" max="2021-12-31" />
                    </div>
                </div>
                <div>
                    <div className="col-sm-5 seleclist">
                        <label for="sel1">Priority:</label>
                        <select class="form-control" placeholder="Priority" value="Priority" id="sel1">
                            <option>Low Priority</option>
                            <option>High Priority</option>
                            <option>Medium Priority</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button className="btn-block btn-primary sub" style={{ color: "white" }, { marginTop: "20px" }}> Submit </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default newTask