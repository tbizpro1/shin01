import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const SocialLinks = () => (
    <ul className="social-links list-unstyled align-items-center">
        <li className='mx-3'>
        <a href="#" title="facebook">
            <Facebook size={18} />
        </a>
        </li>
        <li className='mx-3'>
        <a href="#" title="twitter">
            <Twitter size={18} />
        </a>
        </li>
        <li className='mx-3'>
        <a href="#" title="instagram">
            <Instagram size={18} />
        </a>
        </li>
        <li className='mx-3'>
        <a href="#" title="linkedin">
            <Linkedin size={18} />
        </a>
        </li>
    </ul>
);
