import { serve } from "inngest/next";
import { inngest } from "./inngest";
import { functions } from "../../inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions,
});
