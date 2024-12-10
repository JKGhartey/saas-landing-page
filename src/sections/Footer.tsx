import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div className="">
                        <Image
                            src={logoImage}
                            alt="logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="">
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.label}
                                    className="text-white/50 text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
