import { Body, Button, Column, Container, Head, Heading, Html, Preview, Row, Section, Tailwind, Text, } from '@react-email/components'
import * as React from 'react'

const ResetPasswordEmail = (props: { customerName: string, resetPasswordLink: string, expirationTime: string }) => {
    const { customerName, resetPasswordLink, expirationTime } = props;

    return (
        <Html>
            <Head />
            <Preview>wolfpackdefence MARKETPLACE: Password reset request for your tactical account</Preview>
            <Tailwind>
                <Body className="bg-[#0D0D0D] font-sans py-[40px]">
                    <Container className="border-[2px] border-solid border-[#556B2F] bg-[#F5F5F5] mx-auto p-[24px] max-w-[600px]">
                        {/* Header */}
                        <Section className="bg-[#0D0D0D] p-[24px] mb-[24px]">
                            <Row>
                                <Column>
                                    <Heading className="text-[28px] font-bold text-[#F5F5F5] m-0 text-center uppercase tracking-[2px]">
                                        PASSWORD RESET
                                    </Heading>
                                    <Text className="text-[16px] text-[#A9A9A9] text-center uppercase tracking-[1px] m-0">
                                        SECURE ACCESS PROTOCOL
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* Alert Banner */}
                        <Section className="mb-[24px] bg-[#8B0000] p-[16px]">
                            <Text className="text-[16px] text-center text-[#F5F5F5] m-0 font-bold uppercase tracking-[1px]">
                                SECURITY ALERT: PASSWORD RESET REQUESTED
                            </Text>
                        </Section>

                        {/* Main reset message */}
                        <Section className="mb-[24px] bg-[#D2B48C] p-[24px]">
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D] uppercase font-bold">
                                OPERATOR: {customerName},
                            </Text>
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                We&apos;ve received a request to reset the password for your wolfpackdefence Marketplace account.
                            </Text>
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                If you initiated this request, use the secure link below to establish a new password and regain access to your tactical operations.
                            </Text>
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D] font-bold">
                                If you did not request this reset, disregard this communication and secure your account immediately by contacting our security team.
                            </Text>
                        </Section>

                        {/* Reset button section */}
                        <Section className="mb-[24px] bg-[#0D0D0D] p-[24px] border-l-[4px] border-solid border-[#556B2F]">
                            <Text className="text-[16px] text-center text-[#F5F5F5] mb-[16px] uppercase">
                                RESET PASSWORD:
                            </Text>
                            <Row>
                                <Column className="text-center">
                                    <Button
                                        href={resetPasswordLink}
                                        className="bg-[#556B2F] text-[#F5F5F5] font-bold py-[16px] px-[32px] text-[16px] no-underline uppercase tracking-[1px] box-border"
                                    >
                                        RESET PASSWORD NOW
                                    </Button>
                                </Column>
                            </Row>
                            <Text className="text-[14px] text-center text-[#A9A9A9] mt-[16px] mb-[8px]">
                                This reset link will expire in {expirationTime} for security purposes.
                            </Text>
                        </Section>

                        {/* Alternative link section */}
                        <Section className="mb-[24px] bg-[#F5F5F5] p-[24px] border-t-[2px] border-solid border-[#A9A9A9]">
                            <Text className="text-[16px] text-center text-[#0D0D0D] mb-[8px] font-bold uppercase">
                                ALTERNATIVE RESET METHOD
                            </Text>
                            <Text className="text-[14px] text-center text-[#0D0D0D] mb-[16px]">
                                If the button above doesn&apos;t work, copy and paste this URL into your browser:
                            </Text>
                            <Text className="text-[14px] text-center text-[#556B2F] mb-[16px] bg-[#E5E5E5] p-[12px] break-all">
                                {resetPasswordLink}
                            </Text>
                        </Section>

                        {/* Tactical divider */}
                        <Section className="h-[4px] bg-[#556B2F] mb-[24px]" />

                        {/* Security guidelines */}
                        <Section className="mb-[24px] bg-[#F5F5F5] p-[24px]">
                            <Text className="text-[16px] text-center text-[#0D0D0D] mb-[16px] font-bold uppercase">
                                PASSWORD SECURITY PROTOCOLS
                            </Text>
                            <Row>
                                <Column>
                                    <Text className="text-[14px] mb-[8px] text-[#0D0D0D]">
                                        • Use a minimum of 12 characters with mixed case, numbers, and symbols
                                    </Text>
                                    <Text className="text-[14px] mb-[8px] text-[#0D0D0D]">
                                        • Never reuse passwords across different platforms
                                    </Text>
                                    <Text className="text-[14px] mb-[8px] text-[#0D0D0D]">
                                        • Consider using a secure password manager for optimal security
                                    </Text>
                                    <Text className="text-[14px] mb-[8px] text-[#0D0D0D]">
                                        • Enable two-factor authentication for additional security
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* Footer */}
                        <Section className="bg-[#0D0D0D] p-[24px]">
                            <Text className="text-[14px] text-[#A9A9A9] text-center m-0">
                                © 2025 wolfpackdefence MARKETPLACE. ALL RIGHTS RESERVED.
                            </Text>
                            <Text className="text-[14px] text-[#A9A9A9] text-center m-0">
                                123 Tactical Way, Operations Center, TC 12345
                            </Text>
                            <Text className="text-[14px] text-[#A9A9A9] text-center m-0">
                                <a href="https://wolfpackdefence-marketplace.com/security" className="text-[#A9A9A9]">
                                    SECURITY CENTER
                                </a> | <a href="https://wolfpackdefence-marketplace.com/contact" className="text-[#A9A9A9]">
                                    REPORT SUSPICIOUS ACTIVITY
                                </a>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

ResetPasswordEmail.PreviewProps = {
    customerName: "RODRIGUEZ",
    resetPasswordLink: "https://wolfpackdefence-marketplace.com/reset-password?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ",
    expirationTime: "1 hour",
};

export default ResetPasswordEmail;