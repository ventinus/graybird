// import React, {PureComponent} from 'react'

// export default class Form extends PureComponent {
//   constructor(props) {
//     super(props)
//     this.state = props.data || {}
//     this._inputs = this._getChildInputs(props.children)
//   }

//   render() {
//     console.log(this.props.children)
//     return (
//       <form className="form" onSubmit={this.props.onSubmit}>
//         <div className="col-md-12">
//           <div className="panel panel-default">
//             <h4 className="panel-heading">{this.props.heading}</h4>
//             {this.props.children}
//           </div>
//         </div>
//       </form>
//     )
//   }

//   isInputComponent
//   _getChildInputs = (children, acc = []) => {
//     const {inputs, rest} = children.reduce((a, c) => {
//       const {props: {isInputComponent}} = c
//       return {
//         inputs: isInputComponent ? [...a.inputs, c] : a.inputs,
//         rest: !isInputComponent ? [...a.rest, c] : a.rest
//       }
//     }, {inputs: [], rest: []})
//     console.log(inputs, rest)
//     debugger
//   }
// }
