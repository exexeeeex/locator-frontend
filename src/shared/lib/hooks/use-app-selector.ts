import { type TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../api/store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
