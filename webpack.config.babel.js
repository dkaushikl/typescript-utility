import { join } from "path";

const context = join(__dirname, "src");

export default {
  context,
  entry: "./index",
  mode: 'none',
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "starWarsNames",
  },
  devtool: "source-map",
};
