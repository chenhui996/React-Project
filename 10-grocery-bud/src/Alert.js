import React, { useEffect } from 'react'

const Alert = (props) => {
  // console.log(props);
  const { type, msg, removeAlert, list } = props;
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
      return () => {
        clearTimeout(timeout);
      }
    }, 3000);
  }, [list]);
return (<p className={`alert alert-${type}`}>{msg}</p>)
}

export default Alert
