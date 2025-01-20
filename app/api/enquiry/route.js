import connectMongoDB from "../../../utils/connectMongo";
import EnquiryModel from "../../../models/enquiryModel";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const enquiry = { name, email, message };
    await connectMongoDB();
    await EnquiryModel.create(enquiry);
    return Response.json({ message: "Enquiry sent successfully" });
  } catch (error) {
    return Response.json({ message: error._message });
  }
}
