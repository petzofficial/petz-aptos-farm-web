// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { tokenUrl } = req.query;


    const { data } = await axios.get(tokenUrl as string);

    return res.status(200).send(data);
  } catch (error: any) {
    console.log({ error });
    res.status(400).json({ error });
  }
};

export default handler;
