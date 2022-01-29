import { Request, Response, NextFunction } from 'express';

import { AppError } from './AppError';

class ErrorHandler {
  handle(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message,
      });
    }

    return res.status(500).json({
      status: 'error',
      message: `Internal server error ${err.message}`,
    });
  }
}

export default new ErrorHandler();
