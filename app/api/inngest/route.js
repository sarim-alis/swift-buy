import { serve } from 'inngest/next';
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from '@/config/inngest.js';

// Api serving zero functions.
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ],
});