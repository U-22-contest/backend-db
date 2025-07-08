export class CreateUserDto {
  username: string;
  email: string;
  password: string;
}

export type CreateUserResponse = {
  message: string;
  user: {
    id: string,
    username: string,
    email: string,
  };
};