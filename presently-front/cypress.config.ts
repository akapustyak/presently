import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'fk38gx',
  component: {
    viewportWidth: 700,
    viewportHeight: 500,
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
