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

const AbandonedCartEmail = (props: { customerName: string, productName: string, productPrice: string, productCondition: string, discountCode: string }) => {
    const { customerName, productName, productPrice, productCondition, discountCode } = props;

    return (
        <Html>
            <Head />
            <Preview>MISSION INCOMPLETE: Your tactical gear awaits. Return to secure your loadout.</Preview>
            <Tailwind>
                <Body className="bg-[#0D0D0D] font-sans py-[40px]">
                    <Container className="border-[2px] border-solid border-[#556B2F] bg-[#F5F5F5] mx-auto p-[24px] max-w-[600px]">
                        {/* Header */}
                        <Section className="bg-[#0D0D0D] p-[24px] mb-[24px]">
                            <Row>
                                <Column>
                                    <Heading className="text-[28px] font-bold text-[#F5F5F5] m-0 text-center uppercase tracking-[2px]">
                                        MISSION INCOMPLETE
                                    </Heading>
                                    <Text className="text-[16px] text-[#A9A9A9] text-center uppercase tracking-[1px] m-0">
                                        GEAR UP. GET TACTICAL. GO wolfpackdefence.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* Main content */}
                        <Section className="mb-[24px] bg-[#D2B48C] p-[24px]">
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D] uppercase font-bold">
                                OPERATOR: {customerName},
                            </Text>
                            <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                Intelligence reports indicate you&apos;ve left tactical equipment in your loadout.
                                Your gear has been secured and is awaiting extraction.
                            </Text>
                        </Section>

                        {/* Product details with tactical styling */}
                        <Section className="mb-[24px] bg-[#F5F5F5] p-[24px] border-l-[4px] border-solid border-[#556B2F]">
                            <Row>
                                <Column>
                                    <Heading className="text-[20px] font-bold text-[#0D0D0D] mb-[16px] uppercase tracking-[1px]">
                                        EQUIPMENT DETAILS:
                                    </Heading>
                                    <Text className="text-[16px] font-bold mb-[8px] text-[#0D0D0D] uppercase">
                                        {productName}
                                    </Text>
                                    <Text className="text-[16px] mb-[8px] text-[#0D0D0D]">
                                        <span className="font-bold">PRICE:</span> ${productPrice}
                                    </Text>
                                    <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                                        <span className="font-bold">CONDITION:</span> {productCondition}
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        {/* Tactical divider */}
                        <Section className="h-[4px] bg-[#556B2F] mb-[24px]" />

                        {/* Special offer */}
                        <Section className="mb-[24px] bg-[#0D0D0D] p-[24px]">
                            <Heading className="text-[20px] font-bold text-center text-[#F5F5F5] mb-[16px] uppercase tracking-[1px]">
                                TACTICAL ADVANTAGE
                            </Heading>
                            <Text className="text-[16px] text-center text-[#F5F5F5] mb-[8px] uppercase">
                                USE CODE: <span className="font-bold">{discountCode}</span>
                            </Text>
                            <Text className="text-[16px] text-center text-[#F5F5F5] mb-[16px]">
                                For FREE SHIPPING on your order. Valid for 48 hours.
                            </Text>
                        </Section>

                        {/* CTA Button */}
                        <Section className="mb-[32px] text-center">
                            <Button
                                href="https://wolfpackdefence-marketplace.com/cart"
                                className="bg-[#556B2F] text-[#F5F5F5] font-bold py-[16px] px-[32px] text-[16px] no-underline uppercase tracking-[1px] box-border"
                            >
                                SECURE YOUR GEAR
                            </Button>
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

AbandonedCartEmail.PreviewProps = {
    customerName: "JOHNSON",
    productName: "TACTICAL PLATE CARRIER MK3",
    productPrice: "149.99",
    productCondition: "NEW",
    discountCode: "wolfpackdefence48",
};

export default AbandonedCartEmail;