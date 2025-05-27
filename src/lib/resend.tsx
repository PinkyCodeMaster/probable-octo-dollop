import PasswordChangedEmail from "@/components/emails/password-changed";
import ResetPasswordEmail from "@/components/emails/reset-password";
import AbandonedCartEmail from "@/components/emails/abandoned-cart";
import WelcomeEmail from "@/components/emails/welcome-email";
import VerifyEmail from "@/components/emails/verify-email";
import { render } from "@react-email/render";
import { Resend } from "resend";
import React from "react";

// Define the available templates
export enum EmailTemplates {
    WELCOME = "welcome",
    ABANDONED_CART = "abandoned-cart",
    VERIFY_EMAIL = "verify-email",
    RESET_PASSWORD = "reset-password",
    PASSWORD_CHANGED = "password-changed",
}

// Define props per template
interface WelcomeEmailProps {
    customerName: string;
    referralCode: string;
}

interface VerifyEmailProps {
    customerName: string;
    verificationLink: string;
    expirationTime: string;
}

interface ResetPasswordEmailProps {
    customerName: string;
    resetPasswordLink: string;
    expirationTime: string;
}

interface PasswordChangedEmailProps {
    customerName: string;
    changeTime: string;
    deviceInfo: string;
    ipAddress: string;
    location: string;
}
interface AbandonedCartEmailProps {
    customerName: string;
    productName: string;
    productPrice: string;
    productCondition: string;
    discountCode: string;
}

// Template-specific props
type TemplatePropsMap = {
    [EmailTemplates.WELCOME]: WelcomeEmailProps;
    [EmailTemplates.ABANDONED_CART]: AbandonedCartEmailProps;
    [EmailTemplates.VERIFY_EMAIL]: VerifyEmailProps;
    [EmailTemplates.RESET_PASSWORD]: ResetPasswordEmailProps;
    [EmailTemplates.PASSWORD_CHANGED]: PasswordChangedEmailProps;
};

// Structure to map templates to components + subject
type TemplateEntry<T> = {
    component: React.ComponentType<T>;
    subject: string;
};

const TEMPLATE_MAP: {
    [K in keyof TemplatePropsMap]: TemplateEntry<TemplatePropsMap[K]>;
} = {
    [EmailTemplates.WELCOME]: {
        component: WelcomeEmail,
        subject: "Welcome to our platform!",
    },
    [EmailTemplates.ABANDONED_CART]: {
        component: AbandonedCartEmail,
        subject: "Your cart is waiting for you!",
    },
    [EmailTemplates.VERIFY_EMAIL]: {
        component: VerifyEmail,
        subject: "Verify your email address",
    },
    [EmailTemplates.RESET_PASSWORD]: {
        component: ResetPasswordEmail,
        subject: "Reset your password",
    },
    [EmailTemplates.PASSWORD_CHANGED]: {
        component: PasswordChangedEmail,
        subject: "Password changed",
    },
};

type SendEmailArgs<T extends keyof TemplatePropsMap> = {
    to: string;
    template: T;
    data: TemplatePropsMap[T];
};

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail<T extends keyof TemplatePropsMap>({ to, template, data, }: SendEmailArgs<T>) {

    const { component: TemplateComponent, subject } = TEMPLATE_MAP[template];

    const emailHtml = await render(<TemplateComponent {...data} />);

    const { error, data: result } = await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to,
        subject,
        html: emailHtml,
    });

    if (error) {
        console.error("Failed to send email:", error);
        return null;
    }

    return result;
}
