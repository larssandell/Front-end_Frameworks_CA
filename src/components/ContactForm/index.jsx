import { useForm } from 'react-hook-form';

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className="contact__form">
            <form
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}
            >
                <label htmlFor="fullName">Full Name:</label>
                <input
                    {...register('fullName', {
                        required: 'Required',
                        minLength: {
                            value: 3,
                            message: 'Min length is 3',
                        },
                    })}
                    placeholder="Full name"
                />
                <p className="contact__error">{errors.fullName?.message}</p>
                <label htmlFor="email">Email:</label>
                <input
                    {...register('email', {
                        required: 'Required',
                        pattern: {
                            value: /^([a-zA-Z0-9-_\.]+)@([a-z-?]+)\.([a-z]{2,6})(\.[a-z]{2,4})?/g,
                            message: 'Must be a valid e-mail',
                        },
                    })}
                    placeholder="email@email.com"
                />
                <p className="contact__error">{errors.email?.message}</p>
                <label htmlFor="Subject ">Subject :</label>
                <input
                    {...register('Subject ', {
                        required: 'Required',
                        minLength: {
                            value: 3,
                            message: 'Min length is 3',
                        },
                    })}
                    placeholder="Subject"
                />
                <p className="contact__error">{errors.title?.message}</p>
                <label htmlFor="description">Description:</label>
                <textarea
                    {...register('description', {
                        required: 'Required',
                        minLength: {
                            value: 3,
                            message: 'Min length is 3',
                        },
                    })}
                    placeholder="description"
                    rows={4}
                />
                <p className="contact__error">{errors.description?.message}</p>
                <input type="submit" />
            </form>
        </div>
    );
}

export default ContactForm;
