import Compare from "./Items/Comparison"
import ConvertingJPEG from "./Items/ConversionJPEG"
import ConvertingPDF from "./Items/ConversionPDF"
import Merging from "./Items/Merging"
import Reduction from "./Items/Reduction"
import Splitting from "./Items/Splitting"

interface FormProps {
    tools: string;
}

const Form: React.FC<FormProps> = ({ tools }) => {
    switch (tools) {
        case "Об'єднання PDF":
            return <Merging />;
        case "Роз'єднання PDF":
            return <Splitting />;
        case "Зменшення PDF":
            return <Reduction />;
        case "Конвертація PDF в JPEG":
            return <ConvertingPDF />;
        case "Конвертація JPEG в PDF":
            return <ConvertingJPEG />;
        case "Порівняння EXEL":
            return  <Compare/>
        default:
            return null;
    }
};

export default Form;