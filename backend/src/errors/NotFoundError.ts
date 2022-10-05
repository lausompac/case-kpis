import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
    constructor(
        message: string = "Not found resource"
    ) {
        super(404, message)
    }
}