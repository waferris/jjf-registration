import { writeToSheet } from "../../utils/writeToSheet"

export default function handler(req, res) {
  if (req.method === "POST") {
    writeToSheet(req.body)
    res.statusCode = 200
    res.json({
      code: 200,
      data: {
        message: "Submission successful",
      },
    })
    console.log(res.statusCode)
  } else {
    res.statusCode = 200
    res.json({
      code: 200,
      data: {
        message: "/api/register",
      },
    })
  }
}