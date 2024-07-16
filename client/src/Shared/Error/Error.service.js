import errorStore from "./Error.model";

class ErrorService {

get error$() { 
     return errorStore.error;
}

setError(msg) { 
    errorStore.setError(msg);
}

clearError() { 
    errorStore.setError("");
}

}

const errorsService = new ErrorService();
export default errorsService;