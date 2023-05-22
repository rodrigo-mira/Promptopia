import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const {userID, prompt, tag} = await req.json();
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userID,
            prompt,
            tag
        })
        console.log('New prompt ', newPrompt)
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201})

    } catch (error) {
        return new Response('Falied to create a new prompt ', {status: 500})
    }
}