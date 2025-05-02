import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://formspree.io/f/mnndpnzp", { // ⬅️ Replace with your Formspree URL
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting form.");
        }
    };

    return (
        <BannerLayout>
            <div className="px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>Philippines</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>Antique</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Course:</span>
                                <span className='text-LightGray md:text-sm'>BSCS</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>juayongphoebe@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>phoebe-grace-juayong</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+639618080709</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="mailto:juayongphoebe@gmail.com"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/phoebegrace" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/phoebe-grace-juayong-785863290/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/codeworthy" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a>
                </div>

                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <form onSubmit={handleSubmit} className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <div className="flex flex-col w-full">
                            <div className="userIcon relative mb-6">
                                <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                    <HiUser />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input_stylings"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <div className="mailIcon relative mb-6">
                                <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                    <HiMail />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input_stylings"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <div className="textIcon relative mb-6">
                                <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                    <BsChatTextFill />
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="input_stylings"
                                    placeholder="Message"
                                    required
                                />
                            </div>
                        </div>

                        <div className="my-4">
                            <button type="submit" className="button">SEND MESSAGE</button>
                        </div>

                        {submitted && (
                            <div className="mt-4 text-Green font-medium">
                                ✅ Your message has been sent successfully!
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Contact;
