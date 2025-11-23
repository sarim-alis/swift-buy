import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const authSeller = async (userId) => {
    try {

        // Allow all users to access seller features (for demo purposes)
        return true;

        // Original role check (commented out for demo)
        // const client = await clerkClient()
        // const user = await client.users.getUser(userId)
        //
        // if (user.publicMetadata.role === 'seller') {
        //     return true;
        // } else {
        //     return false;
        // }
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}

export default authSeller;