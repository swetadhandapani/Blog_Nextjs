import connectMongo from "../../../../utils/connectMongo";
import PostModel from "../../../../models/postModel";

export async function GET(req, { params }) {
  // Await the params object before accessing its properties
  const { id } = await params;

  if (!id) {
    return new Response(JSON.stringify({ message: "Post ID is required" }), {
      status: 400,
    });
  }

  try {
    await connectMongo();  // Connect to MongoDB
    const postData = await PostModel.findOne({ _id: id });

    if (!postData) {
      return new Response(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(postData), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching post data", error }),
      { status: 500 }
    );
  }
}
