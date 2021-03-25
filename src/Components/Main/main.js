import React, { Fragment } from "react"
import '../../index.css';


const Main = () => {
    return (
        <Fragment>
            <div className="page">
                <div className="card">
                    <div className="card-body">
                        <p className="heading1"> <span className="today">Today</span> <span className="float-right headingright">7h 15min</span> </p>
                        <p> <input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task mt-4">Take kids to school</span> <span className="time ml-2">8:00-8:30AM</span> <span className="float-right">30min</span> </p>
                        <p><input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task">Process email</span>  <span className="time ml-2">8:00-9:30AM</span><span className="float-right">1h</span> </p>
                        <p> <input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task">Daily Stand-Up meeting</span><span className="time ml-2">9:00-10:00AM</span> <span className="float-right">30min</span> </p>
                        <p><input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task">Create new templates</span><span className="time ml-2">10:00-11:45AM</span><i className="fa fa-trash-o fa-stack-1x fa-inverse"></i> </p>
                        <p><input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task">Lunch with Anna</span> <span className="time ml-2">12:00-12:30PM</span> <span className="float-right">30min</span> </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Main
