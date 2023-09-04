
import CommonSection from "../../CommonSection/CommonSection";
import useTitle from "../../Hooks/useTitle";
import Form from "./Form";

export default function Register() {
    useTitle('Register')
    const header = 'Register';
    const title = 'Register';
    const linkUp = 'Register'
    const sectionMarkup = CommonSection(header, title, linkUp);
    return (
        <section>
            {sectionMarkup}
            <div className="my-20 max-w-screen-xl mx-auto">
                <Form />
            </div>
        </section>
    )
}