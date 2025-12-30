import type { User } from "@/entities/user/";
import type { TokensResponse } from "./tokens-response";

export interface AuthenticationResponse {
  tokensPair: TokensResponse;
  user: User;
}
