import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, username } from "better-auth/plugins";
import { EmailTemplates, sendEmail } from "./resend";
import { nextCookies } from "better-auth/next-js";
import { betterAuth } from "better-auth";
import { db } from "@/db";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url }) => {
            await sendEmail({
                to: user.email,
                template: EmailTemplates.RESET_PASSWORD,
                data: {
                    customerName: user.name,
                    resetPasswordLink: url,
                    expirationTime: new Date(Date.now() + 1000 * 60 * 60 * 24).toLocaleString()
                }
            })
        }
    },
    emailVerification: {
        sendOnSignUp: true,
        sendVerificationEmail: async ({ user, url }) => {
            await sendEmail({
                to: user.email,
                template: EmailTemplates.VERIFY_EMAIL,
                data: {
                    customerName: user.name,
                    // @ts-expect-error - username is not typed
                    customerUsername: user.username,
                    verificationLink: url,
                    expirationTime: new Date(Date.now() + 1000 * 60 * 60 * 24).toLocaleString()
                }
            })
        }
    },
    plugins: [
        nextCookies(),
        username({
            minUsernameLength: 5,
            maxUsernameLength: 20,
        }),
        admin({
            adminUserIds: [],
            defaultBanExpiresIn: 60 * 60 * 24,
        })
    ]
});