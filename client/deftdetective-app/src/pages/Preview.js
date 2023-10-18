import { useFormData } from './FormDataContext';

export function Preview() {
    const { formData } = useFormData();

    return (
        <div className="container">
            <h1>Preview</h1>
            <h2>What:</h2>
            <p>Item Name: {formData.whatData.itemName}</p>
            <p>Description: {formData.whatData.description}</p>
            <p>date: {formData.whenData.date}</p>
            <p>timeOption: {formData.whenData.timeOption}</p>
        </div>
    );
}