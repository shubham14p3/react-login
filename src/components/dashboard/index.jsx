import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeData } from '../../action';

class Dashboard extends Component {
  componentDidMount() {
    this.props.employeeData();
  }

  renderTableData() {
    const { employee } = this.props.employee;

    for (const [key, value] of Object.entries(employee)) {
      return value.map((emp) => (
          <tr key={emp.id}>
            <td><img src={emp.profile}></img></td>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.age}</td>
            <td>{emp.gender}</td>
            <td>{emp.phoneNo}</td>
          </tr>
      ));
    }
  }

  render() {
    console.log(this.props.employee);
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5000ca"
            fill-opacity="1"
            d="M0,256L18.5,261.3C36.9,267,74,277,111,234.7C147.7,192,185,96,222,80C258.5,64,295,128,332,138.7C369.2,149,406,107,443,85.3C480,64,517,64,554,85.3C590.8,107,628,149,665,154.7C701.5,160,738,128,775,101.3C812.3,75,849,53,886,80C923.1,107,960,181,997,218.7C1033.8,256,1071,256,1108,240C1144.6,224,1182,192,1218,154.7C1255.4,117,1292,75,1329,64C1366.2,53,1403,75,1422,85.3L1440,96L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
          ></path>
        </svg>

        <div className="table-div">
          <h1 id="title">Dummy Data</h1>
          <table id="emp">
            <thead>
              <tr>
                <th>PROFILE</th>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>PHNO</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  employee: state.employee,
});

export default connect(mapStateToProps, { employeeData })(Dashboard);
