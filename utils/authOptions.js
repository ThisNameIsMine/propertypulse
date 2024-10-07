import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization:{
                params:{
                    access_type: 'offline',
                    prompt: 'consent',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks:{
        async signIn({profile}){
            // 1. Connect to database
            // 2. Check if user exists
            // 3. If not, then add user to database
            // 4. Return true to sign in user
        },
        async session({session}){
            // 1. Get user from database
            // 2. Assign user to session
            // 3. Return session

        }

    }
};