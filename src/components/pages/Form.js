import React, {Component} from "react";

class Form extends Component {
    render() {
        return (
            <div className="col-lg-6 mx-auto">
                <form className="card">
                    <div className="card-header">
                        <h4>Form</h4>
                    </div>

                    <div className="card-body">
                        <input type="text" className="form-control" placeholder='Ваш телефон'/>
                    </div>

                    <div className="card-footer text-right">
                        <button className="btn btn-primary" type="submit">
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Form