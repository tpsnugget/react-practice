import React, { Component } from "react"

class State extends Component {

   constructor(props) {
      super(props)
      this.state = {
         num: 0,
         name: "Mike"
      }
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick() {
      this.setState((st, p) => {
         if (st.num < 2) {
            return {
               num: st.num + 1,
               name: p.to
            }
         }
         else if(st.num < 4) {
            return {
               num: st.num + 1,
               name: "Shari"
            }
         }
         else {
            return {
               num: st.num + 1,
               name: "Stephen"
            }
         }
      })
   }

   render() {

      const { num, name } = this.state

      return (
         <h1 onMouseEnter={this.handleClick}>My Number is: {num}, and my Name is {name}</h1>
      )
   }

}

export default State