#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { execa } from "execa";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get project name from CLI args
const [,, projectName] = process.argv;

if (!projectName) {
  console.log(chalk.red("❌ Please provide a project name."));
  console.log(chalk.yellow("Usage: google-auth-starter myapp"));
  process.exit(1);
}

const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(__dirname, "../template");

async function init() {
  console.log(chalk.cyan(`🚀 Setting up Google Auth Starter Project in '${projectName}'...`));

  // Create new folder and copy template
  await fs.copy(templateDir, targetDir);

  // Install dependencies in the new folder
  console.log(chalk.yellow("📦 Installing dependencies..."));
  await execa("npm", ["install"], { cwd: targetDir, stdio: "inherit" });

  console.log(chalk.green("✅ Project setup complete!"));
  console.log(chalk.blue(`👉 To get started:\n   cd ${projectName}\n   npm run dev`));
  console.log(chalk.magentaBright("Made with ❤️ by Rafay"));
}

init();
