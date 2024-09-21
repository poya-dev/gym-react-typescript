import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import ContactUsPageGrahpic from '@/assets/ContactUsPageGraphic.png';
import HText from '@/shared/HText';
import { FormEvent } from 'react';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};


function ContactUs({ setSelectedPage }: Props) {
  const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* FORM AND IAMGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              target="_blank"
              method="POST"
              action="https://formsubmit.co/hpoya313@gmail.com"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                placeholder="NAME"
                {...register('name', { required: true, maxLength: 50 })}
                className={inputStyles}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxLength' && 'Max length is 50 char.'}
                </p>
              )}

              <input
                type="text"
                placeholder="EMAIL"
                {...register('email', {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
                className={inputStyles}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === 'required' &&
                    'This field is required.'}
                  {errors.email.type === 'pattern' && 'Invalid email address.'}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register('message', { required: true, maxLength: 2000 })}
                className={inputStyles}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === 'required' &&
                    'This field is required.'}
                  {errors.message.type === 'maxLength' &&
                    'Max length is 2000 char.'}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                alt="contact-us-page-grahpic"
                src={ContactUsPageGrahpic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
