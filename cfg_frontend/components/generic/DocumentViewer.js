import React from "react";
import dynamic from "next/dynamic";

const DocViewer = dynamic(() => import("react-doc-viewer"), { ssr: false });

let rendererList = [];

typeof window === "object" &&
  import("react-doc-viewer")
    .then((module) => {
      rendererList = module.DocViewerRenderers;
    })
    .catch(() => {});

function DocumentViewer(props) {
  return (
    <div className="py-8">
      <DocViewer
        style={{
          height: props?.fileType?.includes("application") ? "350px" : "auto",
        }}
        pluginRenderers={rendererList}
        documents={[
          {
            uri: "../../public/Resume_Param_Kothari",
            // fileType: ".pdf",
          },
        ]}
        config={{
          header: {
            disableHeader: true,
            disableFileName: true,
            retainURLParams: true,
          },
        }}
      />
    </div>
  );
}

export default React.memo(DocumentViewer);
