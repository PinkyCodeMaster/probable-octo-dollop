import { Body, Column, Container, Head, Heading, Html, Preview, Row, Section, Tailwind, Text, } from "@react-email/components";
import * as React from "react";

const PasswordChangedEmail = (props: { customerName: string, changeTime: string, deviceInfo: string, ipAddress: string, location: string }) => {
  const { customerName, changeTime, deviceInfo, ipAddress, location } = props;

  return (
    <Html>
      <Head />
      <Preview>wolfpackdefence MARKETPLACE: Password successfully changed - Security confirmation</Preview>
      <Tailwind>
        <Body className="bg-[#0D0D0D] font-sans py-[40px]">
          <Container className="border-[2px] border-solid border-[#556B2F] bg-[#F5F5F5] mx-auto p-[24px] max-w-[600px]">
            {/* Header */}
            <Section className="bg-[#0D0D0D] p-[24px] mb-[24px]">
              <Row>
                <Column>
                  <Heading className="text-[28px] font-bold text-[#F5F5F5] m-0 text-center uppercase tracking-[2px]">
                    PASSWORD CHANGED
                  </Heading>
                  <Text className="text-[16px] text-[#A9A9A9] text-center uppercase tracking-[1px] m-0">
                    SECURITY CONFIRMATION
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Success Banner */}
            <Section className="mb-[24px] bg-[#556B2F] p-[16px]">
              <Text className="text-[16px] text-center text-[#F5F5F5] m-0 font-bold uppercase tracking-[1px]">
                MISSION ACCOMPLISHED: PASSWORD SUCCESSFULLY UPDATED
              </Text>
            </Section>

            {/* Main confirmation message */}
            <Section className="mb-[24px] bg-[#D2B48C] p-[24px]">
              <Text className="text-[16px] mb-[16px] text-[#0D0D0D] uppercase font-bold">
                OPERATOR: {customerName},
              </Text>
              <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                This is a confirmation that your wolfpackdefence Marketplace account password has been successfully changed.
              </Text>
              <Text className="text-[16px] mb-[16px] text-[#0D0D0D]">
                Your tactical account is now secured with your new credentials. No further action is required.
              </Text>
            </Section>

            {/* Security details section */}
            <Section className="mb-[24px] bg-[#0D0D0D] p-[24px] border-l-[4px] border-solid border-[#556B2F]">
              <Text className="text-[16px] text-center text-[#F5F5F5] mb-[16px] uppercase font-bold">
                OPERATION DETAILS:
              </Text>
              <Row>
                <Column>
                  <Text className="text-[14px] mb-[8px] text-[#A9A9A9]">
                    <span className="text-[#F5F5F5] font-bold">TIMESTAMP:</span> {changeTime}
                  </Text>
                  <Text className="text-[14px] mb-[8px] text-[#A9A9A9]">
                    <span className="text-[#F5F5F5] font-bold">DEVICE:</span> {deviceInfo}
                  </Text>
                  <Text className="text-[14px] mb-[8px] text-[#A9A9A9]">
                    <span className="text-[#F5F5F5] font-bold">IP ADDRESS:</span> {ipAddress}
                  </Text>
                  <Text className="text-[14px] mb-[8px] text-[#A9A9A9]">
                    <span className="text-[#F5F5F5] font-bold">LOCATION:</span> {location}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Warning section */}
            <Section className="mb-[24px] bg-[#8B0000] p-[24px]">
              <Text className="text-[16px] text-center text-[#F5F5F5] mb-[16px] font-bold uppercase">
                UNAUTHORIZED ACCESS ALERT
              </Text>
              <Text className="text-[14px] text-center text-[#F5F5F5] mb-[16px]">
                If you did not change your password, your account may be compromised.
                Take immediate action by contacting our security team and changing your password again.
              </Text>
            </Section>

            {/* Tactical divider */}
            <Section className="h-[4px] bg-[#556B2F] mb-[24px]" />

            {/* Additional security tips */}
            <Section className="mb-[24px] bg-[#F5F5F5] p-[24px] border-t-[2px] border-solid border-[#A9A9A9]">
              <Text className="text-[16px] text-center text-[#0D0D0D] mb-[16px] font-bold uppercase">
                MAINTAIN TACTICAL SECURITY
              </Text>
              <Row>
                <Column>
                  <Text className="text-[14px] mb-[8px] text-[#0D0D0D]">
                    • Review your recent account activity for any suspicious operations
                  </Text>
                  <Text className="text-[14px] mb-[8px] text-[#0D0D0D]">
                    • Enable two-factor authentication for maximum security clearance
                  </Text>
                  <Text className="text-[14px] mb-[8px] text-[#0D0D0D]">
                    • Update passwords on other platforms if you&apos;ve used similar credentials
                  </Text>
                  <Text className="text-[14px] mb-[8px] text-[#0D0D0D]">
                    • Log out of all sessions when accessing from shared devices
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
                <a href="https://wolfpackdefence-marketplace.com/account/security" className="text-[#A9A9A9]">
                  SECURITY SETTINGS
                </a> | <a href="https://wolfpackdefence-marketplace.com/support" className="text-[#A9A9A9]">
                  CONTACT SUPPORT
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PasswordChangedEmail.PreviewProps = {
  customerName: "JACKSON",
  changeTime: "May 26, 2025 at 08:21 UTC",
  deviceInfo: "Windows 11 - Chrome 112.0.5615.138",
  ipAddress: "192.168.1.XXX (partially masked for security)",
  location: "Salisbury, United Kingdom",
};

export default PasswordChangedEmail;