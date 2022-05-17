import React from 'react'

function Alert(props) {

  const capetlize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }



  return (
   props.Alert && <div>
        <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capetlize(props.Alert.type)}</strong> : {props.Alert.message}
        </div>
    </div>
  )
}

export default Alert