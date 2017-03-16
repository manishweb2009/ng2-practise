export interface formInterface {
  fname: string;
  lname: string;
  email: string;
  message: string;
  address?: {
    street?: string;
    postcode?: string;
  }
}