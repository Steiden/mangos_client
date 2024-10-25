import { RootState } from "@/shared/store/store";

export const selectActiveUser = (state: RootState) => state.user.currentUser;