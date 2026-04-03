import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Certificates", "RESPONSIVE WEB DESIGN CERTIFICATE.pdf");
  const pdf = await readFile(filePath);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Responsive Web Design Certificate.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}
