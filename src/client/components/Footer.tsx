import { Link } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import Kern from "../assets/logo-dark.svg";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full mt-20 px-2 pb-4">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 sm:p-10">
                    {/* Brand */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <Link to="/">
                            <img src={Kern} alt="Kern Logo" className="rounded-2xl h-10 w-auto" />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                            Beautiful fonts & hand-crafted React components.
                            Open source and free to use in your projects.
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                            <a
                                href="https://github.com/vathsavv56"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-base" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vathsav-inavolu-561068368/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-base" />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=inavoluvathsav@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-all duration-300"
                                aria-label="Email"
                            >
                                <HiOutlineMail className="text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-bold text-gray-900 tracking-widest uppercase font-jetMono mb-1">
                            Explore
                        </span>
                        {[
                            { to: "/fonts", label: "Fonts" },
                            { to: "/components", label: "Components" },
                            { to: "/docs", label: "Documentation" },
                            { to: "/logo", label: "Brand / Logo" },
                        ].map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-fit"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-bold text-gray-900 tracking-widest uppercase font-jetMono mb-1">
                            Connect
                        </span>
                        <a
                            href="https://github.com/vathsavv56"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1.5 w-fit"
                        >
                            GitHub <FiExternalLink className="text-[10px] text-gray-300" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vathsav-inavolu-561068368/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1.5 w-fit"
                        >
                            LinkedIn <FiExternalLink className="text-[10px] text-gray-300" />
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=inavoluvathsav@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-fit"
                        >
                            inavoluvathsav@gmail.com
                        </a>
                        <a
                            href="https://github.com/vathsavv56"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-colors w-fit shadow-sm cursor-pointer"
                        >
                            My Portfolio <FiExternalLink className="text-[10px]" />
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-100 px-8 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-gray-400 font-jetMono">
                        © {year} Kern · Built by{" "}
                        <a
                            href="https://github.com/vathsavv56"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Vathsav
                        </a>
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/vathsavv56/kern"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-1.5 font-jetMono"
                        >
                            <FaGithub className="text-sm" />
                            Star on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
