import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CooTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;

export const CooTemplate: FunctionComponent<TemplateProps<CooTemplateCertificate> & { className?: string }> = ({
  document,
  className = "",
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1>{document.name}</h1>
      <div>issued by</div>
      <h2>{document.institute}</h2>
    </div>
  );
};
