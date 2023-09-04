
import CommonSection from "../../CommonSection/CommonSection";
import useTitle from "../../Hooks/useTitle";
import Form from "./Form";

export default function SignIn() {
    useTitle('Sign In')
    const header = 'Log In';
    const title = 'Login';
    const linkUp = 'Login'
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