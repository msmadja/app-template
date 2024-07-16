import { observer } from "mobx-react";
import errorsService from "./Error.service";
import { useEffect } from "react";

const Error = observer(() => {
  const { error$, clearError } = errorsService;

  useEffect(() => {
    if (error$) {
      const timer = setTimeout(() => {
        clearError();
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [error$, clearError]);

  return (
    error$ ? <div style={{backgroundColor: 'pink', height: '40x', width: 'auto'}} >
        <span className="error-message">
          <p>ERROR: {error$} <button onClick={clearError}>X</button></p>
        </span>
    </div> : null
  )
});

export default Error;
