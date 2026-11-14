import fs from "node:fs";
import path from "node:path";

const ROOT_DIR = process.cwd();
const REGISTRY_PATH = path.join(ROOT_DIR, "registry.json");
const PUBLIC_R_DIR = path.join(ROOT_DIR, "public", "r");

async function validateRegistry() {
  console.log("🔍 Validating MKL-45 Registry definition and built artifacts...");

  if (!fs.existsSync(REGISTRY_PATH)) {
    throw new Error(`registry.json is missing at ${REGISTRY_PATH}`);
  }

  const manifest = JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf-8"));

  if (!manifest.name || manifest.name !== "mkl45") {
    throw new Error(`Manifest name should be 'mkl45', got '${manifest.name}'`);
  }

  if (!Array.isArray(manifest.items) || manifest.items.length === 0) {
    throw new Error("Manifest items array is empty or invalid.");
  }

  console.log(`  Found ${manifest.items.length} registry items to validate.`);

  let errors = 0;

  for (const item of manifest.items) {
    if (!item.name) {
      console.error("  ❌ Item missing 'name'");
      errors++;
      continue;
    }
    if (!item.type) {
      console.error(`  ❌ Item '${item.name}' missing 'type'`);
      errors++;
    }
    if (!Array.isArray(item.files) || item.files.length === 0) {
      console.error(`  ❌ Item '${item.name}' has no files declared`);
      errors++;
    } else {
      for (const file of item.files) {
        const fullPath = path.join(ROOT_DIR, file.path);
        if (!fs.existsSync(fullPath)) {
          console.error(`  ❌ Item '${item.name}' file does not exist: ${file.path}`);
          errors++;
        }
      }
    }

    // Verify built item exists in public/r
    const builtItemPath = path.join(PUBLIC_R_DIR, `${item.name}.json`);
    if (!fs.existsSync(builtItemPath)) {
      console.error(`  ❌ Built JSON missing in public/r: ${item.name}.json (run registry:build first)`);
      errors++;
    } else {
      const builtData = JSON.parse(fs.readFileSync(builtItemPath, "utf-8"));
      for (const bf of builtData.files || []) {
        if (!bf.content || bf.content.trim().length === 0) {
          console.error(`  ❌ Built file for '${item.name}' (${bf.path}) has empty content!`);
          errors++;
        }
      }
    }
  }

  const registryIndex = path.join(PUBLIC_R_DIR, "registry.json");
  if (!fs.existsSync(registryIndex)) {
    console.error("  ❌ Missing public/r/registry.json index file!");
    errors++;
  }

  if (errors > 0) {
    console.error(`\n❌ Registry validation failed with ${errors} error(s)!`);
    process.exit(1);
  }

  console.log("\n✅ Registry validation PASSED! All items, files, and outputs are fully intact.");
}

validateRegistry().catch((err) => {
  console.error("Validation error:", err);
  process.exit(1);
});
