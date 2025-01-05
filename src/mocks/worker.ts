import { setupWorker } from "msw/browser";

import { createUserProfileHandler } from "../userProfile/createUserProfileHandler";

const handlers = [createUserProfileHandler()];

export const worker = setupWorker(...handlers);
