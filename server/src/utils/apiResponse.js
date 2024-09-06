export class APIResponse {
  constructor(statusCode, data, message = "Success", errors = []) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode >= 200 && statusCode < 400;
    this.errors = errors;
  }
}

export class APIError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong!",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = null;
    this.stack = !!super.stack ? super.stack?.toString() : stack;

    if (!stack) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
