class ApiResponse {
    constructor(
        statusCode,  // HTTP status code (e.g., 200, 201, 400, 500)
        data,        // Actual data being sent in the response
        message = "Success" // Default message if none is provided
    ){
        this.statusCode = statusCode;  // Store HTTP status code
        this.data = data;  // Store the response data
        this.message = message;  // Store the response message
        this.success = statusCode < 400;  // Determine success based on status code
    }
}


module.exports = ApiResponse;