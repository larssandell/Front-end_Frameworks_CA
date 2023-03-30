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
                            value: 6,
                            message: 'Min length is 6',
                        },
                    })}
                    placeholder="Full name"
                />
                <p>{errors.fullName?.message}</p>
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
                <p>{errors.email?.message}</p>
                <label htmlFor="title">Title:</label>
                <input
                    {...register('title', {
                        required: 'Required',
                        minLength: {
                            value: 6,
                            message: 'Min length is 4',
                        },
                    })}
                    placeholder="Title"
                />
                <p>{errors.title?.message}</p>
                <label htmlFor="description">Description:</label>
                <textarea
                    {...register('description', {
                        required: 'Required',
                        minLength: {
                            value: 20,
                            message: 'Min length is 20',
                        },
                    })}
                    placeholder="description"
                    rows={4}
                />
                <p>{errors.description?.message}</p>
                <input type="submit" />
            </form>
        </div>
    );
}

export default ContactForm;
