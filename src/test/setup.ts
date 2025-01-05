import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";

import { handlers } from "./handlers";

export const testServer = setupServer(...handlers);

beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
