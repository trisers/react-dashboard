import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

export default function RichText({ content, setContent, placeholder }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: [
          "undo",
          "redo",
          "|",
          "heading",
          "|",
          "bold",
          "italic",
          "|",
          "link",
          "insertTable",
          "mediaEmbed",
          "|",
          "bulletedList",
          "numberedList",
          "indent",
          "outdent",
        ],
        plugins: [
          Bold,
          Essentials,
          Heading,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          MediaEmbed,
          Paragraph,
          Table,
          Undo,
        ],
        placeholder: placeholder, 
      }}
      data={content}
      onChange={(event, editor) => {
        const data = editor.getData();
        setContent(data);
      }}
      style={{ height: "400px" }}
    />
  );
}
