export { };
import "express";
declare global {
  namespace Express {
    interface User {
      userId: string;
      role: string;
      token?: string;
    }
    interface Request {
      user?: User;
    }
  }
}