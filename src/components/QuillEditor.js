import React, { useEffect } from "react";
import Quill from "../../lib/quill/quill";
import "../../lib/quill/assets/snow.styl";

const QuillEditor = () => {
  const editorId =
    "editor" +
    Math.random()
      .toString(16)
      .slice(2);

  useEffect(() => {
    new Quill("#" + editorId, { theme: "snow" });
  }, []);

  return <div id={editorId}></div>;
};

export default QuillEditor;
