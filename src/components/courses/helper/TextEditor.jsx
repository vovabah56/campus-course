import { Editor } from "@tinymce/tinymce-react";

const plugins = [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "code",
    "wordcount",
    "help",
];

const API_KEY = "5xseznzfpmp62othl0rzgmxyk726vaiki19olt3tyuajbukw";

const toolbar =
    "undo redo | blocks | " +
    "bold italic forecolor backcolor blockquote | alignleft aligncenter " +
    "alignright alignjustify | link image media | bullist numlist outdent indent | " +
    "removeformat";

const TextEditor = ({ handleChange, value }) => {

    return (
        <Editor
            apiKey={API_KEY}
            onChange={(e) => handleChange(e.target.getContent())}
            initialValue={value}
            init={{
                height: 200,
                menubar: true,
                branding: false,
                plugins: plugins,
                toolbar: toolbar,
            }}
        />
    );
};

export default TextEditor;
