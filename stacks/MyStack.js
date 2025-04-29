import { StackContext, Function } from "sst/constructs";

export function MyStack({ stack }) {
  new Function(stack, "MyFunction", {
    handler: "src/lambda.handler",
  });
}
