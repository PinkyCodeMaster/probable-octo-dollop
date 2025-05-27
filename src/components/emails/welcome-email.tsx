import * as React from "react";
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
} from "@react-email/components";

const WelcomeEmail = (props: { customerName: string, referralCode: string }) => {
    const { customerName, referralCode } = props;

    return (
        <Html>
            <Head />
            <Preview>WELCOME TO wolfpackdefence MARKETPLACE: Your tactical gear headquarters</Preview>
            <Tailwind>
                <Body className="bg-[#0D0D0D] font-sans py-[40px]">
                    <Container className="border-[2px] border-solid border-[#556B2F] bg-[#F5F5F5] mx-auto p-[24px] max-w-[600px]">
                        {/* Header */}
                        <Section className="bg-[#0D0D0D] p-[24px] mb-[24px]">
                            <Row>
                                <Column>
                                    <Heading className="text-[28px] font-bold text-[#F5F5F5] m-0 text-center uppercase tracking-[2px]">
                                        WELCOME TO wolfpackdefence
                                    </Heading>
                                    <Text className="text-[16px] text-[#A9A9A9] text-center uppercase tracking-[1px] m-0">
                                        GEAR UP. GET TACTICAL. GO wolfpackdefence.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* Main welcome message */}
                        <Section className="mb-[24px] bg-[#D2B48C] p-[24px]">
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D] uppercase font-bold">
                                OPERATOR: {customerName},
                            </Text>
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                Welcome to the wolfpackdefence Marketplace. Your account has been activated and your tactical journey begins now.
                            </Text>
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                You&apos;ve joined a community of hobbyists, competitive players, and milsim enthusiasts who demand the best in airsoft, paintball, and tactical gear.
                            </Text>
                        </Section>

                        {/* What to expect section */}
                        <Section className="mb-[24px] bg-[#F5F5F5] p-[24px] border-l-[4px] border-solid border-[#556B2F]">
                            <Heading className="text-[20px] font-bold text-[#0D0D0D] mb-[16px] uppercase tracking-[1px]">
                                MISSION BRIEFING:
                            </Heading>
                            <Row className="mb-[16px]">
                                <Column>
                                    <Text className="text-[16px] mb-[8px] text-[#0D0D0D] font-bold uppercase">
                                        01. PREMIUM GEAR
                                    </Text>
                                    <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                        Access to quality-verified tactical equipment from trusted operators.
                                    </Text>
                                </Column>
                            </Row>
                            <Row className="mb-[16px]">
                                <Column>
                                    <Text className="text-[16px] mb-[8px] text-[#0D0D0D] font-bold uppercase">
                                        02. COMMUNITY INTEL
                                    </Text>
                                    <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                        Exclusive updates on new gear drops and tactical opportunities.
                                    </Text>
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <Text className="text-[16px] mb-[8px] text-[#0D0D0D] font-bold uppercase">
                                        03. FIELD SUPPORT
                                    </Text>
                                    <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                        Our team has your six with responsive customer service.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* Tactical divider */}
                        <Section className="h-[4px] bg-[#556B2F] mb-[24px]" />

                        {/* Referral code section */}
                        <Section className="mb-[24px] bg-[#0D0D0D] p-[24px]">
                            <Heading className="text-[20px] font-bold text-center text-[#F5F5F5] mb-[16px] uppercase tracking-[1px]">
                                RECRUIT YOUR SQUAD
                            </Heading>
                            <Text className="text-[16px] text-center text-[#F5F5F5] mb-[8px]">
                                Share your personal referral code with your team:
                            </Text>
                            <Text className="text-[20px] text-center text-[#D2B48C] mb-[16px] font-bold tracking-[2px]">
                                {referralCode}
                            </Text>
                            <Text className="text-[16px] text-center text-[#F5F5F5] mb-[16px]">
                                Both you and your recruit will receive 10% off your next purchase.
                            </Text>
                        </Section>

                        {/* CTA Button */}
                        <Section className="mb-[32px] text-center">
                            <Button
                                href="https://wolfpackdefence-marketplace.com/browse"
                                className="bg-[#556B2F] text-[#F5F5F5] font-bold py-[16px] px-[32px] text-[16px] no-underline uppercase tracking-[1px] box-border"
                            >
                                BEGIN OPERATIONS
                            </Button>
                        </Section>

                        {/* Social proof */}
                        <Section className="mb-[24px] bg-[#F5F5F5] p-[24px] border-t-[2px] border-solid border-[#A9A9A9]">
                            <Text className="text-[16px] text-center text-[#0D0D0D] mb-[8px] font-bold uppercase">
                                JOIN THE RANKS
                            </Text>
                            <Text className="text-[16px] text-center text-[#0D0D0D] mb-[16px]">
                                Follow us on social media for tactical tips, gear reviews, and community highlights.
                            </Text>
                            <Row>
                                <Column className="text-center">
                                    <Text className="text-[14px] text-[#556B2F] font-bold uppercase">
                                        @wolfpackdefence_TACTICAL
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
                                <a href="https://wolfpackdefence-marketplace.com/unsubscribe" className="text-[#A9A9A9]">
                                    UNSUBSCRIBE
                                </a>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

WelcomeEmail.PreviewProps = {
    customerName: "RODRIGUEZ",
    referralCode: "wolfpackdefence-TF25-9X7",
};

export default WelcomeEmail;