import { createHash } from "node:crypto";

export const assignToBucket = (str: string, buckets: number) => {
	const hash = createHash("sha256").update(str).digest("hex");
	const bucket = parseInt(hash.slice(0, 8), 16) % buckets;
	return bucket;
};
