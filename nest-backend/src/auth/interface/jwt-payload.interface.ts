export interface JWTPayload {
  userId: string;
  email: string;
  username: string;
  profileImagePath: string | null;
}
