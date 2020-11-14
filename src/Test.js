import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./styles.css";

class Test extends Component {
  render() {
    return (
      <div>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Export XLS"
        />
        <table id="table-to-xls">
          <tr>
            <th>Mentee</th>
            <th>Mentor</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Name Name</td>
            <td>Name Name</td>
            <td>Matched</td>
          </tr>
          <tr>
            <td>Name Name</td>
            <td>Name Name</td>
            <td>Pending</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Test;
