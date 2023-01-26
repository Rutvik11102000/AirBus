import React, { Component } from 'react';

class Confirm extends Component {
  render() {
    return (
      <div>
        <h2>
          Success
          <br />
          <h3>Your flight from DEL-LHR Booked{this.props.val}</h3>
        </h2>

        <footer class="row footer d-flex justify-content-center">
          copyright 2021 myflight
        </footer>
      </div>
    );
  }
}
export default Confirm;
