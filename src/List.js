import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./styles.css";

class List extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <ListPoster poster={this.props.poster} />
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

class ListPoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <img src={this.props.poster} />
    )
  }
}

// function ListPoster({ poster }) {
//   return (
//     <img src={poster} alt="List Poster" />
//   )
// }

// function List({ name, poster, profile }) {
//   return (
//     <div className="List">
//       <div className="List__Columns">
//         {/* <ListPoster poster={poster} /> */}
//       </div>
//       <div className="List__Column">
//         <h1>{name}</h1>
//         <div className="List__Profile">
//           <p>{profile}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// function ListPoster({ poster, alt }) {
//   return (
//     <img src={poster} alt={alt} title={alt} className="List__Poster" />
//   )
// }

// function ListProfile({ profile }) {
//   return (
//     <span className="List__Profile">{profile}</span>
//   )
// }
// const produce = ["김우석", "이진혁", "김요한", "송형준", "구정모", "이은상", "남도현", "이진우", "한승우", "김민규", "손동표", "송유빈", "차준호", "함원진", "이한결", "최병찬", "조승연"];
// export const List = ({ show }) =>
//   produce.map(produce => (
//     <li key={produce} className={show ? "show" : "hide"}>
//       {produce}
//     </li>
//   ));

export default List;