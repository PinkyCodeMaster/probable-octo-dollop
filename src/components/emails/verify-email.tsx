import * as React from 'react';
import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

const VerifyEmail = (props: { customerName: string, customerUsername: string, verificationLink: string, expirationTime: string }) => {
    const { customerName, customerUsername, verificationLink, expirationTime } = props;

    return (
        <Html>
            <Head />
            <Preview>wolfpackdefence MARKETPLACE: Verify your account to begin tactical operations</Preview>
            <Tailwind>
                <Body className="bg-[#0D0D0D] font-sans py-[40px]">
                    <Container className="border-[2px] border-solid border-[#556B2F] bg-[#F5F5F5] mx-auto p-[24px] max-w-[600px]">
                        {/* Header */}
                        <Section className="bg-[#0D0D0D] p-[24px] mb-[24px]">
                            <Row>
                                <Column>
                                    <Heading className="text-[28px] font-bold text-[#F5F5F5] m-0 text-center uppercase tracking-[2px]">
                                        IDENTITY VERIFICATION
                                    </Heading>
                                    <Text className="text-[16px] text-[#A9A9A9] text-center uppercase tracking-[1px] m-0">
                                        GEAR UP. GET TACTICAL. GO wolfpackdefence.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* Main verification message */}
                        <Section className="mb-[24px] bg-[#D2B48C] p-[24px]">
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D] uppercase font-bold">
                                OPERATOR: {customerUsername}
                            </Text>
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                NAME: {customerName}
                            </Text>
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                Your wolfpackdefence Marketplace account requires verification before tactical operations can commence.
                            </Text>
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                Click the secure link below to confirm your identity and activate your account.
                            </Text>
                        </Section>

                        {/* Verification button section */}
                        <Section className="mb-[24px] bg-[#0D0D0D] p-[24px] border-l-[4px] border-solid border-[#556B2F]">
                            <Text className="text-[16px] text-center text-[#F5F5F5] mb-[16px] uppercase">
                                SECURE YOUR POSITION:
                            </Text>
                            <Row>
                                <Column className="text-center">
                                    <Button
                                        href={verificationLink}
                                        className="bg-[#556B2F] text-[#F5F5F5] font-bold py-[16px] px-[32px] text-[16px] no-underline uppercase tracking-[1px] box-border"
                                    >
                                        VERIFY ACCOUNT NOW
                                    </Button>
                                </Column>
                            </Row>
                            <Text className="text-[14px] text-center text-[#A9A9A9] mt-[16px] mb-[8px]">
                                This verification link will expire in {expirationTime}.
                            </Text>
                            <Text className="text-[14px] text-center text-[#A9A9A9] mb-[8px]">
                                If you did not request this verification, secure your position and contact command immediately.
                            </Text>
                        </Section>

                        {/* Alternative link section */}
                        <Section className="mb-[24px] bg-[#F5F5F5] p-[24px] border-t-[2px] border-solid border-[#A9A9A9]">
                            <Text className="text-[16px] text-center text-[#0D0D0D] mb-[8px] font-bold uppercase">
                                ALTERNATIVE VERIFICATION METHOD
                            </Text>
                            <Text className="text-[14px] text-center text-[#0D0D0D] mb-[16px]">
                                If the button above doesn&apos;t work, copy and paste this URL into your browser:
                            </Text>
                            <Text className="text-[14px] text-center text-[#556B2F] mb-[16px] bg-[#E5E5E5] p-[12px] break-all">
                                {verificationLink}
                            </Text>
                        </Section>

                        {/* Tactical divider */}
                        <Section className="h-[4px] bg-[#556B2F] mb-[24px]" />

                        {/* Security notice */}
                        <Section className="mb-[24px] bg-[#F5F5F5] p-[24px]">
                            <Text className="text-[16px] text-center text-[#0D0D0D] mb-[8px] font-bold uppercase">
                                SECURITY PROTOCOL
                            </Text>
                            <Text className="text-[14px] text-center text-[#0D0D0D] mb-[16px]">
                                wolfpackdefence Marketplace will never ask for your password or personal information via email.
                                Always verify communications through official channels.
                            </Text>
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
                                <a href="https://wolfpackdefence-marketplace.com/contact" className="text-[#A9A9A9]">
                                    CONTACT COMMAND
                                </a> | <a href="https://wolfpackdefence-marketplace.com/help" className="text-[#A9A9A9]">
                                    FIELD MANUAL
                                </a>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

VerifyEmail.PreviewProps = {
    customerName: "MARTINEZ",
    verificationLink: "https://wolfpackdefence-marketplace.com/verify?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ",
    expirationTime: "24 hours",
};

export default VerifyEmail;