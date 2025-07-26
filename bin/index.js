#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { execa } from "execa"; // ✅ fixed import
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = process.cwd();
const templateDir = path.join(__dirname, "../template");

async function init() {
  console.log(chalk.cyan("🚀 Setting up Google Auth Starter Project..."));

  await fs.copy(templateDir, targetDir);

  console.log(chalk.yellow("📦 Installing dependencies..."));
  await execa("npm", ["install"], { cwd: targetDir, stdio: "inherit" });

  console.log(chalk.green("✅ Project setup complete!"));
  console.log(chalk.magentaBright("Made with ❤️ by Rafay"));
}

init();
