import { nx_monorepo } from "aws-prototyping-sdk";
const authorName = "Wspieram Przyrodę";
const authorEmail = "team@wspieramprzyrode.pl";
const repository = "https://github.com/wspieramprzyrode/apps";
const project = new nx_monorepo.NxMonorepoProject({
  defaultReleaseBranch: "main",
  devDeps: ["aws-prototyping-sdk", "aws-organization-formation"],
  name: "wspieram-przyrode",
  authorName: authorName,
  authorEmail: authorEmail,
  authorOrganization: true,
  repository: repository,
  vscode: true,
  github: true,
});
project.addGitIgnore(".envrc");
project.synth();
