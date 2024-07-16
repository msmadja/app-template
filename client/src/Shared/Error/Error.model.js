import { makeObservable, observable, action } from "mobx"

class ErrorStore { 
  error = '';

  constructor() { 
     makeObservable(this, { 
        error: observable, 
        setError: action, 
     });
  }

  setError(msg) { 
     this.error = msg;
  }
}

const errorStore = new ErrorStore();
export default errorStore;