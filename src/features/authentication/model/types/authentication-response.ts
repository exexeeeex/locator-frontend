import type { User } from "@/entities/user/models";
import type { TokensResponse } from "./tokens-response";

export interface AuthenticationResponse {
  tokensPair: TokensResponse;
  user: User;
}
