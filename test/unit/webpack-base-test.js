const { assert } = require("chai");
const path = require("path");

// 当前项目工作目录路径
const rootProject = process.cwd();
describe("webpack.base.js文件测试用例", () => {
  const baseConfig = require(path.resolve(rootProject, "./config/webpack.base"));
  it("entry测试", () => {
    assert.ok(
      baseConfig.entry.includes("src/main.ts"),
      "entry不正确",
    );
  });
});
