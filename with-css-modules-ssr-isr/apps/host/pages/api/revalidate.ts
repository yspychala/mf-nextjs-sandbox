import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== "module_federation_is_awesome") {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/");
    console.log("revalidated index page");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
