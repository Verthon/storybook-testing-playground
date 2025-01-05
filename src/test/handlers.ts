import { createUserProfileHandler } from "../userProfile/createUserProfileHandler";

const initialUserProfileHandlers = createUserProfileHandler();

export const handlers = [initialUserProfileHandlers];
