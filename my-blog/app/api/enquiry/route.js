import connectMongo from "@/utils/connectmongo";
import EnquiryModel from "@/models/enquiryModel";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const enquiry = { name, email, message };
    await connectMongo();
    await EnquiryModel.create(enquiry);
    return Response.json({ message: "Enquiry has been sent successfully!" });
  } catch (error) {
    console.log(error)
    return Response.json({ message: error._message });
  }
}
