import { v2 } from "@govtechsg/open-attestation";

export interface CooTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  institute: string;
  sender: {
    name: string;
  };
}

export const cooTemplateCertificate: CooTemplateCertificate = {
  name: "Certificate of Origin",
  institute: "ICT Authority",
  issuers: [
    {
      name: "Trilok Dabeesing",
      documentStore: "0x00e905DEF4Ad06129A5b2075B52CC71429f4c448",
      identityProof: {
        location: "icta.mu",
        type: v2.IdentityProofType.DNSTxt,
      },
    },
  ],
  sender: {
    name: "ICT Authority",
  },
  $template: {
    name: "COO",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000",
  },
};
