import React, { useContext } from "react";
// @ts-ignore
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import Pdf from "../../assets/resume1.pdf";
import { Overlay } from "../styled";
import { ResumeContext } from "../../contexts";
import { DocWrapper } from "../styled/resume";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

interface ResumeProps {}

const Resume: React.FC<ResumeProps> = ({}) => {
  const { isResume, setIsResume } = useContext(ResumeContext);
  return (
    <>
      {isResume ? (
        <Overlay onClick={() => setIsResume(false)}>
          <DocWrapper>
            <Document file={Pdf} options={options}>
              <Page pageNumber={1} />
            </Document>
          </DocWrapper>
        </Overlay>
      ) : (
        <></>
      )}
    </>
  );
};

export default Resume;
