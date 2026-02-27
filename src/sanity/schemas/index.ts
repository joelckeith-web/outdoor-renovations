import { type SchemaTypeDefinition } from "sanity";
import { servicePage } from "./servicePage";
import { siteSettings } from "./siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [servicePage, siteSettings];
