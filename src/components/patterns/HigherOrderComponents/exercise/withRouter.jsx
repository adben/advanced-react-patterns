import React from 'react'

/*
 A higher-order component is a function that receives a component as a parameter,
 and returns another component
 */
const withRouter = ( MyComponent ) => {
  console.log( 'sending my compo' )
  const OuterComponent = ( props, context ) => (
    <MyComponent
      { ...props }
      { ...context }
    />
  )

  OuterComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  return OuterComponent
}

export default withRouter
