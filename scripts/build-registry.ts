import fs from "node:fs";
import path from "node:path";

interface RegistryItemFile {
  path: string;
  type: string;
  content?: string;
  target?: string;
}

interface RegistryItem {
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files: RegistryItemFile[];
  cssVars?: Record<string, Record<string, string>>;
}

interface RegistryManifest {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

const ROOT_DIR = process.cwd();
const REGISTRY_PATH = path.join(ROOT_DIR, "registry.json");
const OUTPUT_DIR = path.join(ROOT_DIR, "public", "r");

async function buildRegistry() {
  console.log("⚡ Building MKL-45 shadcn Registry items...");

  if (!fs.existsSync(REGISTRY_PATH)) {
    throw new Error(`registry.json not found at ${REGISTRY_PATH}`);
  }

  const rawManifest = fs.readFileSync(REGISTRY_PATH, "utf-8");
  const manifest: RegistryManifest = JSON.parse(rawManifest);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const builtItems: RegistryItem[] = [];

  for (const item of manifest.items) {
    console.log(`  -> Bundling item: [${item.type}] ${item.name}`);

    const bundledFiles: RegistryItemFile[] = [];

    for (const file of item.files) {
      const fullFilePath = path.join(ROOT_DIR, file.path);
      if (!fs.existsSync(fullFilePath)) {
        console.warn(`     ⚠️ File not found: ${file.path}`);
        continue;
      }

      const content = fs.readFileSync(fullFilePath, "utf-8");
      bundledFiles.push({
        path: file.path,
        type: file.type,
        content: content,
        target: path.basename(file.path),
      });
    }

    const compiledItem: RegistryItem = {
      ...item,
      files: bundledFiles,
    };

    builtItems.push(compiledItem);

    // Write individual item to public/r/[name].json
    const itemOutputPath = path.join(OUTPUT_DIR, `${item.name}.json`);
    fs.writeFileSync(itemOutputPath, JSON.stringify(compiledItem, null, 2), "utf-8");
  }

  // Also build an index file public/r/registry.json
  const registryIndexPath = path.join(OUTPUT_DIR, "registry.json");
  fs.writeFileSync(
    registryIndexPath,
    JSON.stringify(
      {
        $schema: manifest.$schema,
        name: manifest.name,
        homepage: manifest.homepage,
        items: builtItems,
      },
      null,
      2
    ),
    "utf-8"
  );

  console.log(`\n✅ Registry build complete! Output written to: ${OUTPUT_DIR}`);
  console.log(`   Generated ${builtItems.length} individual items + index registry.json`);
}

buildRegistry().catch((err) => {
  console.error("❌ Registry build failed:", err);
  process.exit(1);
});
