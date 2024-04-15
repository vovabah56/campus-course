import DOMPurify from "dompurify";



const TextBlock = ( text ) => {
    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html),
        };
    };

    return <div dangerouslySetInnerHTML={createMarkup(text)}></div>;
};

export default TextBlock;
