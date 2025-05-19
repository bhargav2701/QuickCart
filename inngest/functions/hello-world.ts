import { inngest } from "../../inngest";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    console.log("Hello from Inngest!");
    return { message: "Hello world!" };
  }
);

export const functions = [helloWorld];
